#!/bin/bash
set -e

echo "$ENV_FILE=$ENV_FILE"

if [ "$ENV_FILE" = "" ]; then
  echo "No $ENV_FILE envvar found; cannot continue."
  exit 1
fi

export $(grep -v '^#' "$ENV_FILE" | xargs)

export DATABASE_URL="postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}"

echo "$DATABASE_URL"

if [ "$POSTGRES_USER" = "" ]; then
  echo "No POSTGRES_USER envvar found; cannot continue."
  exit 1
fi

CURRENT_DIR=`dirname $BASH_SOURCE`

# Start

rm -rf $CURRENT_DIR/../.serverless

echo "Phase 1: Create serverless package"
sls package

echo "Phase 2: Build webpack bundle and add it to serverless package"

# Build
yarn webpack

# Make cache
node src/makeCache

# Bundle
rm -f lambda.zip
cd dist
find . -type f  -not -name '*.js.map' | zip -Xqr@ ../lambda.zip
cd ..
mv $CURRENT_DIR/lambda.zip $CURRENT_DIR/.serverless/graphql.zip


# Update SHA hash for modified function zip file
SHA=$(openssl dgst -sha256 -binary $CURRENT_DIR/.serverless/graphql.zip | openssl enc -base64 | sed -e "s#/#\\\/#g")
if [ $(uname -s) == 'Darwin' ]; then
  # OSX sed syntax is slightly different
  sed -i '' -e "s/\"CodeSha256\": \".*\"/\"CodeSha256\": \"${SHA}\"/g" $CURRENT_DIR/.serverless/*.json
else
  sed -i "s/\"CodeSha256\": \".*\"/\"CodeSha256\": \"${SHA}\"/g" $CURRENT_DIR/.serverless/*.json
fi

echo "Phase 3: Create S3 Bucket for serverless function"
node src/createS3Bucket.js

echo "Phase 4: Deploy package to AWS"
sls deploy -p .serverless

echo "Complete"