import {DAO} from "../DAO";
import {User, UserRow} from "../../types";
import {Table} from "../constants";

export default class UserDao extends DAO<UserRow> {
    table: Table = 'users';
}