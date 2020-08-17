import {GuideFragment} from "api/generated";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {hairline, half, icon, quarter} from "styles/dimensions";
import {border, darkIcon} from "styles/colors";
import {h1, h3} from "styles/text";
import Icon from "react-native-vector-icons/MaterialIcons";
import {duration, humanDistance} from "utils/human";
import Stats, {Stat} from "components/Stats";
import Link from "components/Link";
import {Route} from "utils/navigation/ParamList";
import GuideRoute from "components/GuideRoute";
import {assertMaybes} from "../../../../../utils";
import {divider} from "../../../../../styles";

type PickedGuide = Pick<GuideFragment, 'title' | 'durationSeconds' | 'distanceMeters' | 'rides' | 'spots' | 'countries' | 'owner'>;
export type Props = {
  guide: PickedGuide
  goBack: () => void
  selectedSpotId: string | undefined
  selectSpot: (spotId: string) => void
}

export default class LeftRailContent extends React.Component<Props> {

  get guide(): PickedGuide {
    return this.props.guide
  }

  renderBackIcon() {
    return <View style={styles.icon}>
      <Icon name={'arrow-back'} size={icon} color={darkIcon} onPress={() =>
        this.props.goBack()
      }/>
    </View>
  }

  renderStats() {

    const guideDuration = duration(this.guide.durationSeconds)
    const stats: Stat[] = [
      {
        value: humanDistance(this.guide.distanceMeters, false),
        label: 'miles'
      },
      {
        value: guideDuration.value,
        label: guideDuration.unitLong
      },
      {
        value: this.guide.spots.totalCount,
        label: 'spots',
      },
      {
        value: this.guide.countries!.length,
        label: 'countries',
      }
    ]

    return <Stats stats={stats}/>
  }

  renderRoute() {
    return <View style={styles.route}>
      <View style={styles.divider}/>
      <Text style={h3}>Route</Text>
      <GuideRoute spots={this.guide.spots.nodes.map(assertMaybes())}
                  selectedSpotId={this.props.selectedSpotId}
                  selectSpot={(spotId) => {
                    this.props.selectSpot(spotId)
                  }}/>
    </View>
  }

  render() {
    return <View style={styles.root}>
      {this.renderBackIcon()}
      <Text style={styles.title}>{this.guide.title}</Text>
      <Text style={styles.owner}>by <Link href={Route.user({
        username: this.guide.owner
      })}>{this.guide.owner}</Link></Text>
      {this.renderStats()}
      {this.renderRoute()}
    </View>;
  }
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    padding: half,
    backgroundColor: 'white',
    borderColor: border,
    borderWidth: hairline,
    borderRadius: quarter
  },
  divider: {
    ...divider,
    marginBottom: half,
  },
  title: {
    ...h1,
    paddingBottom: quarter,
  },
  owner: {
    ...h3,
    paddingBottom: quarter,
  },
  route: {},
  icon: {
    flexGrow: 0,
    width: icon,
    height: icon,
  }
});