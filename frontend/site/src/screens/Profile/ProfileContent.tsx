import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GuideFragment, ProfileUserFragment} from "api/generated";
import GuidesList from "components/Guides";
import Stats, {Stat} from "components/Stats";
import {h1, h2, h3} from "styles/text";
import {inject} from "mobx-react";
import Device from "stores/Device";
import {half, whole} from "styles/dimensions";
import {humanDistance, humanDuration} from "utils/human";
import FollowButton from "../../components/Button/FollowButton";

type Props = {
  device?: Device
  isSelf: boolean
  user: ProfileUserFragment
  guides: readonly GuideFragment[]
};
type State = {};

@inject('device')
export default class ProfileContent extends React.Component<Props, State> {

  renderInfo() {

    const {user, guides} = this.props

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
      <Text style={styles.username}>{user.username}</Text>
      <View style={{flex: 1}}>
        <FollowButton username={user.username}/>
      </View>
      <Stats stats={stats}/>
    </View>
  }

  renderList() {
    const numColumns = this.props.device!.isLandscape() ? 2 : 1
    const {guides} = this.props
    return <View style={styles.guides}>
      <Text style={styles.guideTitle}>{guides.length} guides</Text>
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
    padding:whole,
    flexDirection: 'column',
    marginBottom: whole
  },
  guideTitle: {
    ...h3,
    paddingLeft:whole
  },
  guides: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    overflow: 'scroll'
  },
});
