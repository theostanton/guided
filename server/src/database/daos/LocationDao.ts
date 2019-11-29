import {Location} from "../../types";
import {DAO} from "../DAO";
import {Table} from "../constants";

export default class LocationDao extends DAO<Location> {
    table: Table = 'locations'
}