#!/bin/bash
set -e

deploy_dir="$(pwd)"
echo deploy_dir
echo "${deploy_dir}"
mkdir -p "${deploy_dir}/dist"

cd "../backend"
backend_dir="$(pwd)"
echo backend_dir
echo "${backend_dir}"

cd "${deploy_dir}"

cd "../go"
go_dir="$(pwd)"
echo go_dir
echo "${go_dir}"

cd "${deploy_dir}"

[ -z "$STAGE" ] && echo "No STAGE env provided" && exit 1
[ -z "$BUILD" ] && echo "No BUILD env provided" && exit 1
[ -z "$DEPLOY" ] && echo "No DEPLOY env provided" && exit 1

logEnv(){
  '%s\n' "${$1: -3}"
}

echo "Deploying $STAGE backend"
terraform workspace select "${STAGE}"

ENVS=$(terraform output env_file)
while read -r line; do
  # shellcheck disable=SC2163
  export "${line}"
done <<< "${ENVS}"

[ -z "$POSTGRES_SCHEMA" ] && echo "ENVS did not load POSTGRES_SCHEMA" && exit 1
[ -z "$OWNER_PASSWORD" ] && echo "ENVS did not load OWNER_PASSWORD" && exit 1

log() {
  GREEN="\033[1;32m"
  NOCOLOR="\033[0m"
  echo
  echo
  echo -e "${GREEN} -- $1 -- ${NOCOLOR}"
  echo
}

log "Deploying $STAGE backend"

buildAll() {
  cd "${backend_dir}"
  yarn build
}

generateMacroVersion() {
  DEPLOYED_MACRO_VERSION=$(terraform output deployed_macro_version)
  ((DEPLOYED_MACRO_VERSION = DEPLOYED_MACRO_VERSION + 1))
  echo "${DEPLOYED_MACRO_VERSION}"
}

prepareCompute() {
  cd "${backend_dir}/elements/compute" || exit
  mkdir -p dist

  log 'Build compute'
  yarn build

  log 'Pack compute'
  yarn webpack
  if [ ! -f "dist/index.js" ]; then
    echo "compute/dist/index.js does not exist"
    exit 1
  fi
  log 'Zip compute'
  compute_filename=dist/"${STAGE}"-"$app_version"-compute.zip
  zip -rj "${deploy_dir}/${compute_filename}" dist
  echo Zipped to "${compute_filename}"
}

prepareServer() {
  cd "${backend_dir}/elements/graphql" || exit
  mkdir -p dist

  log 'Build graphql source'
  yarn build

  log 'Build graphql cache'
  rm -f dist/cache
  node srv/buildCache.js
  if [ ! -f "dist/cache" ]; then
    echo "graphql/dist/cache does not exist"
    exit 1
  fi

  log 'Copying cache'
  mkdir -p "${deploy_dir}/dist"
  cp dist/cache "${deploy_dir}/dist"

  log 'Packing graphql'
  rm -f dist/server.js
  yarn webpack:server
  if [ ! -f "dist/server.js" ]; then
    echo "dist/server.js does not exist"
    exit 1
  fi

  cp dist/server.js "${deploy_dir}/dist/server.js"
}

prepareAmendDates(){
  log 'Build amend dates'
  cd "${go_dir}/amend_dates" || exit
  mkdir -p dist
  go install
  GOOS=linux GOARCH=amd64 go build -o dist/main
  amend_dates_filename=dist/"${STAGE}"-"$app_version"-amend-dates.zip
  zip -rj "${deploy_dir}/${amend_dates_filename}" dist/main
}

macro_version=$(generateMacroVersion)
app_version="0.1.${macro_version}"
echo 'app_version'
echo "${app_version}"

if [ "$BUILD" = 'true' ]; then
  log 'Building'
  buildAll
  prepareCompute
  prepareServer
  prepareAmendDates
fi

if [ "$DEPLOY" = 'true' ]; then
  cd "${deploy_dir}"
  log 'Deploying'
  export TF_VAR_stage=${STAGE}
  export TF_VAR_db_owner_user=${OWNER_USER}
  export TF_VAR_db_postgraphile_user=${POSTGRES_USER}
  export TF_VAR_google_key=${GOOGLE_KEY}
  terraform apply -var macro_version="${macro_version}" -auto-approve
fi

echo "Done"
