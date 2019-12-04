import {DAO} from "../DAO";
import {GuideRow} from "../types";
import {Table} from "../constants";

export default class GuideDao extends DAO<GuideRow> {
    table: Table = 'guides'
}