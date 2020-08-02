import React from 'react';
import {StyleSheet, View} from 'react-native';
import {inject, observer} from "mobx-react";
import LeftRail from "./LeftRail";
import {whole} from "styles/dimensions";
import RightRail from "./RightRail";
import GuideStore from "../GuideStore";

type Props = {
  guideStore?: GuideStore
};
type State = {};

@inject("guideStore")
@observer
export default class GuideContent extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.left}>
          <LeftRail/>
        </View>
        <View style={styles.right}>
          <RightRail/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  },
  left: {
    position: 'absolute',
    pointerEvents: 'auto',
    height: '100%',
    margin: 0,
    padding: whole,
    width: '25%',
    maxWidth: 400
  },
  right: {
    position: 'absolute',
    pointerEvents: 'auto',
    height: '100%',
    margin: 0,
    right: 0,
    padding: whole,
    width: '25%',
    maxWidth: 400
  },
});
