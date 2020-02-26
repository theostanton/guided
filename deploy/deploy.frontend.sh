#!/bin/bash
set -e
work_dir="$(pwd)"
echo $work_dir

[ -z "$STAGE" ] && echo "No STAGE provided" && exit 1

echo "Deploying $STAGE frontend"

graphql_endpoint=$(terraform output lambda_api_url) || exit
app_version=$(terraform output deployed_macro_version) || exit

cd ../frontend/website || exit
rm -rf public

echo -- Build website --
export GATSBY_GUIDED_GRAPHQL="${graphql_endpoint}"
export GATSBY_STAGE="${STAGE}"
export GATSBY_APP_VERSION="${app_version}"
export GATSBY_MAPBOX_TOKEN=pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazV4bXlkN2Qwd21nM2RydnJ5NG5jdXN4In0.ph8Cr6j3AR1SUnX3bOnr-A
gatsby build

echo -- Build website --
yarn push
