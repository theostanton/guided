import {User} from "../types";
import {Table} from "./constants";
import DB, {insert, update} from "./index";

export abstract class DAO<T> {
    abstract table: Table;

    async find(id: string): Promise<T | null> {
        return DB().oneOrNone<T>(`
            SELECT *
            FROM public.${this.table}
            where id = $1
        `, [id])
    }

    async findWhere(keyValues: { [key in string]: string }): Promise<T | null> {
        const where = Object.keys(keyValues).map(key => {
            return `${key}=${keyValues[key]}`
        }).join(' and ');
        return DB().oneOrNone<T>(`
            SELECT *
            FROM $1
            where $2
        `, [this.table, where])
    }

    async getAll(): Promise<T[]> {
        return DB().manyOrNone<T>(`
            SELECT *
            FROM public.${this.table}
        `)
    }

    async insert(t: User): Promise<User | null> {
        return insert(t, this.table)
    }

    async update(t: User): Promise<User | null> {
        return update(t, this.table)
    }
}