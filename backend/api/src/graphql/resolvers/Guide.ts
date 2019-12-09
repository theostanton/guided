import StayDao from "../../database/daos/StayDao";
import UserDao from "../../database/daos/UserDao";
import {GuideRow, StayRow, UserRow} from "../../database/types";
import {Guide} from '@guided/common'

async function stays(guide: Guide): Promise<StayRow[]> {
    return new StayDao().findMany({'guide': guide.id})
}

async function user(guide: GuideRow): Promise<UserRow> {
    return new UserDao().get(guide.user)
}

export default {
    stays,
    user
}