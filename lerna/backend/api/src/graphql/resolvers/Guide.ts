import DB from "../../database/";
import UserDao from "../../database/daos/UserDao";
import {GuideRow, StayRow, UserRow} from "../../database/types";
import {Guide} from '@guided/common'

async function stays(guide: Guide): Promise<StayRow[]> {
    const query = `SELECT * from stays where guide='${guide.id}' order by position asc`;
    const stays = await DB().manyOrNone<StayRow>(query);
    let offset = 0;
    return stays.map(stay => {
        const arrivalDate = new Date(new Date().getTime() + 60 * 60 * 24 * 1000 * offset);
        offset += stay.nights;
        return {
            ...stay,
            arrivalDate
        }
    });
}

async function user(guide: GuideRow): Promise<UserRow> {
    return new UserDao().get(guide.user)
}

export default {
    stays,
    user
}