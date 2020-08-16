import React from 'react';
import {StyleSheet, View} from 'react-native';
import {h3} from "styles/text";
import {GuideFragment} from "api/generated";
import {hairline, half, quarter, whole} from "styles/dimensions";
import {border, primary} from "styles/colors";
import Header from "components/Header";

export type Props = {
  guide: Pick<GuideFragment, 'title' | 'owner'>
};
type State = {};

export default class OverviewContent extends React.Component<Props, State> {

  renderHeader() {
    return <Header style={styles.header}
                   title={this.props.guide.title}
                   subtitle={`By ${this.props.guide.owner}`}
                   icon={{name: 'book', color: primary}}
    />
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
  header: {},
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
