import React from "react"
import { View, StyleSheet, Dimensions } from "react-native"
import MapView, { LatLng } from "react-native-maps"
import { GuideInfoFragment } from "api/generated"
import RideLine from "./RideLine"

type Props = {
  guide: GuideInfoFragment
}

export default class Map extends React.Component<Props> {
  private map: MapView | null = null

  lines() {
    return this.props.guide.rides.nodes.map(ride => {
      return <RideLine ride={ride!}/>
    })
  }

  fitToCoordinates() {
    // const coordinates: LatLng[] = this.props.guide.spots.nodes.map(spot => {
    //   return {
    //     latitude: spot!.lat,
    //     longitude: spot!.long,
    //   }
    // })
    // console.log("fitToCoordinates")
    // console.log(coordinates)
    // this.map!.fitToCoordinates(coordinates)
  }

  render() {
    return <View style={styles.container}>
      <MapView style={styles.map}
               ref={ref => {
                 this.map = ref
                 this.fitToCoordinates()
               }}
               initialRegion={{
                 latitude: 37.78825,
                 longitude: -122.4324,
                 latitudeDelta: 0.09,
                 longitudeDelta: 0.09,
               }}>
        {this.lines()}
      </MapView>
    </View>
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: 200,
  },
})