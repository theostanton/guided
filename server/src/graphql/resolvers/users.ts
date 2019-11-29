import {User} from "../../types";
import {Resolver} from "./types";
import memoize from "../../utils/memoize";
import {UserDao} from "../../database/users/UserDao";

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