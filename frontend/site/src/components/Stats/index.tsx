import React from 'react';
import {StyleSheet, View} from 'react-native';
import StatItem from "./StatItem";


export type Stat = {
  label: string
  value: string|number
}
type Props = {
  stats: Stat[]
};
type State = {};

export default class Stats extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.root}>
        {this.props.stats.map(stat => {
          return (
            <View style={styles.item}>
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
    display:'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  item: {
    flex: 1,
    minWidth:'min-content',
  }
});
