import {Table} from "./constants";
import DB, {insert, insertMany, update} from "./index";
import {Logger} from "@guided/common";


export abstract class DAO<T> {

    abstract table: Table;

    logger = new Logger(`DAO`);

    async get(id: string): Promise<T> {
        return DB().one<T>(`
            SELECT *
            FROM ${this.table}
            where id = $1
        `, [id])
    }

    async getOptional(id: string): Promise<T | null> {
        return DB().oneOrNone<T>(`
            SELECT *
            FROM ${this.table}
            where id = $1
        `, [id])
    }

    async findOne(keyValues: { [key in string]: string | number | boolean }): Promise<T> {

        const where = Object.keys(keyValues).map(key => {
            return `"${key}"='${keyValues[key]}'`
        }).join(' and ');

        let query = `
            SELECT *
            FROM ${this.table}
            where ${where}
        `;
        return DB().one<T>(query)

    }

    async findMany(keyValues: { [key in string]: string | number | boolean }): Promise<T[]> {
        const where = Object.keys(keyValues).map(key => {
            return `"${key}"='${keyValues[key]}'`
        }).join(' and ');
        let query = `
            SELECT *
            FROM ${this.table}
            where ${where}
        `;
        return DB().manyOrNone<T>(query)
    }

    async deleteWhere(keyValues: { [key in string]: string | number | boolean }): Promise<any> {
        const where = Object.keys(keyValues).map(key => {
            const value = keyValues[key];
            if (typeof value === 'boolean') {
                return `"${key}"=${keyValues[key]}`
            } else {
                return `"${key}"='${keyValues[key]}'`
            }
        }).join(' and ');
        let query = `
            DELETE FROM ${this.table}
            where ${where}
        `;
        this.logger.info(`deleteWhere: ${query}`);
        return DB().none(query)
    }

    async getAll(): Promise<T[]> {
        return DB().manyOrNone<T>(`
            SELECT *
            FROM ${this.table}
        `)
    }

    async insert(t: T): Promise<{ id: string }> {
        return insert(t, this.table)
    }

    async insertMany(ts: T[]): Promise<void> {
        if (ts.length === 0) {
            return
        }
        const columns = Object.keys(ts[0]);
        return insertMany(ts, this.table, columns)
    }

    async update(t: Partial<T>): Promise<void> {
        return update(t, this.table)
    }
}