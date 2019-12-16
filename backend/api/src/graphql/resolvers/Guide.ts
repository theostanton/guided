import DB from "../../database/";
import UserDao from "../../database/daos/UserDao";
import {GuideRow, StayRow, UserRow} from "../../database/types";
import {Guide} from '@guided/common'

async function stays(guide: Guide): Promise<StayRow[]> {
    const query = `SELECT * from stays where guide='${guide.id}' order by position asc`;
    return  DB().query(query);
}

async function user(guide: GuideRow): Promise<UserRow> {
    return new UserDao().get(guide.user)
}

export default {
    stays,
    user
}