import daos from '../../database/daos'
import {MutationToUpdateStayArgs} from "@guided/common";

export default async function (_: void, {id, label, locked, nights}: MutationToUpdateStayArgs): Promise<{ id: string } | null> {

    const stay = await daos.stay.get(id);

    await daos.stay.update({
        id,
        locked,
        nights
    });

    await daos.location.update({
        id: stay.location,
        label
    });

    return {
        id
    }
}