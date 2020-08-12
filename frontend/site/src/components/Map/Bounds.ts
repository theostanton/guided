import {LatLong} from "./types";
import {GuideFragment} from "api/generated";
import {CameraBounds} from "./CameraStore";

export default class Bounds implements CameraBounds {
  mode: "bounds" = 'bounds';
  northEast: LatLong
  southWest: LatLong

  static guide(guide: GuideFragment): Bounds | undefined {
    const spots = guide.spots.nodes.map(spot => spot!)
    if (spots.length === 0) {
      return undefined
    }

    let west = spots[0].long
    let east = spots[0].long
    let north = spots[0].lat
    let south = spots[0].lat

    spots.forEach(spot => {
      north = Math.max(north, spot.lat)
      south = Math.min(south, spot.lat)
      east = Math.max(east, spot.long)
      west = Math.min(west, spot.long)
    })

    return new Bounds(
      {
        longitude: east,
        latitude: north
      },
      {
        longitude: west,
        latitude: south
      })
  }


  constructor(northEast: LatLong, southWest: LatLong) {
    this.northEast = northEast;
    this.southWest = southWest;
  }

}