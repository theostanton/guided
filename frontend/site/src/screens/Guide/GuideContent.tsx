import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GuideFragment} from "api/generated";

type Props = {
  guide: GuideFragment
};
type State = {};

export default class GuideContent extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.root}>
        <Text>Guide: {this.props.guide.slug}</Text>
        <Text>Owner: {this.props.guide.owner}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
