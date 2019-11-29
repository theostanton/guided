import {Stay} from "../../types";

async function stays(): Promise<Stay[]> {
    return [{
        id: 1,
        locked: false,
        spot: {
            id: 2,
            location: {
                id: 5,
                address: {
                    address1: 'Address 1',
                    address2: 'Address 2',
                    city: 'City',
                    country: 'UK',
                    id: 3
                },
                label: 'Label',
                lat: 51.1,
                long: 0.1
            }
        }
    }]
}

export default {
    stays
}