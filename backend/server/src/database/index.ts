import memoize from "../utils/memoize";
import {IDatabase, QueryColumns} from "pg-promise";
import {Table} from "./constants";

const pgp = require('pg-promise')({});

export function insert(data: any | any[], table: Table, columns?: QueryColumns) {
    let query = pgp.helpers.insert(data, columns, table);
    query += ' RETURNING ID';
    return db().one(query)
}

export function update(data: any | any[], table: Table, columns?: QueryColumns) {
    const query = pgp.helpers.update(data, columns, table);
    return db().one(query)
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