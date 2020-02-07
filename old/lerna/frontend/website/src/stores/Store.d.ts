import { Guide, Ride, Stay } from "@guided/common";
export declare type LeftDetailPane = {
    type: "ride" | "stay";
    edit: boolean;
    ride?: Ride;
    stay: Stay;
};
export declare class Store {
    refetch: () => void;
    hasData(): boolean;
    guide: Guide;
    rides: Ride[];
    selectedStay: Stay | undefined;
    selectedRide: Ride | undefined;
    highlightedRide: Ride | undefined;
    highlightedStay: Stay | undefined;
    updateMap(): void;
    selectStay(stay: Stay | undefined): void;
    selectRide(ride: Ride | undefined): void;
    highlightRide(ride: Ride | undefined): void;
    highlightStay(stay: Stay | undefined): void;
    getStay(stayId: string): Stay;
    leftDetailPane?: LeftDetailPane;
    mapCallback?: () => void;
    update({ guide, rides, refetch }: {
        guide: Guide;
        rides: Ride[];
        refetch: () => void;
    }): void;
}
//# sourceMappingURL=Store.d.ts.map