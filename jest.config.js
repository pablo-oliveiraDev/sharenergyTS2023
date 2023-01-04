/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  coverageDirectory: "./coverage",
  testMatch: ["**?(*.)+(spec).ts"],  resetMocks: true,
 clearMocks: true
}