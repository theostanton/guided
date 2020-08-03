import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, Text, View} from 'react-native';
import GuideStore from "screens/Guide/GuideStore";
import {h1, h3, h4} from "styles/text";
import {GuideFragment, SpotFragment} from "api/generated";
import {inject} from "mobx-react";
import {hairline, half, quarter} from "styles/dimensions";
import SpotItem from "./SpotItem";
import {border} from "../../../../../styles/colors";

type Props = {
  guideStore?: GuideStore
};
type State = {};

@inject('guideStore')
export default class OverviewContent extends React.Component<Props, State> {

  get guide(): GuideFragment {
    return this.props.guideStore.guide
  }

  renderHeader() {
    return <View style={styles.header}>
      <Text style={styles.headerTitle}>
        {this.guide.title}
      </Text>
    </View>
  }

  renderSpots() {
    return <View style={styles.spots}>
      <Text style={styles.spotsTitle}>Spots</Text>
      <View style={styles.spotList}>
        <FlatList data={this.guide.spots.nodes} renderItem={(item) => {
          return <SpotItem item={item}/>
        }}/>
      </View>
    </View>
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderHeader()}
        <View style={styles.divider}/>
        {this.renderSpots()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    height: '200'
  },
  header: {
    flex: 1,
    flexDirection: 'row'
  },
  headerTitle: {
    ...h1,
    flex: 1,
    marginLeft: quarter
  },
  spots: {
    flex: 1,
    flexDirection: 'column'
  },
  spotsTitle: {
    ...h3,
    flex: 1
  },
  spotList: {
    flex: 1,
    maxHeight: 200
  },
  divider: {
    height: hairline,
    width: '100%',
    backgroundColor: border,
    marginBottom: half,
    marginTop:quarter
  },
});
