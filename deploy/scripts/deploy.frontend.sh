#!/bin/bash
set -e

[ -z "$STAGE" ] && echo "No STAGE provided" && exit 1

echo "Deploying $STAGE frontend"
terraform workspace select "${STAGE}"

graphql_endpoint=$(terraform output graphql_endpoint) || exit
graphql_websocket=$(terraform output graphql_websocket) || exit
app_version=$(terraform output deployed_macro_version) || exit

echo graphql_websocket
echo "${graphql_websocket}"
echo graphql_endpoint
echo "${graphql_endpoint}"
echo app_version
echo "${app_version}"

cd ../frontend/website || exit
rm -rf public

echo -- Build website --
export GATSBY_GUIDED_GRAPHQL="${graphql_endpoint}"
export GATSBY_GUIDED_WEBSOCKET="${graphql_websocket}"
export GATSBY_STAGE="${STAGE}"
export GATSBY_APP_VERSION="${app_version}"
export GATSBY_MAPBOX_TOKEN=pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazhtcjZsMjEwZTNyM2xvMnh0cmg5aWh0In0.FaVZYyNvHVkT_sx-uBP4RQ
yarn build

echo -- Push website --
#yarn push
yarn serve
