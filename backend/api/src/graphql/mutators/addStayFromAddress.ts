import daos from '../../database/daos'
import {Address, MutationToAddStayFromAddressArgs} from "@guided/common";
import {generateId} from "../../database/utils";

export default async function (_: void, args: MutationToAddStayFromAddressArgs): Promise<{ id: string } | null> {

    // const {id: addressId} = await daos.address.insert({
    //     id: generateId('address'),
    //     ...args.address!
    // });
    // const {id: loctionId} = await daos.location.insert({
    //     id: generateId('location'),
    //     address: addressId,
    //     label,
    //     lat: 0,
    //     long: 0
    // });
    //
    // const {id: stayId} = await daos.stay.insert({
    //     id: generateId('stay'),
    //     locked:args.locked,
    //     nights:args.nights,
    //     location: loctionId,
    //     guide: args.guideId
    // });

    // return {
    //     id: stayId
    // }
    throw new Error('Stubbed')
}