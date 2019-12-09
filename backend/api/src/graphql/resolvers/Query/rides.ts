import memoize from "../../../utils/memoize";
import RideDao from "../../../database/daos/RideDao";
import {RideRow} from "../../../database/types";
import {QueryToAllRidesArgs} from "@guided/common";
import daos from '../../../database/daos'

const dao = memoize<RideDao>(() => {
    return new RideDao()
});

async function ride(_: void, {id}: { id: string }): Promise<RideRow | null> {
    return dao().get(id)
}

async function allRides(_: void, {guideSlug}: QueryToAllRidesArgs): Promise<RideRow[]> {
    const {id: guide} = await daos.guide.findOne({slug: guideSlug});
    return dao().findMany({guide})
}

export {
    ride,
    allRides
}