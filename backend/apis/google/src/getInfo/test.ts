import { LatLng } from '@googlemaps/google-maps-services-js/dist/common'
import getInfo from './index'

const LONDON: LatLng = {
    lat: 51.4703,
    lng: -0.0674,
}

const PARIS: LatLng = {
    lat: 48.8566,
    lng: 2.3522,
}

// const WORTHING: LatLng = {
//   lat: 50.8179,
//   lng: -0.3729,
// }
//
// const BRIGHTON: LatLng = {
//   lat: 50.8225,
//   lng: -0.1372,
// }

const HORSHAM: LatLng = {
    lat: 51.0629,
    lng: -0.3259,
}

test('Handle Paris,France lat long', async () => {
    const info = await getInfo(PARIS.lat, PARIS.lng)
    expect(info.label).toBe('Paris')
    expect(info.countryCode).toBe('FR')
})

test('Handle London,England lat long', async () => {
    const info = await getInfo(LONDON.lat, LONDON.lng)
    expect(info.label).toBe('London')
    expect(info.countryCode).toBe('GB')
})

test('Handle Horsham,England lat long', async () => {
    const info = await getInfo(HORSHAM.lat, HORSHAM.lng)
    expect(info.label).toBe('Horsham')
    expect(info.countryCode).toBe('GB')
})
