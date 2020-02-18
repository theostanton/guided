// process.env.STAGE = "testing"
process.env.POSTGRES_HOST = "localhost"
process.env.POSTGRES_PORT = "5432"
process.env.OWNER_USER = "superuser"
process.env.OWNER_PASSWORD = "password"
process.env.POSTGRES_USER = "guided_postgraphile"
process.env.POSTGRES_PASSWORD = "postgraphile_staging"
process.env.POSTGRES_DB = "testing"
process.env.DATABASE_SCHEMA = "guided"
process.env.POSTGRAPHILE_PORT = "5000"
process.env.JWT_SECRET = "someSecret"


module.exports = {
  setupFiles: ["dotenv/config"],
  testEnvironment: "node",
  preset: "ts-jest",
  testRegex: "(.*\.test)\.ts?$",
  reporters: ["default", "jest-junit"],
}