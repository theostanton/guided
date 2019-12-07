import {DAO} from "../DAO";
import {GuideRow} from "../types";
import {Table} from "../constants";
import DB from "../index";

export default class GuideDao extends DAO<GuideRow> {
    table: Table = 'guides';

    getFromSlug(slug: string):Promise<any> {
        let query = `
            SELECT *
            FROM ${this.table}
            where slug = $1
        `;
        return DB().one(query, [slug])
    }
}