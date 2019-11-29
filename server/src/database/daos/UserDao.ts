import {DAO} from "../DAO";
import {User} from "../../types";
import {Table} from "../constants";

export default class UserDao extends DAO<User> {
    table: Table = 'users';
}