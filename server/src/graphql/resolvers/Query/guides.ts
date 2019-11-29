import memoize from "../../../utils/memoize";
import {Guide, GuideRow} from "../../../types";
import GuideDao from "../../../database/daos/GuideDao";

const dao = memoize<GuideDao>(() => {
    return new GuideDao()
});

function guide(_: void, {id}: { id: number }): Promise<GuideRow | null> {
    return dao().get(id)
}

function allGuides(_: void, args: void): Promise<GuideRow[]> {
    return dao().getAll()
}

export {
    guide,
    allGuides
}