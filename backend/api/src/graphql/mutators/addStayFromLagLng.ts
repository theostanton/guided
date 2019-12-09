import daos from '../../database/daos'
import {publishGuide} from "../subscriptions";
import {CalculateRideHandler} from "../../events/CalculateRideHandler";
import {generateId} from "../../database/utils";
import {MutationToAddStayFromLagLngArgs} from "@guided/common";

export default async function (_: void, {guideId, locked, label, lat, long, nights}: MutationToAddStayFromLagLngArgs): Promise<{ id: string } | null> {

    const {id: loctionId} = await daos.location.insert({
        id: generateId('location'),
        label,
        lat,
        long
    });

    const {id: stayId} = await daos.stay.insert({
        id: generateId('stay'),
        nights,
        locked,
        location: loctionId,
        guide: guideId
    });

    await publishGuide({
        id: guideId
    });

    await CalculateRideHandler.updateAll();

    return {
        id: stayId
    }
}