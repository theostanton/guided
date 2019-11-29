import {DAO} from "../DAO";
import {Stay} from "../../types";
import {Table} from "../constants";

export default class StayDao extends DAO<Stay> {
    table: Table = 'stays'

}