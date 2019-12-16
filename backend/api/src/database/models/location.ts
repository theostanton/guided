import {LocationRow} from "../types";
import * as Google from "../../api/google";
import {extractAddress, extractLabel} from "../../api/google/helper";
import {generateId} from "../utils";

export async function generateLocationRow(lat: number, long: number, label: string | undefined = undefined): Promise<LocationRow> {

    const reverseGeocodeResult = await Google.reverseGeocode(lat, long);

    const topResult = reverseGeocodeResult.results[0];

    label = label || extractLabel(topResult);

    const address = extractAddress(topResult);

    return {
        id: generateId('location'),
        ...address,
        label,
        lat,
        long,
        processed: true
    };

}