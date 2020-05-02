[ -z "$STAGE" ] && echo "No STAGE env provided" && exit 1
[ -z "$GOOGLE_KEY" ] && echo "No GOOGLE_KEY env provided" && exit 1

generateMacroVersion() {
  DEPLOYED_MACRO_VERSION=$(terraform output deployed_macro_version)
  ((DEPLOYED_MACRO_VERSION = DEPLOYED_MACRO_VERSION + 1))
  echo "${DEPLOYED_MACRO_VERSION}"
}

echo "Deploying $STAGE backend"
terraform workspace select "${STAGE}"

macro_version=$(generateMacroVersion)
app_version="0.1.${macro_version}"
echo 'app_version'
echo "${app_version}"

export TF_VAR_stage=${STAGE}
export TF_VAR_google_key=${GOOGLE_KEY}
terraform apply -var macro_version="${macro_version}" -auto-approve