#!/bin/bash
set -e

deploy_dir="$(pwd)"
echo deploy_dir
echo "${deploy_dir}"

cd "../backend"
backend_dir="$(pwd)"
echo backend_dir
echo "${backend_dir}"

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
# shellcheck disable=SC2001
# shellcheck disable=SC2046
export $(echo "${ENVS}" | sed 's/#.*//g')

[ -z "$POSTGRES_SCHEMA" ] && echo "ENVS did not load" && exit 1

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
  if [ "$BUILD" = 'true' ]; then
    ((DEPLOYED_MACRO_VERSION = DEPLOYED_MACRO_VERSION + 1))
  fi
  echo "${DEPLOYED_MACRO_VERSION}"
}

prepareCompute() {
  cd "${backend_dir}/elements/compute" || exit
  rm -rf dist/index.js

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
  mkdir -p "${deploy_dir}/dist"
  zip -rj "${deploy_dir}/${compute_filename}" dist
  echo Zipped to "${compute_filename}"
}

prepareServer() {
  cd "${backend_dir}/elements/graphql" || exit
  rm -rf dist/index.js

  log 'Build graphql source'
  yarn build

  log 'Build graphql cache'
  node srv/buildCache.js
  if [ ! -f "dist/cache" ]; then
    echo "graphql/dist/cache does not exist"
    exit 1
  fi

  log 'Copying cache'
  mkdir -p "${deploy_dir}/dist"
  cp dist/cache "${deploy_dir}/dist"

  log 'Packing graphql'
  yarn webpack:server
  if [ ! -f "dist/server.js" ]; then
    echo "dist/server.js does not exist"
  fi

  cp dist/server.js "${deploy_dir}/dist/server.js"
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
