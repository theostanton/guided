import memoize from "../../../utils/memoize";
import GuideDao from "../../../database/daos/GuideDao";
import {GuideRow} from "../../../database/types";

const dao = memoize<GuideDao>(() => {
    return new GuideDao()
});

function guide(_: void, {id}: { id: string }): Promise<GuideRow | null> {
    return dao().get(id)
}

function allGuides(_: void, args: void): Promise<GuideRow[]> {
    return dao().getAll()
}

export {
    guide,
    allGuides
}