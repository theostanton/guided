import memoize from "../utils/memoize";
import {IDatabase, QueryColumns} from "pg-promise";
import {Table} from "./constants";

const pgp = require('pg-promise')({});

export function insert(data: any | any[], table: Table, columns?: QueryColumns) {
    let query = pgp.helpers.insert(data, columns, table);
    query += ' RETURNING ID';
    return db().one(query)
}

export async function update(data: any, table: Table):Promise<void> {
    const columns = Object.keys(data).map(key => {
        if (key === 'id') {
            return '?id'
        } else {
            return key
        }
    });
    const query = pgp.helpers.update(data, columns, table) + ` where id='${data.id}'`;
    console.log(query)
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