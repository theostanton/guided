import { RideRow } from "../../../database/types";
import { QueryToAllRidesArgs } from "@guided/common";
declare function ride(_: void, { id }: {
    id: string;
}): Promise<RideRow | null>;
declare function allRides(_: void, { guideSlug }: QueryToAllRidesArgs): Promise<RideRow[]>;
export { ride, allRides };
//# sourceMappingURL=rides.d.ts.map