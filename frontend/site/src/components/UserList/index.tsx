import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, Text, View} from 'react-native';
import {ProfileUserFragment} from '../../api/generated';
import Stats, {Stat} from '../Stats';
import {duration, humanDistance} from '../../utils/human';
import {h2} from '../../styles/text';
import {card, divider} from '../../styles';
import {half, whole} from '../../styles/dimensions';
import Pressable from "../Pressable";

type Props = {
  users: readonly ProfileUserFragment[]
};
type State = {};

export default class UserList extends React.Component<Props, State> {

  renderItem({item: user}: ListRenderItemInfo<ProfileUserFragment>) {
    const userDuration = duration(user.durationSeconds);
    const stats: Stat[] = [
      {
        value: user.guidesByOwner.totalCount,
        label: 'guides',
      },
      {
        value: humanDistance(user.distanceMeters, false),
        label: 'miles',
      },
      {
        value: user.following.totalCount,
        label: 'following',
      },
      {
        value: user.followers.totalCount,
        label: 'followers',
      },
    ];
    return <Pressable href={`/${user.username}`}>
      <View style={styles.item}>
        <View style={styles.header}>
          <Text style={styles.title}>{user.username}</Text>
        </View>
        <View style={styles.divider}/>
        <View style={styles.stats}>
          <Stats stats={stats}/>
        </View>
      </View>
    </Pressable>;
  }

  render() {
    return (
      <View style={styles.root}>
        <FlatList
          ItemSeparatorComponent={() => {
            return <View style={{height: whole}}/>
          }}
          data={this.props.users}
          renderItem={this.renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
  },
  item: {
    ...card,
    flexDirection: 'column',
  },
  header: {},
  divider: {
    ...divider,
    marginLeft: whole,
    marginRight: whole,
  },
  title: {
    ...h2,
    paddingTop: half,
    paddingBottom: half,
    paddingLeft: whole,
    paddingRight: whole,
  },
  stats: {},
});
