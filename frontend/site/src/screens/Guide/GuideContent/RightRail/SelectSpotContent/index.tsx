import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GuideStore from "screens/Guide/GuideStore";
import {ModeProps} from "screens/Guide/GuideStore/GuideMode";
import {h1} from "styles/text";
import {inject} from "mobx-react";

type Props = ModeProps<'SelectSpot'> & {
  guideStore?: GuideStore
};
type State = {};

@inject('guideStore')
export default class SelectSpotContent extends React.Component<Props, State> {


  renderHeader() {
    return <Text style={styles.title}>
      {this.props.params.spot.name}
    </Text>
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderHeader()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
  title: {
    ...h1,
    flex: 1
  },
});
