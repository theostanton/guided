import { LocationRow } from "../../../database/types";
declare function location(_: void, { id }: {
    id: string;
}): Promise<LocationRow | null>;
declare function allLocations(_: void, args: void): Promise<LocationRow[]>;
export { location, allLocations };
//# sourceMappingURL=locations.d.ts.map