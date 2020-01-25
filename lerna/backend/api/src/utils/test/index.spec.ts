import * as index from './prepare'
import DB from '../../database'
import {daos} from '../../database'
import {prepare} from "./prepare";

test('should wipe test schema', async () => {
    await index.prepare();
    const guides = await DB().manyOrNone(`SELECT *
                                          from guides`)
    expect(guides.length).toBe(0);

    const stays = await daos.stay.getAll()
    expect(stays.length).toBe(0);

    const users = await daos.user.getAll()
    expect(users.length).toBe(0);
});
