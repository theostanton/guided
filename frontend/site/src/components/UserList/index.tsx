import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, Text, View} from 'react-native';
import {ProfileUserFragment} from '../../api/generated';
import Stats, {Stat} from '../Stats';
import {humanDistance} from '../../utils/human';
import {h2} from '../../styles/text';
import {card, divider} from '../../styles';
import {half, whole} from '../../styles/dimensions';
import Pressable from "../Pressable";
import Flags from "../Flags";
import {assertMaybes} from "../../utils";

export type Props = {
  users: readonly ProfileUserFragment[]
};
type State = {};

export default class UserList extends React.Component<Props, State> {

  renderItem({item: user}: ListRenderItemInfo<ProfileUserFragment>) {
    console.log('user', user)
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
          <View style={styles.flags}>
            <Flags countries={user.countries!.map(assertMaybes())}/>
          </View>
        </View>
        <View style={styles.divider}/>
        <View style={styles.stats}>
          <Stats stats={stats} type={'nowrap'}/>
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
  root: {},
  item: {
    ...card,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row'
  },
  divider: {
    ...divider,
    marginLeft: whole,
    marginRight: whole,
  },
  title: {
    ...h2,
    flex: 1,
    paddingTop: half,
    paddingBottom: half,
    paddingLeft: whole,
    paddingRight: whole,
  },
  flags: {
    marginRight: whole,
    justifyContent: 'center'
  },
  stats: {},
});
