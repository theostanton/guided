import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {GuideFragment, ProfileUserFragment} from "api/generated";
import GuidesList from "components/Guides";
import Stats, {Stat} from "components/Stats";
import {h1} from "styles/text";
import {inject} from "mobx-react";
import Device from "stores/Device";

type Props = {
  device?: Device
  user: ProfileUserFragment
  guides: readonly GuideFragment[]
};
type State = {};

@inject('device')
export default class ProfileContent extends React.Component<Props, State> {

  renderStats() {
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
    return <Stats stats={stats}/>
  }

  renderList(style: ViewStyle) {
    const {guides} = this.props
    return <View style={style}>
      <GuidesList guides={guides}/>
    </View>
  }

  renderPortrait() {
    return <View style={portraitStyles.root}>
      <View style={portraitStyles.info}>
        <Text style={portraitStyles.username}>{this.props.user.username}</Text>
        {this.renderStats()}
      </View>
      {this.renderList(portraitStyles.guides)}
    </View>
  }

  renderLandscape() {
    const styles = StyleSheet.create({
      root: {
        width: '100%',
        flex:1,
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
        overflow:'scroll'
      },
    });
    return <View style={styles.root}>
      <View style={styles.info}>
        <Text style={styles.username}>{this.props.user.username}</Text>
        {this.renderStats()}
      </View>
      {this.renderList(styles.guides)}
    </View>
  }

  render() {
    if (this.props.device.isLandscape()) {
      return this.renderLandscape()
    } else {
      return this.renderPortrait()
    }
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
    width: '100%',
    overflow: 'scroll'
  },
});
