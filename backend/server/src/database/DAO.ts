import {User} from "../types";
import {Table} from "./constants";
import DB, {insert, update} from "./index";

export abstract class DAO<T> {
    abstract table: Table;

    async get(id: number): Promise<T> {
        return DB().one<T>(`
            SELECT *
            FROM public.${this.table}
            where id = $1
        `, [id])
    }

    async getOptional(id: number): Promise<T | null> {
        return DB().oneOrNone<T>(`
            SELECT *
            FROM public.${this.table}
            where id = $1
        `, [id])
    }

    async findOne(keyValues: { [key in string]: string | number | boolean }): Promise<T> {

        const where = Object.keys(keyValues).map(key => {
            return `${key}=${keyValues[key]}`
        }).join(' and ');

        return DB().one<T>(`
            SELECT *
            FROM public.${this.table}
            where ${where}
        `)

    }

    async findMany(keyValues: { [key in string]: string | number | boolean }): Promise<T[]> {
        const where = Object.keys(keyValues).map(key => {
            return `${key}=${keyValues[key]}`
        }).join(' and ');
        return DB().manyOrNone<T>(`
            SELECT *
            FROM public.${this.table}
            where ${where}
        `)
    }

    async getAll(): Promise<T[]> {
        return DB().manyOrNone<T>(`
            SELECT *
            FROM public.${this.table}
        `)
    }

    async insert(t: Partial<T>): Promise<{ id: number }> {
        return insert(t, this.table)
    }

    async update(t: T): Promise<{ id: number }> {
        return update(t, this.table)
    }
}