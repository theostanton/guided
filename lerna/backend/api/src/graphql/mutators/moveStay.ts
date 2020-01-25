import {daos} from '../../database'
import {MutationToMoveStayArgs} from "@guided/common";
import {generateLocationRow} from "../../database/models/location";
import {updateAll} from "../../events/calculateride";

export default async function (_: void, {locationId, lat, long}: MutationToMoveStayArgs): Promise<{ id: string } | null> {

    console.log('moveStay');

    const {guide: guideId, id: stayId} = await daos.stay.findOne({'location': locationId});
    const {label} = await daos.location.get(locationId);
    const locationRow = await generateLocationRow(lat, long, label);

    await daos.location.update({
        ...locationRow,
        id: locationId,
        long,
        lat
    });

    await daos.stay.update({
        id: stayId,
        locked: true
    });

    await updateAll(guideId);

    return {
        id: locationId
    }
}