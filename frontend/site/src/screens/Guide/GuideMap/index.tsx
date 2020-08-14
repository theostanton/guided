import React from 'react';
import {StyleSheet} from 'react-native';
import {inject, observer} from "mobx-react";
import Map from "components/Map";
import GuideStore from "../GuideStore";
import IconMarker from "components/Map/IconMarker";
import RideLine from "components/Map/RideLine";
import {itemStateColor} from "styles/colors";
import {GuideFragment} from "api/generated";

type Props = {
  guideStore?: GuideStore
};
type State = {};

@inject("guideStore")
@observer
export default class GuideMap extends React.Component<Props, State> {

  get guide(): GuideFragment {
    return this.props.guideStore!.guide!
  }

  renderAddSpotMarker() {
    if (this.props.guideStore?.mode === 'AddSpot') {
      const params = this.props.guideStore!.getModeParams('AddSpot')
      return <IconMarker key={'add_spot'} id={'add_spot'} position={params.event} color={'#ff00ff'}/>
    }
  }

  renderSpots() {
    return this.guide.spots.nodes.map(spot => spot!).map(spot => {
      const state = this.props.guideStore!.selectedState(spot)
      return <IconMarker
        id={spot.id}
        key={spot.id}
        position={{longitude: spot.long, latitude: spot.lat}}
        color={itemStateColor('spot', state)}
        onPress={() => {
          this.props.guideStore!.updateMode('SelectSpot', {
            spot
          })
        }
        }
      />
    })
  }

  renderRides() {
    return this.guide.rides.nodes.map(ride => ride!)
      .map(ride => {
        return <RideLine key={ride.id} ride={ride} state={this.props.guideStore!.selectedState(ride)}/>
      })
  }

  render() {
    return (
      <Map onClick={(event) => {
        this.props.guideStore!.updateMode('AddSpot', {
          event
        })
      }}>
        {this.props.guideStore!.guide && <>
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
