import memoize from "../../../utils/memoize";
import RideDao from "../../../database/daos/RideDao";
import {RideRow} from "../../../database/types";

const dao = memoize<RideDao>(() => {
    return new RideDao()
});

function ride(_: void, {id}: { id: string }): Promise<RideRow | null> {
    return dao().get(id)
}

function allRides(_: void, args: void): Promise<RideRow[]> {
    return dao().getAll()
}

export {
    ride,
    allRides
}