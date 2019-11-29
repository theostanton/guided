import memoize from "../../../utils/memoize";
import {Ride, RideRow} from "../../../types";
import RideDao from "../../../database/daos/RideDao";

const dao = memoize<RideDao>(() => {
    return new RideDao()
});

function ride(_: void, {id}: { id: number }): Promise<RideRow | null> {
    return dao().get(id)
}

function allRides(_: void, args: void): Promise<RideRow[]> {
    return dao().getAll()
}

export {
    ride,
    allRides
}