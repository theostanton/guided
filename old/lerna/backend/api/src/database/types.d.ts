import { Location, User } from "@guided/common";
export declare type LocationRow = Location & {
    id?: string;
};
export declare type RideRow = {
    id: string;
    start: string;
    end: string;
    durationMinutes: number;
    guide: string;
    route: string;
    path: string;
};
export declare type GuideRow = {
    id: string;
    user: string;
    title: string;
    startDate: Date;
    slug: string;
    rideLimitMinutes: number;
};
export declare type StayRow = {
    id: string;
    location: string;
    nights: number;
    position: number;
    guide: string;
    locked: boolean;
};
export declare type UserRow = User;
//# sourceMappingURL=types.d.ts.map