export interface Guide {
    id: string | null;
    title: string | null;
    slug: string | null;
    owner: string | null;
    startDate: Date | null;
}
export interface Ride {
    id: string | null;
    guide: string | null;
    fromSpot: string | null;
    toSpot: string | null;
}
export interface Spot {
    id: string | null;
    label: string | null;
    guide: string | null;
    nights: number | null;
    locked: boolean | null;
}
export interface User {
    username: string | null;
    email: string | null;
    passwordHash: string | null;
}
//# sourceMappingURL=types.d.ts.map