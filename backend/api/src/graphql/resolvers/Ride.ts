import daos from '../../database/daos'
import {RideRow, StayRow} from "../../database/types";

async function start(ride: RideRow): Promise<StayRow> {
    return await daos.stay.get(ride.start)
}

async function end(ride: RideRow): Promise<StayRow> {
    return await daos.stay.get(ride.end)
}

export default {
    start,
    end
}