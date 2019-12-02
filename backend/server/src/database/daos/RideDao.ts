import {Ride, RideRow} from "../../types";
import {DAO} from "../DAO";
import {Table} from "../constants";

export default class RideDao extends DAO<RideRow> {
    table: Table = 'rides'
}