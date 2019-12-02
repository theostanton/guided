import {Guide, GuideRow} from "../../types";
import {DAO} from "../DAO";
import {Table} from "../constants";

export default class GuideDao extends DAO<GuideRow> {
    table: Table = 'guides'
}