import {DAO} from "../DAO";
import {Table} from "../constants";
import {SpotRow} from "../../types";

export default class SpotDao extends DAO<SpotRow> {
    table: Table = 'spots';
}