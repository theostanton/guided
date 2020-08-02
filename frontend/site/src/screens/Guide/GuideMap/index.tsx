import React from 'react';
import {StyleSheet} from 'react-native';
import {inject, observer} from "mobx-react";
import Map from "components/Map";
import {SEYTHENEX} from "components/Map/consts";
import GuideStore from "../GuideStore";
import IconMarker from "components/Map/IconMarker";
import {ItemState} from "../GuideStore/GuideMode";

type Props = {
  guideStore?: GuideStore
};
type State = {};

const Colours: { [state in ItemState]: string } = {
  selected: '#ff0000',
  not_selected: '#00ff00',
  none: '#0000ff'
}

@inject("guideStore")
@observer
export default class GuideMap extends React.Component<Props, State> {

  renderAddSpotMarker() {
    const params = this.props.guideStore.getModeParams('AddSpot')
    console.log('params', params)
    return params && <IconMarker id={'add_spot'} position={params.event} color={'#ff00ff'}/>
  }

  renderSpots() {
    return this.props.guideStore.guide.spots.nodes.map(spot => {
      const state = this.props.guideStore.selectedState(spot)
      return <IconMarker
        id={spot.id}
        position={{longitude: spot.long, latitude: spot.lat}}
        color={Colours[state]}
        onPress={() => {
          this.props.guideStore.updateMode('SelectSpot', {
            spot
          })
        }
        }
      />
    })
  }

  // renderRides() {
  //   return this.props.guideStore.guide.rides.nodes.map(ride => {
  //     return <RideLine ride={ride} state={this.props.guideStore.selectedState(ride)}/>
  //   })
  // }

  render() {
    return (
      <Map latitude={SEYTHENEX.latitude}
           longitude={SEYTHENEX.longitude}
           zoom={10}
           onClick={(event) => {
             this.props.guideStore.updateMode('AddSpot', {
               event
             })
           }}>
        {this.props.guideStore.guide && <>
          {this.renderAddSpotMarker()}
          {this.renderSpots()}
          {/*{this.renderRides()}*/}
        </>}
      </Map>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
