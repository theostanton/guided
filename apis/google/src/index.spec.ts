// import {reverseGeocode} from './index'
// import {LatLng} from "@guided/common";
// import {extractAddress, extractLabel} from "./helper";
// import {generateLocationRow} from "../../database/models/location";
//
// const SEYTHENEX: LatLng = {
//     lat: 45.7262,
//     long: 6.2997
// };
//
// test('should always fail', () => {
//     expect(true).toBe(false)
// });
//
// test('should always pass', () => {
//     expect(true).toBe(true)
// });
//
// test('Should get label for SEYTHENEX latLng', async () => {
//     const response = await reverseGeocode(SEYTHENEX.lat, SEYTHENEX.long);
//     const topResult = response.results[0];
//     const label = extractLabel(topResult);
//     expect(label).toBe('Seythenex')
// });
//
// test('Should generate LocationRow for SEYTHENEX latLng', async () => {
//     const locationRow = await generateLocationRow(SEYTHENEX.lat, SEYTHENEX.long);
//     expect(locationRow.id).toBeTruthy();
//     expect(locationRow.processed).toBe(true);
//     expect(locationRow.long).toBe(SEYTHENEX.long);
//     expect(locationRow.lat).toBe(SEYTHENEX.lat);
//     expect(locationRow.address1).toBeUndefined();
//     expect(locationRow.address2).toBeUndefined();
//     expect(locationRow.label).toBeTruthy();
//     expect(locationRow.city).toBe('Seythenex')
//     expect(locationRow.country).toBe('FR')
// });