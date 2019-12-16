import daos from '../../database/daos'
import {updateAll} from "../../events/CalculateRideHandler";
import {MutationToDeleteStayArgs} from "@guided/common";

export default async function (_: void, {stayId}: MutationToDeleteStayArgs): Promise<{ id: string } | null> {

    const {guide: guideId} = await daos.stay.get(stayId);

    await daos.ride.deleteWhere({end: stayId});
    await daos.ride.deleteWhere({start: stayId});

    await daos.stay.deleteWhere({
        id: stayId
    });

    await updateAll(guideId);

    return {
        id: stayId
    }
}