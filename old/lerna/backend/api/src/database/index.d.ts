import { IDatabase, QueryColumns } from "pg-promise";
import { Table } from "./constants";
import daos from './daos';
export { daos };
export declare function insert(data: any, table: Table, columns?: QueryColumns): Promise<any>;
export declare function insertMany(data: any[], table: Table, columns?: QueryColumns): Promise<void>;
export declare function update(data: any, table: Table): Promise<void>;
export declare const db: () => IDatabase<any, import("pg-promise/typescript/pg-subset").IClient>;
export default db;
//# sourceMappingURL=index.d.ts.map