import {Spot, SpotRow, Stay, StayRow} from "../../types";
import daos from '../../database/daos'

async function spot(stay: StayRow): Promise<SpotRow> {
    return (await daos.spot.get(stay.spot))!
}

export default {
    spot
}