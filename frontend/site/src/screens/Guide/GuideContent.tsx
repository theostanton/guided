import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
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
    console.log('this.props.guideStore.value',this.props.guideStore.value)
    return (
      <View style={styles.root}>
        <Text>Guide: {this.props.guideStore.guide.slug}</Text>
        <Text>Owner: {this.props.guideStore.guide.owner}</Text>
        <Button title={'Click value=' + this.props.guideStore.value} onPress={() => {
          this.props.guideStore.increment()
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
