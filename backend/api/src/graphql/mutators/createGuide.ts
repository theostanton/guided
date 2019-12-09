import daos from '../../database/daos'
import {ItemId, MutationToCreateGuideArgs} from "@guided/common";
import {generateId, generateSlug} from "../../database/utils";

export default async function (_: void, {userId, title}: MutationToCreateGuideArgs): Promise<ItemId> {
    const slug = generateSlug(title);
    return daos.guide.insert({
        id: generateId('guide'),
        dailyLimitMeters: 200_000,
        startDate: new Date(),
        title,
        slug,
        user: userId
    })
}