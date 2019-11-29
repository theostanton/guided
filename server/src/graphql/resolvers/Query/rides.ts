import memoize from "../../../utils/memoize";
import {Ride} from "../../../types";
import RideDao from "../../../database/daos/RideDao";

const dao = memoize<RideDao>(() => {
    return new RideDao()
});

function ride(_: void, {id}: { id: string }): Promise<Ride | null> {
    return dao().find(id)
}

function allRides(_: void, args: void): Promise<Ride[]> {
    return dao().getAll()
}

export {
    ride,
    allRides
}