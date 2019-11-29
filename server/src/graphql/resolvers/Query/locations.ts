import memoize from "../../../utils/memoize";
import {Location} from "../../../types";
import LocationDao from "../../../database/daos/LocationDao";

const dao = memoize<LocationDao>(() => {
    return new LocationDao()
});

function location(_: void, {id}: { id: string }): Promise<Location | null> {
    return dao().find(id)
}

function allLocations(_: void, args: void): Promise<Location[]> {
    return dao().getAll()
}

export {
    location,
    allLocations
}