import {Location, LocationRow} from "../../types";
import {DAO} from "../DAO";
import {Table} from "../constants";

export default class LocationDao extends DAO<LocationRow> {
    table: Table = 'locations'
}