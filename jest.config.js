process.env.STAGE = "test"

module.exports = {
  "roots": [
    "<rootDir>/src",
    "<rootDir>/test",
  ],
  preset: "ts-jest",
  testRegex: "(.*\.test)\.ts?$",
  reporters: ["default", "jest-junit"],
}