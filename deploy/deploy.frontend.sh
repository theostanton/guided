#!/bin/bash
set -e
work_dir="$(pwd)"
echo $work_dir

[ -z "$STAGE" ] && echo "No STAGE provided" && exit 1

echo "Deploying $STAGE frontend"

graphql_endpoint=$(terraform output graphql_endpoint) || exit
graphql_websocket=$(terraform output graphql_websocket) || exit
app_version=$(terraform output deployed_macro_version) || exit

cd ../frontend/website || exit
rm -rf public

echo -- Build website --
export GATSBY_GUIDED_GRAPHQL="${graphql_endpoint}"
export GATSBY_GUIDED_WEBSOCKET="${graphql_websocket}"
export GATSBY_STAGE="${STAGE}"
export GATSBY_APP_VERSION="${app_version}"
export GATSBY_MAPBOX_TOKEN=pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazgydW0wamEwazQ5M21wdHp2YjNndGJ2In0.qpytCBKZ1IptSm9UrFRbqA
gatsby build

echo -- Push website --
yarn push
