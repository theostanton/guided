import daos from '../../database/daos'
import {ItemId, MutationToCreateGuideArgs} from "@guided/common";
import {generateId, generateSlug} from "../../database/utils";

export default async function (_: void, {userId, title}: MutationToCreateGuideArgs): Promise<ItemId> {
    const slug = generateSlug(title);
    return daos.guide.insert({
        id: generateId('guide'),
        daily_limit_meters: 200_000,
        title,
        slug,
        user: userId
    })
}