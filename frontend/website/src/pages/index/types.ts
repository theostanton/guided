import {Guide, Ride} from "../../types";

export type Data = {
    guide: Guide
    rides: Ride[]
    selectedRide?:Ride
    refetch: () => void
    selectRide: (ride: Ride) => void
}