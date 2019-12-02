import {DAO} from "../DAO";
import {Stay, StayRow} from "../../types";
import {Table} from "../constants";

export default class StayDao extends DAO<StayRow> {
    table: Table = 'stays'

}