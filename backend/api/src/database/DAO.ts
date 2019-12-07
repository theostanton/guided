import {Table} from "./constants";
import DB, {insert, update} from "./index";

export abstract class DAO<T> {
    abstract table: Table;

    async get(id: string): Promise<T> {
        return DB().one<T>(`
            SELECT *
            FROM public.${this.table}
            where id = $1
        `, [id])
    }

    async getOptional(id: string): Promise<T | null> {
        return DB().oneOrNone<T>(`
            SELECT *
            FROM public.${this.table}
            where id = $1
        `, [id])
    }

    async findOne(keyValues: { [key in string]: string | number | boolean }): Promise<T> {

        const where = Object.keys(keyValues).map(key => {
            return `"${key}"='${keyValues[key]}'`
        }).join(' and ');

        let query = `
            SELECT *
            FROM public.${this.table}
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
            FROM public.${this.table}
            where ${where}
        `;
        return DB().manyOrNone<T>(query)
    }

    async deleteWhere(keyValues: { [key in string]: string | number | boolean }): Promise<any> {
        const where = Object.keys(keyValues).map(key => {
            return `"${key}"='${keyValues[key]}'`
        }).join(' and ');
        let query = `
            DELETE FROM public.${this.table}
            where ${where}
        `;
        return DB().none(query)
    }

    async getAll(): Promise<T[]> {
        return DB().manyOrNone<T>(`
            SELECT *
            FROM public.${this.table}
        `)
    }

    async insert(t: T): Promise<{ id: string }> {
        return insert(t, this.table)
    }

    async update(t: Partial<T>): Promise<void> {
        return update(t, this.table)
    }
}