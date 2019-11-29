import {Day} from "../../types";
import {DAO} from "../DAO";
import {Table} from "../constants";

export default class DayDao extends DAO<Day> {
    table: Table = 'days'
}