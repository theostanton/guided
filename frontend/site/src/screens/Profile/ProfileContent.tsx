import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GuideListItemFragment, ProfileUserFragment} from "api/generated";
import GuidesList from "components/Guides";
import Stats, {Stat} from "../../components/Stats";
import {h1} from "styles/text";

type Props = {
  user: ProfileUserFragment
  guides: readonly GuideListItemFragment[]
};
type State = {};

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
    return (
      <View style={styles.root}>
        <View style={styles.left}>
          <Text style={styles.username}>{user.username}</Text>
          <Stats stats={stats}/>
        </View>
        <View style={styles.right}>
          <GuidesList guides={guides}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  username: {
    ...h1
  },
  left: {
    flex: 1,
    flexDirection: 'column'
  },
  right: {
    flex: 1,
    flexDirection: 'column'
  },
});
