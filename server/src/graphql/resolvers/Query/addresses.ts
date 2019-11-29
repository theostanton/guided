import memoize from "../../../utils/memoize";
import {Address, AddressRow} from "../../../types";
import AddressDao from "../../../database/daos/AddressDao";

const dao = memoize<AddressDao>(() => {
    return new AddressDao()
});

function address(_: void, {id}: { id: number }): Promise<AddressRow | null> {
    return dao().get(id)
}

function allAddresses(_: void, args: void): Promise<AddressRow[]> {
    return dao().getAll()
}

export {
    address,
    allAddresses
}