import { Guide, Ride } from "@guided/common";
export declare type Data = {
    guide: Guide;
    rides: Ride[];
    selectedRide?: Ride;
    refetch: () => void;
    selectRide: (ride: Ride) => void;
};
//# sourceMappingURL=types.d.ts.map