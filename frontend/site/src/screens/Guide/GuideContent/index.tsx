import React from 'react';
import {StyleSheet, View} from 'react-native';
import GuideStore from "../store";
import {inject, observer} from "mobx-react";
import LeftRail from "./LeftRail";
import {half} from "../../../styles/dimensions";

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
          <LeftRail />
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
    pointerEvents:'auto',
    height: '100%',
    margin: 0,
    padding: half,
    width: '25%',
    maxWidth: 400
  }
});
