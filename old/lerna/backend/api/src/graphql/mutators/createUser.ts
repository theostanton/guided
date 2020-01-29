import daos from '../../database/daos'
import {ItemId, MutationToCreateUserArgs} from "@guided/common";
import {generateId} from '../../database/utils'

export default async function (_: void, {email, username}: MutationToCreateUserArgs): Promise<ItemId> {
    return daos.user.insert({
        id: generateId('user'),
        email,
        username
    })
}