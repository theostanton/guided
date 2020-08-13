import React from 'react';
import {ListRenderItemInfo, StyleSheet, Text, View} from 'react-native';
import {SpotFragment} from "api/generated";
import {h3, h5} from "styles/text";
import {icon, quarter, whole} from "styles/dimensions";
import Pressable from "components/Pressable";
import GuideStore from "screens/Guide/GuideStore";
import {inject} from "mobx-react";
import Icon from "components/Icon";

type Props = {
  guideStore?: GuideStore
  spot: SpotFragment
};
type State = {};

@inject('guideStore')
export default class SpotItem extends React.Component<Props, State> {

  renderContent() {
    const spot = this.props.spot
    return <View style={styles.content}>
      <Text style={styles.title}>{spot.label ? spot.label : spot.location}</Text>
      {spot.label && <Text style={styles.location}>{spot.location}</Text>}
    </View>
  }

  render() {
    const spot = this.props.spot
    return <Pressable onPress={() => {
      this.props.guideStore!.updateMode('SelectSpot', {
        spot
      })
    }}>
      <View style={styles.root}>
        <View style={styles.path}/>
        {this.renderContent()}
        <View style={styles.arrow}>
          <Icon name={'chevron-right'} size={icon}/>
        </View>
      </View>
    </Pressable>
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    minHeight: 60,
    paddingTop: quarter,
    flexDirection: 'row',
  },
  path: {
    flex: 1
  },
  content: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  arrow: {
    justifyContent: 'center',
    paddingRight:whole
  },
  title: {
    ...h3
  },
  location: {
    ...h5
  }
});
