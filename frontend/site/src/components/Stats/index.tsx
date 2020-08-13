import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import StatItem from "./StatItem";
import * as OS from "os";


export type Stat = {
  label: string
  value: string | number
}
export type Props = {
  stats: Stat[]
};
type State = {};

export default class Stats extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.root}>
        {this.props.stats.map(stat => {
          return (
            <View key={stat.label} style={styles.item}>
              <StatItem stat={stat}/>
            </View>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    flexShrink:0,
    minWidth: Platform.OS === 'web' ? 'min-content' : undefined,
  }
});
