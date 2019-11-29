import memoize from "../../../utils/memoize";
import {Day} from "../../../types";
import DaysDao from "../../../database/daos/DayDao";

const dao = memoize<DaysDao>(() => {
    return new DaysDao()
});

function day(_: void, {id}: { id: string }): Promise<Day | null> {
    return dao().find(id)
}

function allDays(_: void, args: void): Promise<Day[]> {
    return dao().getAll()
}

export {
    day,
    allDays
}