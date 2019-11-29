import {User} from "../../types";
import {Resolver} from "./types";
import memoize from "../../utils/memoize";
import {UserDao} from "../../database/users/UserDao";

const dao = memoize<UserDao>(() => {
    return new UserDao()
});

export const allUsers: Resolver<User[]> = (_: void, args: void) => {
    return dao().getAll()
};

export const user: Resolver<User | null> = (_: void, {id}: { id: string }) => {
    return dao().find(id)
};