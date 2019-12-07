import daos from '../../database/daos'
import {Address} from "@guided/common";
import {generateId} from "../../database/utils";

export default async function (_: void, {guideId, locked, label, address: addressInput}: { guideId: string, locked: boolean, label: string, address: Address }): Promise<{ id: string } | null> {

    console.log('guideId', guideId);
    console.log('locked', locked);
    console.log('label', label);
    console.log('addressInput', addressInput);

    const {id: addressId} = await daos.address.insert({
        id: generateId('address'),
        ...addressInput
    });
    const {id: loctionId} = await daos.location.insert({
        id: generateId('location'),
        address: addressId,
        label,
        lat: 0,
        long: 0
    });

    const {id: stayId} = await daos.stay.insert({
        id: generateId('stay'),
        locked,
        location: loctionId,
        guide: guideId
    });

    return {
        id: stayId
    }
}