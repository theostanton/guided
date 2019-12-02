import daos from '../../database/daos'
import {CalculateRideHandler} from "../../events/CalculateRideHandler";

export default async function (_: void, {locationId, lat, long}: { locationId: number, lat: number, long: number }): Promise<{ id: number } | null> {

    console.log('locationId!', locationId);
    console.log('lat', lat);
    console.log('long', long);

    await daos.location.update({
        id: locationId,
        long,
        lat
    });

    console.log('gonna updateAll');

    await CalculateRideHandler.updateAll();
    console.log('updatedAll');

    return {
        id: locationId
    }
}