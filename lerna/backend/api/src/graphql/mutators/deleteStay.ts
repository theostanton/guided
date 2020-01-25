import daos from '../../database/daos'
import {MutationToDeleteStayArgs} from "@guided/common";
import {updateAll} from "../../events/calculateride";

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