import memoize from "../../../utils/memoize";
import {Spot} from "../../../types";
import SpotDao from "../../../database/daos/SpotDao";

const dao = memoize<SpotDao>(() => {
    return new SpotDao()
});

function spot(_: void, {id}: { id: string }): Promise<Spot | null> {
    return dao().find(id)
}

function allSpots(_: void, args: void): Promise<Spot[]> {
    return dao().getAll()
}

export {
    spot,
    allSpots
}