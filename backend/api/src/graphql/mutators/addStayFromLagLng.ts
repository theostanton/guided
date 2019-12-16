import daos from '../../database/daos'
import {publishGuide} from "../subscriptions";
import {CalculateRideHandler} from "../../events/CalculateRideHandler";
import {generateId} from "../../database/utils";
import {MutationToAddStayFromLagLngArgs} from "@guided/common";
import DB from '../../database'
import {generateLocationRow} from "../../database/models/location";

export default async function (_: void, {guideId, locked, label, lat, long, nights}: MutationToAddStayFromLagLngArgs): Promise<{ id: string } | null> {

    const locationRow = await generateLocationRow(lat, long, label);

    const {id: locationId} = await daos.location.insert(locationRow);

    const {max: currentPosition} = await DB().query<{ max: number }>(`SELECT max(position) as max from stays where guide='${guideId}'`)

    const {id: stayId} = await daos.stay.insert({
        id: generateId('stay'),
        nights,
        locked,
        position: currentPosition ? currentPosition + 1 : undefined,
        location: locationId,
        guide: guideId
    });

    await publishGuide({
        id: guideId
    });

    await CalculateRideHandler.updateAll(guideId);

    return {
        id: stayId
    }
}