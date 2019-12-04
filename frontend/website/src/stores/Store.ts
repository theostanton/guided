import {observable, action, computed} from "mobx"
import {Guide, Ride} from "../types";


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

    // @action
    // selectRide(ride: Ride) {
    //     this.selectedRide = ride
    // }

    @action
    update({guide, rides, refetch}: { guide: Guide, rides: Ride[], refetch: () => {} }) {
        console.log('update');
        this.refetch = refetch;
        this.guide = guide;
        this.rides = rides
    }
}