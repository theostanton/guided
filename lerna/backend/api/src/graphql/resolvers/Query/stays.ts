import memoize from "../../../utils/memoize";
import StayDao from "../../../database/daos/StayDao";
import {StayRow} from "../../../database/types";

const dao = memoize<StayDao>(() => {
    return new StayDao()
});

function stay(_: void, {id}: { id: string }): Promise<StayRow | null> {
    return dao().get(id)
}

function allStays(_: void, args: void): Promise<StayRow[]> {
    return dao().getAll()
}

export {
    stay,
    allStays
}