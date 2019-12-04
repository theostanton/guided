import memoize from "../../../utils/memoize";
import AddressDao from "../../../database/daos/AddressDao";
import {AddressRow} from "../../../database/types";

const dao = memoize<AddressDao>(() => {
    return new AddressDao()
});

function address(_: void, {id}: { id: string }): Promise<AddressRow | null> {
    return dao().get(id)
}

function allAddresses(_: void, args: void): Promise<AddressRow[]> {
    return dao().getAll()
}

export {
    address,
    allAddresses
}