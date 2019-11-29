import memoize from "../../../utils/memoize";
import SpotDao from "../../../database/daos/SpotDao";
import {SpotRow} from "../../../types";

const dao = memoize<SpotDao>(() => {
    return new SpotDao()
});

function spot(_: void, {id}: { id: number }): Promise<SpotRow | null> {
    return dao().get(id)
}

function allSpots(_: void, args: void): Promise<SpotRow[]> {
    return dao().getAll()
}

export {
    spot,
    allSpots
}