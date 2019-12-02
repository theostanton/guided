import daos from '../../database/daos'
import {publishGuide} from "../subscriptions";
import {calculateRide} from "../../events";

export default async function (_: void, {guideId, locked, label, lat, long}: { guideId: number, locked: boolean, label: string, lat: number, long: number }): Promise<{ id: number } | null> {

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

    const {id: spotId} = await daos.spot.insert({
        location: loctionId
    });

    const {id: stayId} = await daos.stay.insert({
        locked,
        spot: spotId,
        guide: guideId
    });

    // const stays = await new StayDao().findMany({'guide':guideId});

    await publishGuide({
        id: guideId
    });

    await calculateRide(1, stayId);

    return {
        id: stayId
    }
}