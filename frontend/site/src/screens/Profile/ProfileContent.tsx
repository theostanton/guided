import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GuideListItemFragment, ProfileUserFragment} from "api/generated";
import GuidesList from "components/Guides";
import Stats, {Stat} from "../../components/Stats";
import {h1} from "styles/text";
import {inject} from "mobx-react";
import Device from "stores/Device";

type Props = {
  device?: Device
  user: ProfileUserFragment
  guides: readonly GuideListItemFragment[]
};
type State = {};

@inject('device')
export default class ProfileContent extends React.Component<Props, State> {
  render() {
    const {user, guides} = this.props

    const stats: Stat[] = [
      {
        label: 'Total countries',
        value: user.countries.length
      },
      {
        label: 'Total distance',
        value: '50m'
      },
      {
        label: 'Total duration',
        value: '4h'
      },
      {
        label: 'Guides',
        value: guides.length
      },
    ]

    const styles = this.props.device.isLandscape() ? landscapeStyles : portraitStyles
    return (
      <View style={styles.root}>
        <View style={styles.info}>
          <Text style={styles.username}>{user.username}</Text>
          <Stats stats={stats}/>
        </View>
        <View style={styles.guides}>
          <GuidesList guides={guides}/>
        </View>
      </View>
    );
  }
}

const portraitStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    flexDirection: 'column'
  },
  username: {
    ...h1
  },
  info: {
    flex: 0,
    flexDirection: 'column'
  },
  guides: {
    flex: 1,
    flexDirection: 'column',
    width: '100%'
  },
});
const landscapeStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  username: {
    ...h1
  },
  info: {
    flex: 1,
    flexDirection: 'column'
  },
  guides: {
    flex: 1,
    flexDirection: 'column'
  },
});
