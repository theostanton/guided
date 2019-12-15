import {observable, action, computed} from "mobx"
import {Guide, Ride, Stay} from "@guided/common";

export type LeftDetailPane = {
    type: "ride" | "stay"
    edit: boolean
    ride?: Ride
    stay: Stay
}

export class Store {

    refetch: () => void;

    hasData(): boolean {
        return !!this.guide && !!this.rides
    }

    @observable
    guide: Guide;

    @observable
    rides: Ride[];

    @observable
    selectedRide: Ride | undefined;

    selectRide(ride: Ride | undefined) {
        this.selectedRide = ride;
        if (this.mapCallback) {
            this.mapCallback()
        }
    }

    getStay(stayId: string): Stay {
        const stay = this.guide.stays.find(stay => {
            return stay.id === stayId
        })
        if (stay) {
            return stay
        }
        throw new Error(`No stay for stayId=${stayId}`)
    }

    @observable
    leftDetailPane?: LeftDetailPane;

    mapCallback?: () => void;

    update({guide, rides, refetch}: { guide: Guide, rides: Ride[], refetch: () => void }) {
        this.refetch = refetch;
        this.guide = guide;
        this.rides = rides;
    }
}