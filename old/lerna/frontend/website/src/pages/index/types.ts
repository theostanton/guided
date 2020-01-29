import {Guide, Ride} from "@guided/common";

export type Data = {
    guide: Guide
    rides: Ride[]
    selectedRide?:Ride
    refetch: () => void
    selectRide: (ride: Ride) => void
}