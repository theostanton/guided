import {Guide, GuideRow, Stay, StayRow, UserRow} from "../../types";
import StayDao from "../../database/daos/StayDao";
import UserDao from "../../database/daos/UserDao";

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