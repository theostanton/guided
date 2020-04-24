export type LatLng = {
    lat: number;
    long: number;
}

export const LATLNG: { [key in string]: LatLng } = {
    London: {
        lat: 51.5074,
        long: -0.1278,
    },
    Brighton: {
        lat: 50.8225,
        long: -0.1372,
    },
}
