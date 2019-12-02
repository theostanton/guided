import memoize from "../../../utils/memoize";
import {User, UserRow} from "../../../types";
import UserDao from "../../../database/daos/UserDao";

const dao = memoize<UserDao>(() => {
    return new UserDao()
});

function user(_: void, {id}: { id: number }): Promise<UserRow | null> {
    return dao().get(id)
}

function allUsers(_: void, args: void): Promise<UserRow[]> {
    return dao().getAll()
}

export {
    user,
    allUsers
}