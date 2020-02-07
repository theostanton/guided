import { RideRow, StayRow } from "../../database/types";
declare function start(ride: RideRow): Promise<StayRow>;
declare function end(ride: RideRow): Promise<StayRow>;
declare const _default: {
    start: typeof start;
    end: typeof end;
};
export default _default;
//# sourceMappingURL=Ride.d.ts.map