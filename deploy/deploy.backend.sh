#!/bin/bash
set -e
work_dir="$(pwd)"
echo $work_dir

[ -z "$STAGE" ] && echo "No STAGE provided" && exit 1

echo "Deploying $STAGE backend"

function buildAll() {
  cd $work_dir
  cd ../backend
  yarn build
}

function incrementVersion() {
  DEPLOYED_MACRO_VERSION=$(terraform output deployed_macro_version)
  ((DEPLOYED_MACRO_VERSION = DEPLOYED_MACRO_VERSION + 1))
  echo "${DEPLOYED_MACRO_VERSION}"
}

function prepareCompute() {
  cd $work_dir
  cd ../backend/elements/compute || exit
  rm -rf dist/index.js

  echo -- Build compute --
  yarn build
  echo -- Pack compute --
  yarn webpack
  if [ ! -f "dist/index.js" ]; then
    echo "compute/dist/index.js does not exist"
    exit 1
  fi
  echo -- Zip compute --
  compute_filename=dist/"${STAGE}"-"$app_version"-compute.zip
  zip -rj ../../../deploy/"${compute_filename}" dist
  echo Zipped to "${compute_filename}"
}

function prepareGraphql() {
  cd $work_dir
  cd ../backend/elements/graphql || exit
  rm -rf dist/index.js
  echo -- Build graphql source --
  yarn build
  echo -- Build graphql cache --
  node srv/buildCache.js connection=jdbc://superuser:password@"${STAGE}"-database.ridersbible.com:5432/main
  if [ ! -f "dist/cache" ]; then
    echo "graphql/dist/cache does not exist"

    exit 1
  fi

  echo -- Pack graphql --
  yarn webpack
  if [ ! -f "dist/index.js" ]; then
    echo "dist/index.js does not exist"
  fi
  echo -- Zip graphql --
  graphql_filename=dist/"${STAGE}"-"$app_version"-graphql.zip
  zip -rj ../../../deploy/"${graphql_filename}" dist
  echo Zipped to "${graphql_filename}"
}

#macro_version=$(incrementVersion)
macro_version=27
echo 'macro_version'
echo "${macro_version}"
app_version="0.0.${macro_version}"

buildAll

prepareCompute

prepareGraphql

echo -- Deploying --
cd $work_dir
terraform apply -var-file vars/"${STAGE}".tfvars -var macro_version="${macro_version}" -auto-approve
