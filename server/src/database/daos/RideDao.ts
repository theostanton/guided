import {Ride} from "../../types";
import {DAO} from "../DAO";
import {Table} from "../constants";

export default class RideDao extends DAO<Ride> {
    table: Table = 'rides'
}