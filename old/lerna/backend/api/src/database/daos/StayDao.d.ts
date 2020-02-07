import { DAO } from "../DAO";
import { StayRow } from "../types";
import { Table } from "../constants";
export default class StayDao extends DAO<StayRow> {
    table: Table;
    ids(): Promise<{
        id: number;
    }[]>;
}
//# sourceMappingURL=StayDao.d.ts.map