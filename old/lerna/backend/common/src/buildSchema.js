"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./schema"));
const graphql_schema_typescript_1 = require("graphql-schema-typescript");
graphql_schema_typescript_1.generateTypeScriptTypes(schema_1.default, 'src/types.ts', {
    typePrefix: '',
    global: false
})
    .then(() => {
    console.log('DONE');
    process.exit(0);
})
    .catch(err => {
    console.error(err);
    process.exit(1);
});
