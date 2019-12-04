import daos from '../../database/daos'
import {Address} from "@guided/common";

export default async function (_: void, {guideId, locked, label, address: addressInput}: { guideId: string, locked: boolean, label: string, address: Partial<Address> }): Promise<{ id: string } | null> {

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

    const {id: stayId} = await daos.stay.insert({
        locked,
        location: loctionId,
        guide: guideId
    });

    return {
        id: stayId
    }
}