import daos from '../../database/daos'
import {CalculateRideHandler, updateAll} from "../../events/CalculateRideHandler";
import {MutationToMoveStayArgs} from "@guided/common";

export default async function (_: void, {locationId, lat, long}: MutationToMoveStayArgs): Promise<{ id: string } | null> {

    const {guide:guideId} = await daos.stay.findOne({'location':locationId});
    await daos.location.update({
        id: locationId,
        long,
        lat
    });

    await updateAll(guideId);

    return {
        id: locationId
    }
}