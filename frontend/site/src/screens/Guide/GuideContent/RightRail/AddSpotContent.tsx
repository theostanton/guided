import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GuideStore from "screens/Guide/GuideStore";
import {ModeProps} from "screens/Guide/GuideStore/GuideMode";

type Props = ModeProps<'AddSpot'> & {
  guideStore?: GuideStore
};
type State = {};

export default class AddSpotContent extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.root}>
        <Text>AddSpotContent</Text>
        <Text>latitude={this.props.params.event.latitude}</Text>
        <Text>longitude={this.props.params.event.longitude}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
