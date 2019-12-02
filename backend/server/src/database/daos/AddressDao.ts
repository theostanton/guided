import {Address, AddressRow} from "../../types";
import {DAO} from "../DAO";
import {Table} from "../constants";

export default class AddressDao extends DAO<AddressRow> {
    table: Table = 'addresses'
}