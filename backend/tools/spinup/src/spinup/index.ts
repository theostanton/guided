import { database, insertMany } from '@guided/database'
import { Contents } from '../index'

export default async function (contents: Contents) {
    if (contents.users.length) {
        const usersInsert = insertMany('users', contents.users)
        await database.query(usersInsert)
    }

    if (contents.guides.length) {
        const guidesInsert = insertMany('guides', contents.guides)
        await database.query(guidesInsert)
    }

    if (contents.spots.length) {
        const spots = insertMany('spots', contents.spots)
        await database.query(spots)
    }
}
