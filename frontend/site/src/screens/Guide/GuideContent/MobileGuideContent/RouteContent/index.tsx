import React from 'react';
import {StyleSheet, View} from 'react-native';
import GuideRoute from "components/GuideRoute";
import {SpotItemSpot} from "components/GuideRoute/SpotItem";

export type Props = {
  spots: SpotItemSpot[]
  selectSpot: (spotId: string) => void
};
type State = {};

export default class RouteContent extends React.Component<Props, State> {

  render() {

    return (
      <View style={styles.root}>
        <GuideRoute
          spots={this.props.spots}
          selectSpot={this.props.selectSpot}
          selectedSpotId={undefined}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    height: 200
  },
});
