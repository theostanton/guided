import { DAO } from "../DAO";
import { GuideRow } from "../types";
import { Table } from "../constants";
export default class GuideDao extends DAO<GuideRow> {
    table: Table;
    getFromSlug(slug: string): Promise<any>;
}
//# sourceMappingURL=GuideDao.d.ts.map