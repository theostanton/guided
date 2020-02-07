import { Guide as GuideType, RidesConnection, SpotsConnection } from "api/generated";
export declare type Guide = Pick<GuideType, "id" | "title" | "slug" | "owner" | "startDate"> & {
    ridesByGuide: Pick<RidesConnection, "totalCount">;
    spotsByGuide: Pick<SpotsConnection, "totalCount">;
};
//# sourceMappingURL=index.d.ts.map