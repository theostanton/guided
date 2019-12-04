import {DAO} from "../DAO";
import DB from "../index";
import {StayRow} from "../types";
import {Table} from "../constants";

export default class StayDao extends DAO<StayRow> {
    table: Table = 'stays';

    async ids(): Promise<{ id: number }[]> {
        return DB().many<{ id: number }>(`SELECT id
                                          from stays`)
    }

}