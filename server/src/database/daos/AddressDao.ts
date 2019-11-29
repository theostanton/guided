import {Address} from "../../types";
import {DAO} from "../DAO";
import {Table} from "../constants";

export default class AddressDao extends DAO<Address> {
    table: Table = 'addresses'
}