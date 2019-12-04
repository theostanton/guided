import daos from '../../database/daos'
import {publishGuide} from "../subscriptions";
import {CalculateRideHandler} from "../../events/CalculateRideHandler";

export default async function (_: void, {guideId, locked, label, lat, long}: { guideId: string, locked: boolean, label: string, lat: number, long: number }): Promise<{ id: string } | null> {

    console.log('guideId', guideId);
    console.log('locked', locked);
    console.log('label', label);
    console.log('lat', lat);
    console.log('long', long);

    const {id: loctionId} = await daos.location.insert({
        label,
        lat,
        long
    });


    const {id: stayId} = await daos.stay.insert({
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