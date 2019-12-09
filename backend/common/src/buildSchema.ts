import schema from './schema'
import {generateTypeScriptTypes} from 'graphql-schema-typescript';

generateTypeScriptTypes(schema, 'src/types.ts', {
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