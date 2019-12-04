import {DAO} from "../DAO";
import {DayRow} from "../types";
import {Table} from "../constants";

export default class DayDao extends DAO<DayRow> {
    table: Table = 'days'
}