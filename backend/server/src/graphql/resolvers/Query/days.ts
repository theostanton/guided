import memoize from "../../../utils/memoize";
import {Day, DayRow} from "../../../types";
import DaysDao from "../../../database/daos/DayDao";

const dao = memoize<DaysDao>(() => {
    return new DaysDao()
});

function day(_: void, {id}: { id: number }): Promise<DayRow | null> {
    return dao().get(id)
}

function allDays(_: void, args: void): Promise<DayRow[]> {
    return dao().getAll()
}

export {
    day,
    allDays
}