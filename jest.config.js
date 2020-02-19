// process.env.STAGE = "testing"
process.env.POSTGRES_HOST = "guided-db-staging.cnl1a6eyfdur.eu-west-2.rds.amazonaws.com"
process.env.POSTGRES_PORT = "5432"
process.env.OWNER_USER = "superuser"
process.env.OWNER_PASSWORD = "password"
process.env.POSTGRES_USER = "guided_postgraphile"
process.env.POSTGRES_PASSWORD = "password"
process.env.POSTGRES_DB = "guided"
process.env.POSTGRES_SCHEMA = "guided"
process.env.POSTGRAPHILE_PORT = "5000"
process.env.JWT_SECRET = "someSecret"


module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  testRegex: "(.*\.test)\.ts?$",
  reporters: ["default", "jest-junit"],
}