import DB, {daos} from '../../database'
import fs from 'fs'
import {Stay} from "@guided/common";
import {StayRow} from "../../database/types";

export async function wipe(): Promise<void> {
    await DB().none(`DROP SCHEMA test CASCADE`);
    await DB().none(`CREATE SCHEMA test`);
    const query = fs.readFileSync('src/utils/generate.sql', 'utf-8');
    await DB().none(query)
}

const USER_ID = 'user_1234';
const GUIDE_ID = 'guide_1234';

// const STAYS:{[key in string]:StayRow}={
//     'london':{
//         id:'stay_london',
//         locked:true,
//
//     }
// }

export async function loadUser() {
    await daos.user.insert({
        id: USER_ID,
        email: 'test@test.com',
        username: 'testuser'
    })
}

export async function loadGuide() {
    await daos.guide.insert({
        id: GUIDE_ID,
        rideLimitMinutes: 200,
        slug: 'test-guide',
        title: 'Test Guide',
        startDate: new Date(),
        user: USER_ID
    })
}

export async function loadStays(...stays: Stay[]) {

}