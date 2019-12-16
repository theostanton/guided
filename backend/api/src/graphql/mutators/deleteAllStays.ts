import daos from '../../database/daos'
import {updateAll} from "../../events/CalculateRideHandler";
import {MutationToDeleteAllStaysArgs} from "@guided/common";

export default async function (_: void, {guideId}: MutationToDeleteAllStaysArgs): Promise<{ id: string } | null> {

    await daos.ride.deleteWhere({guide: guideId});
    await daos.stay.deleteWhere({guide: guideId});

    await updateAll(guideId);

    return {
        id: guideId
    }
}