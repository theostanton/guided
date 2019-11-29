import memoize from "../../../utils/memoize";
import {Location, LocationRow} from "../../../types";
import LocationDao from "../../../database/daos/LocationDao";

const dao = memoize<LocationDao>(() => {
    return new LocationDao()
});

function location(_: void, {id}: { id: number }): Promise<LocationRow | null> {
    return dao().get(id)
}

function allLocations(_: void, args: void): Promise<LocationRow[]> {
    return dao().getAll()
}

export {
    location,
    allLocations
}