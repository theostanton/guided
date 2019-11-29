import {Guide} from "../../types";
import {DAO} from "../DAO";
import {Table} from "../constants";

export class GuideDao extends DAO<Guide> {
    table: Table = 'guides'
}