import { GeocodingResult } from "@google/maps";
export declare function extractLabel(result: GeocodingResult): string;
export declare function extractAddress(result: GeocodingResult): {
    address1: string | undefined;
    address2: string | undefined;
    city: string | undefined;
    country: string | undefined;
};
//# sourceMappingURL=helper.d.ts.map