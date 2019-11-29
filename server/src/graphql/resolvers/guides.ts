import memoize from "../../utils/memoize";
import {UserDao} from "../../database/users/UserDao";
import {Resolver} from "./types";
import {Guide, User} from "../../types";
import {GuideDao} from "../../database/users/GuideDao";

const dao = memoize<GuideDao>(() => {
    return new GuideDao()
});

export const allGuides: Resolver<Guide[]> = (_: void, args: void) => {
    return dao().getAll()
};

export const guide: Resolver<Guide | null> = (_: void, {id}: { id: string }) => {
    return dao().find(id)
};