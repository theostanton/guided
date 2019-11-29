import memoize from "../../../utils/memoize";
import {Stay, User} from "../../../types";
import StayDao from "../../../database/daos/StayDao";

const dao = memoize<StayDao>(() => {
    return new StayDao()
});

function stay(_: void, {id}: { id: string }): Promise<Stay | null> {
    return dao().find(id)
}

function allStays(_: void, args: void): Promise<Stay[]> {
    return dao().getAll()
}

export {
    stay,
    allStays
}