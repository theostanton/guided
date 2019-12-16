import daos from '../../database/daos'
import {MutationToDeleteAllStaysArgs} from "@guided/common";
import {updateAll} from "../../events/calculateride";

export default async function (_: void, {guideId}: MutationToDeleteAllStaysArgs): Promise<{ id: string } | null> {

    await daos.ride.deleteWhere({guide: guideId});
    await daos.stay.deleteWhere({guide: guideId});

    await updateAll(guideId);

    return {
        id: guideId
    }
}