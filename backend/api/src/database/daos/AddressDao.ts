import {DAO} from "../DAO";
import {Table} from "../constants";
import {AddressRow} from "../types";

export default class AddressDao extends DAO<AddressRow> {
    table: Table = 'addresses'
}