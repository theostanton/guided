import {LocationRow, SpotRow} from "../../types";
import daos from '../../database/daos'

async function location(spot: SpotRow): Promise<LocationRow> {
    return (await daos.location.get(spot.location))!
}

export default {
    location
}