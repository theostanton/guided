import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SpotFragment} from "api/generated";
import {h3, h5} from "styles/text";
import {icon, quarter, whole} from "styles/dimensions";
import Pressable from "components/Pressable";
import Icon from "components/Icon";
import {itemStateColor} from "../../../../../styles/colors";

export type SpotItemSpot = Pick<SpotFragment, 'id' | 'label' | 'location'>;
type Props = {
  spot: SpotItemSpot
  selectSpot: (spotId: string) => void
};
type State = {};

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
      this.props.selectSpot(spot.id)
    }}>
      <View style={styles.root}>
        <View style={styles.path}>
          <Icon name={'place'} size={32} color={itemStateColor('spot', "none")}/>
        </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  content: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  arrow: {
    justifyContent: 'center',
    paddingRight: whole
  },
  title: {
    ...h3
  },
  location: {
    ...h5
  }
});
