import memoize from "../../../utils/memoize";
import {Address} from "../../../types";
import AddressDao from "../../../database/daos/AddressDao";

const dao = memoize<AddressDao>(() => {
    return new AddressDao()
});

function address(_: void, {id}: { id: string }): Promise<Address | null> {
    return dao().find(id)
}

function allAddresses(_: void, args: void): Promise<Address[]> {
    return dao().getAll()
}

export {
    address,
    allAddresses
}