import memoize from "../../../utils/memoize";
import LocationDao from "../../../database/daos/LocationDao";
import {LocationRow} from "../../../database/types";

const dao = memoize<LocationDao>(() => {
    return new LocationDao()
});

function location(_: void, {id}: { id: string }): Promise<LocationRow | null> {
    return dao().get(id)
}

function allLocations(_: void, args: void): Promise<LocationRow[]> {
    return dao().getAll()
}

export {
    location,
    allLocations
}