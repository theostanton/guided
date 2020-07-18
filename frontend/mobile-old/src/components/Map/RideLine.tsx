import React from "react"
import { GuideInfoRideFragment } from "api/generated"
// import { Geojson, Polyline } from "react-native-maps"

type Props = {
  ride: GuideInfoRideFragment
}

export default class RideLine extends React.Component<Props> {

  render() {
    // return <Geojson geojson={this.props.ride.pathUrl} />
    return null
  }
}