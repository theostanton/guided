import React from 'react';
import {StyleSheet} from 'react-native';
import {inject, observer} from "mobx-react";
import Map from "components/Map";
import GuideStore from "../GuideStore";
import IconMarker from "components/Map/IconMarker";
import RideLine from "components/Map/RideLine";
import {itemStateColor} from "styles/colors";

type Props = {
  guideStore?: GuideStore
};
type State = {};

@inject("guideStore", "device")
@observer
export default class GuideMap extends React.Component<Props, State> {

  renderAddSpotMarker() {
    const params = this.props.guideStore.getModeParams('AddSpot')
    return params && <IconMarker id={'add_spot'} position={params.event} color={'#ff00ff'}/>
  }

  renderSpots() {
    return this.props.guideStore.guide.spots.nodes.map(spot => {
      const state = this.props.guideStore.selectedState(spot)
      return <IconMarker
        id={spot.id}
        key={spot.id}
        position={{longitude: spot.long, latitude: spot.lat}}
        color={itemStateColor(state)}
        onPress={() => {
          this.props.guideStore.updateMode('SelectSpot', {
            spot
          })
        }
        }
      />
    })
  }

  renderRides() {
    return this.props.guideStore.guide.rides.nodes.map(ride => {
      return <RideLine key={ride.id} ride={ride} state={this.props.guideStore.selectedState(ride)}/>
    })
  }

  render() {
    return (
      <Map onClick={(event) => {
        this.props.guideStore.updateMode('AddSpot', {
          event
        })
      }}>
        {this.props.guideStore.guide && <>
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
