import { DirectionsResponse, ReverseGeocodingResponse } from '@google/maps';
import { LatLng } from "@guided/common";
export declare const client: any;
export declare function directions(startLat: number, startLong: number, endLat: number, endLong: number, waypoints: LatLng[]): Promise<DirectionsResponse>;
export declare function reverseGeocode(lat: number, lng: number): Promise<ReverseGeocodingResponse>;
//# sourceMappingURL=index.d.ts.map