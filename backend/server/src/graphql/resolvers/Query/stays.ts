import memoize from "../../../utils/memoize";
import {Stay, StayRow, User} from "../../../types";
import StayDao from "../../../database/daos/StayDao";

const dao = memoize<StayDao>(() => {
    return new StayDao()
});

function stay(_: void, {id}: { id: number }): Promise<StayRow | null> {
    return dao().get(id)
}

function allStays(_: void, args: void): Promise<StayRow[]> {
    return dao().getAll()
}

export {
    stay,
    allStays
}