#!/bin/bash
set -e
work_dir="$(pwd)"
echo $work_dir

[ -z "$STAGE" ] && echo "No STAGE env provided" && exit 1
[ -z "$BUILD" ] && echo "No BUILD env provided" && exit 1

terraform workspace select $STAGE


#ENVS=$(terraform output env_file)
#export $(echo "${ENVS}" | sed 's/#.*//g')

[ -z "$POSTGRES_SCHEMA" ] && echo "ENVS did not load" && exit 1

GREEN="\033[1;32m"
NOCOLOR="\033[0m"

function log() {
  echo
  echo
  echo -e "${GREEN} -- $1 -- ${NOCOLOR}"
  echo
}

log "Deploying $STAGE backend"

function buildAll() {
  cd $work_dir
  cd ../backend
  yarn build
}

function incrementVersion() {
  DEPLOYED_MACRO_VERSION=$(terraform output deployed_macro_version)
  if [ "$BUILD" = 'true' ]; then
    ((DEPLOYED_MACRO_VERSION = DEPLOYED_MACRO_VERSION + 1))
  fi
  echo "${DEPLOYED_MACRO_VERSION}"
}

function prepareCompute() {
  cd $work_dir
  cd ../backend/elements/compute || exit
  rm -rf dist/index.js

  log Build compute
  yarn build
  log Pack compute
  yarn webpack
  if [ ! -f "dist/index.js" ]; then
    echo "compute/dist/index.js does not exist"
    exit 1
  fi
  log Zip compute
  compute_filename=dist/"${STAGE}"-"$app_version"-compute.zip
  zip -rj ../../../deploy/"${compute_filename}" dist
  echo Zipped to "${compute_filename}"
}

function prepareServer() {
  cd $work_dir
  cd ../backend/elements/graphql || exit
  rm -rf dist/index.js
  log Build graphql source
  yarn build
  log Build graphql cache
  node srv/buildCache.js connection=jdbc://superuser:password@"${STAGE}"-database.ridersbible.com:5432/main
  if [ ! -f "dist/cache" ]; then
    echo "graphql/dist/cache does not exist"

    exit 1
  fi

  echo 'Copying cache'
  cp dist/cache ../../../deploy/dist

  log Pack graphql
  yarn webpack:server
  if [ ! -f "dist/server.js" ]; then
    echo "dist/server.js does not exist"
  fi

  cp dist/server.js ../../../deploy/dist/server.js
}

#macro_version=$(incrementVersion)
macro_version=49
echo 'macro_version'
echo "${macro_version}"
app_version="0.1.${macro_version}"

if [ "$BUILD" = 'true' ]; then
  echo 'Building'
  buildAll

  prepareCompute

  prepareServer
else
  echo 'Skipping Build'
fi

log Deploying
cd $work_dir

terraform apply -var-file vars/"${STAGE}".tfvars -var macro_version="${macro_version}" -auto-approve
