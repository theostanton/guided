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
    selectedStay: Stay | undefined;

    @observable
    selectedRide: Ride | undefined;

    @observable
    highlightedRide: Ride | undefined;

    @observable
    highlightedStay: Stay | undefined;

    updateMap() {
        if (this.mapCallback) {
            console.log('updateMap()');
            this.mapCallback()
        }
    }

    selectStay(stay: Stay | undefined) {
        this.selectedRide = undefined;
        this.selectedStay = stay;
        this.updateMap();
    }

    selectRide(ride: Ride | undefined) {
        this.selectedRide = ride;
        this.updateMap();
    }

    highlightRide(ride: Ride | undefined) {
        this.highlightedRide = ride;
        this.highlightedStay = undefined;
        this.updateMap();
    }

    highlightStay(stay: Stay | undefined) {
        this.highlightedRide = undefined;
        this.highlightedStay = stay;
        this.updateMap();
    }

    getStay(stayId: string): Stay {
        const stay = this.guide.stays.find(stay => {
            return stay.id === stayId
        });
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