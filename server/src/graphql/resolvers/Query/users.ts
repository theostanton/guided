import memoize from "../../../utils/memoize";
import {User} from "../../../types";
import UserDao from "../../../database/daos/UserDao";

const dao = memoize<UserDao>(() => {
    return new UserDao()
});

function user(_: void, {id}: { id: string }): Promise<User | null> {
    return dao().find(id)
}

function allUsers(_: void, args: void): Promise<User[]> {
    return dao().getAll()
}

export {
    user,
    allUsers
}