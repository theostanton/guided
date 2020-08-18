import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GuideFragment, ProfileUserFragment} from "api/generated";
import GuidesList from "components/Guides";
import Stats, {Stat} from "components/Stats";
import {h1, h3} from "styles/text";
import {half, whole} from "styles/dimensions";
import {humanDistance, humanDuration} from "utils/human";
import FollowButton from "components/Button/FollowButton";
import {Context} from "app/Context";

export type Props = {
  isSelf: boolean
  user: ProfileUserFragment
  guides: readonly GuideFragment[]
};
type State = {};

export default class ProfileContent extends React.Component<Props, State> {

  static contextType = Context

  renderInfo() {

    const {user} = this.props

    const stats: Stat[] = [
      {
        label: 'Total countries',
        value: user.countries!.length
      },
      {
        label: 'Total distance',
        value: humanDistance(user.distanceMeters, true, true)
      },
      {
        label: 'Total duration',
        value: humanDuration(user.durationSeconds, true)
      }
    ]

    return <View style={styles.info}>
      <View style={styles.infoLeft}>
        <Text style={styles.username}>{user.username}</Text>
        <View style={{flex: 1}}>
          <FollowButton username={user.username}/>
        </View>
      </View>
      <View style={styles.infoRight}>
        <Stats stats={stats} type={'nowrap'}/>
      </View>
    </View>
  }

  renderList() {
    const numColumns = this.context!.isLandscape() ? 2 : 1
    const {guides} = this.props
    return <View style={styles.guides}>
      <GuidesList guides={guides} numColumns={numColumns}/>
    </View>
  }


  render() {
    return <View style={styles.root}>
      {this.renderInfo()}
      {this.renderList()}
    </View>
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    flexDirection: 'column'
  },
  username: {
    ...h1,
    margin: half
  },
  info: {
    padding: whole,
    flexDirection: 'row',
    marginBottom: whole
  },
  infoLeft: {
    flex: 1,
  },
  infoRight: {
    flex: 1
  },
  guideTitle: {
    ...h3,
    paddingLeft: whole
  },
  guides: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    overflow: 'scroll'
  },
});
