import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GuideStore from "./store";
import {inject, observer} from "mobx-react";

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
        <Text>Guide: {this.props.guideStore.guide.slug}</Text>
        <Text>Owner: {this.props.guideStore.guide.owner}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
