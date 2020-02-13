console.log(process.env, "process.env")

module.exports = {
  "roots": [
    "<rootDir>/src",
  ],
  preset: "ts-jest",
  testRegex: "(.*\.test)\.ts?$",
  reporters: ["default", "jest-junit"],
}