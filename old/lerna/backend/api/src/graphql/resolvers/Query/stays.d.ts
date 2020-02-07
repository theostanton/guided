import { StayRow } from "../../../database/types";
declare function stay(_: void, { id }: {
    id: string;
}): Promise<StayRow | null>;
declare function allStays(_: void, args: void): Promise<StayRow[]>;
export { stay, allStays };
//# sourceMappingURL=stays.d.ts.map