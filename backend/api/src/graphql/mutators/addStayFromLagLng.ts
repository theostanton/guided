import daos from '../../database/daos'
import {publishGuide} from "../subscriptions";
import {CalculateRideHandler} from "../../events/CalculateRideHandler";
import {generateId} from "../../database/utils";
import {MutationToAddStayFromLagLngArgs} from "@guided/common";
import DB from '../../database'
import {generateLocationRow} from "../../database/models/location";

export default async function (_: void, {guideId, locked, label, lat, long, nights}: MutationToAddStayFromLagLngArgs): Promise<{ id: string } | null> {

    console.log('addStayFromLagLng()');

    const locationRow = await generateLocationRow(lat, long, label);

    const {id: locationId} = await daos.location.insert(locationRow);

    let query = `SELECT max(position) as max from stays where guide='${guideId}' and locked=true`;
    const {max: currentPosition} = await DB().one<{ max: number }>(query)
    console.log('query',currentPosition)
    console.log('currentPosition',currentPosition)

    const {id: stayId} = await daos.stay.insert({
        id: generateId('stay'),
        nights,
        locked,
        position: currentPosition ? currentPosition + 100 : 100,
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