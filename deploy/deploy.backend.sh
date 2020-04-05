#!/bin/bash
set -e
work_dir="$(pwd)"
echo $work_dir

[ -z "$STAGE" ] && echo "No STAGE env provided" && exit 1
[ -z "$BUILD" ] && echo "No BUILD env provided" && exit 1

echo "Deploying $STAGE backend"
terraform workspace select "${STAGE}"

if [ -z "$CI" ]; then

  ENVS=$(terraform output env_file)
  export "$(echo "${ENVS}" | sed 's/#.*//g')"
  export TF_VAR_private_key_path=./guided-server-"${STAGE}".pem
fi

[ -z "$POSTGRES_SCHEMA" ] && echo "ENVS did not load" && exit 1

function log() {
  GREEN="\033[1;32m"
  NOCOLOR="\033[0m"
  echo
  echo
  echo -e "${GREEN} -- $1 -- ${NOCOLOR}"
  echo
}

log "Deploying $STAGE backend"

function buildAll() {
  cd "${work_dir}"
  cd ../backend
  yarn build
}

function generateMacroVersion() {
  DEPLOYED_MACRO_VERSION=$(terraform output deployed_macro_version)
  if [ "$BUILD" = 'true' ]; then
    ((DEPLOYED_MACRO_VERSION = DEPLOYED_MACRO_VERSION + 1))
  fi
  echo "${DEPLOYED_MACRO_VERSION}"
}

function prepareCompute() {
  cd "${work_dir}"
  cd ../backend/elements/compute || exit
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
  mkdir -p ../../../deploy/dist
  zip -rj ../../../deploy/"${compute_filename}" dist
  echo Zipped to "${compute_filename}"
}

function prepareServer() {
  cd "${work_dir}"
  cd ../backend/elements/graphql || exit
  rm -rf dist/index.js

  log 'Build graphql source'
  yarn build

  log 'Build graphql cache'
  export JWT_SECRET=someSecret
  node srv/buildCache.js connection=jdbc://superuser:password@database.ridersbible.com:5432/main
  if [ ! -f "dist/cache" ]; then
    echo "graphql/dist/cache does not exist"
    exit 1
  fi

  log 'Copying cache'
  mkdir -p ../../../deploy/dist
  cp dist/cache ../../../deploy/dist

  log 'Packing graphql'
  yarn webpack:server
  if [ ! -f "dist/server.js" ]; then
    echo "dist/server.js does not exist"
  fi

  cp dist/server.js ../../../deploy/dist/server.js
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
  cd "${work_dir}"
  log 'Deploying'
  export TF_VAR_stage=${STAGE}
  export TF_VAR_db_owner_user=${OWNER_USER}
  export TF_VAR_db_owner_password=${OWNER_PASSWORD}
  export TF_VAR_db_postgraphile_user=${POSTGRES_USER}
  export TF_VAR_db_postgraphile_password=${POSTGRES_PASSWORD}
  export TF_VAR_jwt_secret=${JWT_SECRET}
  terraform apply -var macro_version="${macro_version}" -auto-approve
fi

echo "Done"
