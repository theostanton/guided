import {Address, Stay, StayRow} from "../../types";
import daos from '../../database/daos'

export default async function (_: void, {guideId, locked, label, address: addressInput}: { guideId: number, locked: boolean, label: string, address: Partial<Address> }): Promise<{ id: number } | null> {

    console.log('guideId', guideId);
    console.log('locked', locked);
    console.log('label', label);
    console.log('addressInput', addressInput);

    const {id: addressId} = await daos.address.insert(addressInput);
    const {id: loctionId} = await daos.location.insert({
        address: addressId,
        label,
        lat: 0,
        long: 0
    });

    const {id: spotId} = await daos.spot.insert({
        location: loctionId
    });

    const {id: stayId} = await daos.stay.insert({
        locked,
        spot: spotId,
        guide: guideId
    });

    return {
        id: stayId
    }
}