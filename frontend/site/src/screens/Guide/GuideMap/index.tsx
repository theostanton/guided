import React from 'react';
import {StyleSheet} from 'react-native';
import {inject, observer} from "mobx-react";
import Map from "components/Map";
import {SEYTHENEX} from "components/Map/consts";
import GuideStore from "../GuideStore";
import IconMarker from "components/Map/IconMarker";

type Props = {
  guideStore?: GuideStore
};
type State = {};

@inject("guideStore")
@observer
export default class GuideMap extends React.Component<Props, State> {

  renderAddSpotMarker() {
    const params = this.props.guideStore.getModeParams('AddSpot')
    console.log('params', params)
    return params && <IconMarker id={'add_spot'} position={params.event} color={'#ff00ff'}/>
  }

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
        {this.renderAddSpotMarker()}
      </Map>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
