import {observable, action, computed} from "mobx"
import {Guide, Ride, Stay} from "@guided/common";

export type LeftDetailPane = {
    type: "ride" | "stay"
    edit: boolean
    ride?: Ride
    stay: Stay
}

export class Store {

    refetch: () => {};

    hasData(): boolean {
        return !!this.guide && !!this.rides
    }

    @observable
    guide: Guide;

    @observable
    rides: Ride[];

    @observable
    selectedRide: Ride;

    @observable
    leftDetailPane?: LeftDetailPane;

    update({guide, rides, refetch}: { guide: Guide, rides: Ride[], refetch: () => {} }) {
        console.log('update');
        console.log('guide',guide)
        console.log('rides',rides)
        this.refetch = refetch;
        this.guide = guide;
        this.rides = rides
    }
}