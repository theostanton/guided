import daos from '../../database/daos'
import {CalculateRideHandler} from "../../events/CalculateRideHandler";
import {MutationToDeleteStayArgs} from "@guided/common";

export default async function (_: void, {stayId}: MutationToDeleteStayArgs): Promise<{ id: string } | null> {


    await daos.ride.deleteWhere({end: stayId});
    await daos.ride.deleteWhere({start: stayId});

    await daos.stay.deleteWhere({
        id: stayId
    });

    console.log('gonna updateAll');

    await CalculateRideHandler.updateAll();
    console.log('updatedAll');

    return {
        id: stayId
    }
}