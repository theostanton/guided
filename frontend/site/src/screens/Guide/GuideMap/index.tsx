import React from 'react';
import {StyleSheet} from 'react-native';
import Map from "components/Map";
import IconMarker from "components/Map/IconMarker";
import RideLine from "components/Map/RideLine";
import {itemStateColor} from "styles/colors";
import {GuideFragment} from "api/generated";
import {ItemState, ModeList} from "screens/Guide/GuideStore/GuideMode";
import {MapClickEvent} from "components/Map/types";
import GuideStore from "../GuideStore";
import {inject, observer} from "mobx-react";

export type Props = {
  guide: Pick<GuideFragment, 'rides' | 'spots'>
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
      return <IconMarker key={'add_spot'} id={'add_spot'}
                         position={this.props.addSpotParams.event}
                         color={itemStateColor('spot', 'selected')}/>
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
        {this.renderAddSpotMarker()}
        {this.renderSpots()}
        {this.renderRides()}
      </Map>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});


@inject('guideStore')
@observer
export class GuideMapObserver extends React.Component<{ guideStore?: GuideStore }> {

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  render() {
    let guide = this.guideStore.guide;
    if (guide) {
      let selectedSpotId: string | undefined;
      if (this.props.guideStore?.mode === 'SelectSpot') {
        selectedSpotId = this.guideStore.getModeParams('SelectSpot')?.spot?.id
      }
      return <GuideMap guide={guide}
                       addSpot={(event) => {
                         this.guideStore.updateMode('AddSpot', {
                           event
                         })
                       }}
                       selectedSpotId={selectedSpotId}
                       selectSpot={(spotId) => {
                         this.guideStore.selectSpot(spotId)
                       }}/>
    } else {
      return null
    }
  }
}