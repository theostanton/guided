import memoize from "../../../utils/memoize";
import {Guide} from "../../../types";
import GuideDao from "../../../database/daos/GuideDao";

const dao = memoize<GuideDao>(() => {
    return new GuideDao()
});

function guide(_: void, {id}: { id: string }): Promise<Guide | null> {
    return dao().find(id)
}

function allGuides(_: void, args: void): Promise<Guide[]> {
    return dao().getAll()
}

export {
    guide,
    allGuides
}