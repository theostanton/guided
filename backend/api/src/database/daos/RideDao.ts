import {DAO} from "../DAO";
import {RideRow} from "../types";
import {Table} from "../constants";

export default class RideDao extends DAO<RideRow> {
    table: Table = 'rides'
}