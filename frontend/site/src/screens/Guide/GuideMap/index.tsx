import React from 'react';
import {StyleSheet} from 'react-native';
import Map from "components/Map";
import IconMarker from "components/Map/IconMarker";
import RideLine from "components/Map/RideLine";
import {itemStateColor} from "styles/colors";
import {GuideFragment} from "api/generated";
import {ItemState, ModeList} from "screens/Guide/GuideStore/GuideMode";
import {MapClickEvent} from "components/Map/types";

export type Props = {
  guide: Pick<GuideFragment, 'rides' | 'spots'> | undefined
  selectedSpotId?: string
  selectedRideId?: string
  addSpotParams?: ModeList['AddSpot']
  selectSpot: (spotId: string) => void
  addSpot: (event: MapClickEvent) => void
};
type State = {};

export default class GuideMap extends React.Component<Props, State> {

  renderAddSpotMarker() {
    if (this.props.addSpotParams) {
      return <IconMarker key={'add_spot'} id={'add_spot'} position={this.props.addSpotParams.event} color={'#ff00ff'}/>
    }
  }

  spotState(spotId: string): ItemState {
    switch (this.props.selectedSpotId) {
      case undefined:
        return 'none'
      case spotId:
        return 'selected'
      default:
        return 'not_selected'
    }
  }

  renderSpots() {
    return this.props.guide!.spots.nodes.map(spot => spot!).map(spot => {
      return <IconMarker
        id={spot.id}
        key={spot.id}
        position={{longitude: spot.long, latitude: spot.lat}}
        color={itemStateColor('spot', this.spotState(spot.id))}
        onPress={() => {
          this.props.selectSpot(spot.id)
        }
        }
      />
    })
  }

  rideState(rideId: string): ItemState {
    switch (this.props.selectedRideId) {
      case undefined:
        return 'none'
      case rideId:
        return 'selected'
      default:
        return 'not_selected'
    }
  }


  renderRides() {
    return this.props.guide!.rides.nodes.map(ride => ride!)
      .map(ride => {
        return <RideLine key={ride.id} ride={ride} state={this.rideState(ride.id)}/>
      })
  }

  render() {
    return (
      <Map onClick={this.props.addSpot}>
        {this.props.guide && <>
          {this.renderAddSpotMarker()}
          {this.renderSpots()}
          {this.renderRides()}
        </>}
      </Map>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
