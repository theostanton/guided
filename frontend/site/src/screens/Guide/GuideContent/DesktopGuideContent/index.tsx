import React from 'react';
import {StyleSheet, View} from 'react-native';
import {inject, observer} from "mobx-react";
import LeftRail from "./LeftRail";
import {whole} from "styles/dimensions";
import RightRail from "./RightRail";
import GuideStore from "../../GuideStore";
import Device from "stores/Device";
import CameraStore from "components/Map/CameraStore";

type Props = {
  guideStore?: GuideStore,
  device?: Device
  cameraStore?: CameraStore
};
type State = {};

const MAX_RAIL_WIDTH=400

@inject("guideStore", "device", "cameraStore")
@observer
export default class DesktopGuideContent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    const side = Math.min(this.props.device.window.width / 4, MAX_RAIL_WIDTH) + 2 * whole
    props.cameraStore.updatePadding({
      left: side,
      right: side
    })
  }

  render() {
    return (
      <View style={styles.root} pointerEvents={'none'}>
        <View style={styles.left} pointerEvents={'auto'}>
          <LeftRail/>
        </View>
        <View style={styles.right} pointerEvents={'auto'}>
          <RightRail/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%'
  },
  left: {
    position: 'absolute',
    height: '100%',
    margin: 0,
    padding: whole,
    width: '25%',
    maxWidth: MAX_RAIL_WIDTH
  },
  right: {
    position: 'absolute',
    height: '100%',
    margin: 0,
    right: 0,
    padding: whole,
    width: '25%',
    maxWidth: MAX_RAIL_WIDTH
  },
});
