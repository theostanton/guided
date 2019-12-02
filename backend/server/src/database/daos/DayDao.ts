import {Day, DayRow} from "../../types";
import {DAO} from "../DAO";
import {Table} from "../constants";

export default class DayDao extends DAO<DayRow> {
    table: Table = 'days'
}