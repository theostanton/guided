import { Table } from "./constants";
export declare abstract class DAO<T> {
    abstract table: Table;
    logger: any;
    get(id: string): Promise<T>;
    getOptional(id: string): Promise<T | null>;
    findOne(keyValues: {
        [key in string]: string | number | boolean;
    }): Promise<T>;
    findMany(keyValues: {
        [key in string]: string | number | boolean;
    }): Promise<T[]>;
    deleteWhere(keyValues: {
        [key in string]: string | number | boolean;
    }): Promise<any>;
    getAll(): Promise<T[]>;
    insert(t: T): Promise<{
        id: string;
    }>;
    insertMany(ts: T[]): Promise<void>;
    update(t: Partial<T>): Promise<void>;
}
//# sourceMappingURL=DAO.d.ts.map