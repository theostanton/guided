import {LocationRow, RideRow, SpotRow} from "../../types";
import daos from '../../database/daos'

async function start(ride: RideRow): Promise<SpotRow> {
    return await daos.spot.get(ride.start)
}

async function end(ride: RideRow): Promise<SpotRow> {
    return await daos.spot.get(ride.end)
}

export default {
    start,
    end
}