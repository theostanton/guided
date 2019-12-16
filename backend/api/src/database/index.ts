import memoize from "../utils/memoize";
import {IDatabase, QueryColumns} from "pg-promise";
import {Table} from "./constants";
import {Logger} from "@guided/common";
import daos from './daos'

export {
    daos
}

const pgp = require('pg-promise')({
    schema:'test'
});

const logger = new Logger('Database');

export function insert(data: any, table: Table, columns?: QueryColumns) {
    let query = pgp.helpers.insert(data, columns, table);
    query += ' RETURNING ID';
    return db().one(query)
}


export async function insertMany(data: any[], table: Table, columns?: QueryColumns): Promise<void> {
    let query = pgp.helpers.insert(data, columns, table);
    logger.info(`insertMany: ${query}`);
    await db().none(query)
}

export async function update(data: any, table: Table): Promise<void> {
    const columns = Object.keys(data).map(key => {
        if (key === 'id') {
            return '?id'
        } else {
            return key
        }
    });
    const query = pgp.helpers.update(data, columns, table) + ` where id='${data.id}'`;
    logger.info(query);
    await db().none(query)
}

export const db = memoize<IDatabase<any>>(() => {
    return pgp({
        host: '127.0.0.1',
        user: 'user',
        password: 'password',
        port: 5432,
        database: 'database'
    })
});

export default db;