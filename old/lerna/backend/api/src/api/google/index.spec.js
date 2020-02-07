"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const helper_1 = require("./helper");
const location_1 = require("../../database/models/location");
const SEYTHENEX = {
    lat: 45.7262,
    long: 6.2997
};
test('should always fail', () => {
    expect(true).toBe(false);
});
test('should always pass', () => {
    expect(true).toBe(true);
});
test('Should get label for SEYTHENEX latLng', async () => {
    const response = await index_1.reverseGeocode(SEYTHENEX.lat, SEYTHENEX.long);
    const topResult = response.results[0];
    const label = helper_1.extractLabel(topResult);
    expect(label).toBe('Seythenex');
});
test('Should generate LocationRow for SEYTHENEX latLng', async () => {
    const locationRow = await location_1.generateLocationRow(SEYTHENEX.lat, SEYTHENEX.long);
    expect(locationRow.id).toBeTruthy();
    expect(locationRow.processed).toBe(true);
    expect(locationRow.long).toBe(SEYTHENEX.long);
    expect(locationRow.lat).toBe(SEYTHENEX.lat);
    expect(locationRow.address1).toBeUndefined();
    expect(locationRow.address2).toBeUndefined();
    expect(locationRow.label).toBeTruthy();
    expect(locationRow.city).toBe('Seythenex');
    expect(locationRow.country).toBe('FR');
});
//# sourceMappingURL=index.spec.js.map