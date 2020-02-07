import "@guided/envs";
import * as pgPromise from "pg-promise";
import { Extensions } from "./extensions";
export declare const DATABASE_URL: string;
export declare const database: pgPromise.IDatabase<Extensions, import("pg-promise/typescript/pg-subset").IClient> & Extensions;
//# sourceMappingURL=index.d.ts.map