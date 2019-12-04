import memoize from "../../../utils/memoize";
import UserDao from "../../../database/daos/UserDao";
import {UserRow} from "../../../database/types";

const dao = memoize<UserDao>(() => {
    return new UserDao()
});

function user(_: void, {id}: { id: string }): Promise<UserRow | null> {
    return dao().get(id)
}

function allUsers(_: void, args: void): Promise<UserRow[]> {
    return dao().getAll()
}

export {
    user,
    allUsers
}