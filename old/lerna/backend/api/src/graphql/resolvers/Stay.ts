import daos from '../../database/daos'
import {LocationRow, StayRow} from "../../database/types";

async function location(stay: StayRow): Promise<LocationRow> {
    return (await daos.location.get(stay.location))!
}

export default {
    location
}