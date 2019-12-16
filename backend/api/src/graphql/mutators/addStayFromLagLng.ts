import daos from '../../database/daos'
import {generateId} from "../../database/utils";
import {MutationToAddStayFromLagLngArgs} from "@guided/common";
import DB from '../../database'
import {generateLocationRow} from "../../database/models/location";
import {updateAll} from "../../events/calculateride";

export default async function (_: void, {guideId, locked, label, lat, long, nights}: MutationToAddStayFromLagLngArgs): Promise<{ id: string } | null> {

    console.log('addStayFromLagLng()');

    const locationRow = await generateLocationRow(lat, long, label);

    const {id: locationId} = await daos.location.insert(locationRow);

    let query = `SELECT max(position) as max from stays where guide='${guideId}' and locked=true`;
    const {max: currentPosition} = await DB().one<{ max: number }>(query)

    const {id: stayId} = await daos.stay.insert({
        id: generateId('stay'),
        nights,
        locked,
        position: currentPosition === undefined ? 0 : currentPosition + 100,
        location: locationId,
        guide: guideId
    });

    await updateAll(guideId);

    return {
        id: stayId
    }
}