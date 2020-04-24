require('dotenv').config({
    path: `${__dirname}/.env`,
})

process.env.STAGE = 'testing'

module.exports = {
    testEnvironment: 'node',
    preset: 'ts-jest',
    testRegex: '(.*.test).ts?$',
    reporters: ['default', 'jest-junit'],
}
