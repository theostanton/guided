import React from 'react';
import {StyleSheet} from 'react-native';
import {inject, observer} from "mobx-react";
import GuideStore from "./store";
import Map from "components/Map";
import {SEYTHENEX} from "components/Map/consts";

type Props = {
  guideStore?: GuideStore
};
type State = {};

@inject("guideStore")
@observer
export default class GuideMap extends React.Component<Props, State> {
  render() {
    const {guide} = this.props.guideStore
    return (
      <Map latitude={SEYTHENEX.latitude} longitude={SEYTHENEX.longitude} zoom={10}>

      </Map>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
