import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GuideStore from "screens/Guide/GuideStore";
import {h1, h3} from "styles/text";
import {GuideFragment} from "api/generated";
import {inject} from "mobx-react";
import {hairline, half, quarter, whole} from "styles/dimensions";
import {border} from "styles/colors";

export type Props = {
  guide: Pick<GuideFragment,'title'>
};
type State = {};

export default class OverviewContent extends React.Component<Props, State> {

  renderHeader() {
    return <View style={styles.header}>
      <Text style={styles.headerTitle}>
        {this.props.guide.title}
      </Text>
    </View>
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderHeader()}
        <View style={styles.divider}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    height: 200,
    padding: whole,
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
    flex: 1
  },
  divider: {
    height: hairline,
    width: '100%',
    backgroundColor: border,
    marginBottom: half,
    marginTop: quarter
  },
});
