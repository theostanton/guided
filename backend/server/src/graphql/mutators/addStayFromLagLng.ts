import daos from '../../database/daos'
import {publishGuide} from "../subscriptions";
import {calculateRide} from "../../events";
import executeSequentially from "../../utils/executeSequentially";
import {CalculateRideHandler} from "../../events/CalculateRideHandler";

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


    const ids = (await daos.stay.ids()).map(({id}) => {
        return id
    });


    const handler = await CalculateRideHandler.get();
    await handler.empty();

    const indices = [];
    for (let i = 0; i < ids.length - 1; i++) {
        indices.push([ids[i], ids[i + 1]]);
    }
    console.log(JSON.stringify(indices, null, 4));
    await executeSequentially(indices, async ([i, j]) => {
        console.log(`index ${i},${j}`);
        await calculateRide(i, j)
    });

    await handler.resume();


    return {
        id: stayId
    }
}