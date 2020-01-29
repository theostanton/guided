import memoize from "../../../utils/memoize";
import GuideDao from "../../../database/daos/GuideDao";
import {GuideRow} from "../../../database/types";
import {QueryToGuideArgs} from "@guided/common";

const dao = memoize<GuideDao>(() => {
    return new GuideDao()
});

async function guide(_: void, {slug}: QueryToGuideArgs): Promise<GuideRow | null> {
    return  dao().getFromSlug(slug)
}

function allGuides(_: void, args: void): Promise<GuideRow[]> {
    return dao().getAll()
}

export {
    guide,
    allGuides
}