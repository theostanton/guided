import {GuideFragment} from "api/generated";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {hairline, half, icon, quarter, whole} from "styles/dimensions";
import {border, darkIcon} from "styles/colors";
import {h1, h3} from "styles/text";
import {duration, humanDistance} from "utils/human";
import Stats, {Stat} from "components/Stats";
import Link from "components/Link";
import {Route} from "utils/navigation/ParamList";
import GuideRoute from "components/GuideRoute";
import {assertMaybes} from "utils";
import {divider} from "styles";
import Icon from "components/Icon";

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
    return <View style={styles.back}>
      <Icon name={'chevron-left'} size={icon} color={darkIcon} onPress={() =>
        this.props.goBack()
      }/>
    </View>
  }

  renderHeader() {
    return <View style={styles.header}>
      <Text style={styles.title}>{this.guide.title}</Text>
      <Text style={styles.owner}>by <Link href={Route.user({
        username: this.guide.owner
      })}>{this.guide.owner}</Link></Text>
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

    return <View style={styles.stats}>
      <Stats stats={stats} type={'grid'}/>
    </View>
  }

  renderRoute() {
    return <View style={styles.route}>
      <View style={styles.divider}/>
      <Text style={styles.routeTitle}>Route</Text>
      <GuideRoute spots={this.guide.spots.nodes.map(assertMaybes())}
                  selectedSpotId={this.props.selectedSpotId}
                  selectSpot={(spotId) => {
                    this.props.selectSpot(spotId)
                  }}/>
    </View>
  }

  render() {
    return <View style={styles.root} pointerEvents={'auto'}>
      {this.renderBackIcon()}
      {this.renderHeader()}
      {this.renderStats()}
      {this.renderRoute()}
    </View>;
  }
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderColor: border,
    borderWidth: hairline,
    borderRadius: quarter
  },
  divider: {
    ...divider,
    marginLeft: whole,
    marginRight: whole,
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
  stats: {},
  routeTitle: {
    ...h3,
    paddingLeft: whole,
    paddingRight: whole
  },
  route: {
    flex: 1,
  },
  back: {
    padding: half,
    borderBottomWidth: hairline,
    borderBottomColor: border
  },
  header: {
    padding: whole,
  },
  icon: {
    flexGrow: 0,
    width: icon,
    height: icon,
  },
});