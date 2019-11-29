import {Spot} from "../../types";
import {DAO} from "../DAO";
import {Table} from "../constants";

export default class SpotDao extends DAO<Spot> {
    table: Table = 'spots'
}