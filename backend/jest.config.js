require("dotenv").config({
  path: `${__dirname}/.env`,
})

module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  testRegex: "(.*\.test)\.ts?$",
  reporters: ["default", "jest-junit"],
}