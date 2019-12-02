import {DAO} from "../DAO";
import {Stay, StayRow} from "../../types";
import {Table} from "../constants";
import DB from "../index";

export default class StayDao extends DAO<StayRow> {
    table: Table = 'stays'

    async ids(): Promise<{id:number}[]> {
        return DB().many<{id:number}>(`SELECT id from stays`)
    }

}