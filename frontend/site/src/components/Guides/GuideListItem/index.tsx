import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GuideFragment} from "api/generated";
import {h2} from "styles/text";
import {hairline, half, whole} from "styles/dimensions";
import {border, itemStateColor} from "styles/colors";
import Pressable from "components/Pressable";
import Stats, {Stat} from "components/Stats";
import {Route} from "utils/navigation/ParamList";
import GuideListItemMap from "./GuideListItemMap";
import RideLine from "components/Map/RideLine";
import IconMarker from "components/Map/IconMarker";
import {duration, humanDistance} from "../../../utils/human";

type Props = {
  guide: GuideFragment,
};
type State = {};

export default class GuideListItem extends React.Component<Props, State> {

  renderHeader() {
    return <View style={styles.header}>
      <Text style={styles.title}>{this.props.guide.title}</Text>
    </View>
  }

  renderMap() {
    return <View style={styles.map}>
      <GuideListItemMap guide={this.props.guide}>
        {this.props.guide.rides.nodes.map(ride => {
          return <RideLine ride={ride} state={'none'}/>
        })}
        {this.props.guide.spots.nodes.map(spot => {
          return <IconMarker
            id={spot.id}
            color={itemStateColor('spot','none')}
            position={{
              latitude: spot.lat,
              longitude: spot.long
            }}/>
        })}
      </GuideListItemMap>
    </View>
  }

  renderStats() {
    const guide = this.props.guide
    const stats: Stat[] = [
      {
        label: duration(guide.durationSeconds).unitLong,
        value: duration(guide.durationSeconds).value
      },
      {
        label: 'miles',
        value: humanDistance(guide.distanceMeters, false)
      },
      {
        label: 'rides',
        value: guide.rides.totalCount
      },
      {
        label: 'nights',
        value: guide.spots.nodes.reduce((acc, spot) => {
          return acc + spot.nights
        }, 0)
      },
    ]
    return <View style={styles.stats}>
      <Stats stats={stats}/>
    </View>
  }

  render() {
    return (
      <Pressable
        href={Route.guide(this.props.guide)}>
        <View style={styles.root}>
          {this.renderHeader()}
          {this.renderMap()}
          {this.renderStats()}
        </View>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: border,
    borderWidth: hairline,
    borderRadius: half,
    flexDirection: 'column'
  },
  header: {
    paddingTop: half,
    paddingBottom: half,
    paddingLeft: whole,
    paddingRight: whole
  },
  title: {
    ...h2
  },
  map: {
    height: 200,
    width: '100%'
  },
  stats: {
    width: '100%'
  }
});
