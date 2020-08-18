import React from 'react';
import {FlatList, Platform, StyleSheet, View} from 'react-native';
import StatItem from "./StatItem";


export type Stat = {
  label: string
  value: string | number
}
export type Props = {
  type: 'nowrap' | 'grid'
  stats: Stat[]
};
type State = {};

export default class Stats extends React.Component<Props, State> {

  get numColumns(): number | undefined {
    if (this.props.type === 'nowrap') {
      return undefined
    }
    switch (this.props.stats.length) {
      case 1:
        return 1
      case 2:
      case 4:
        return 2
      case 3:
        return 1
      case 5:
      case 6:
      default:
        return 3
    }
  }

  get horizontal(): boolean {
    return this.props.type === 'nowrap'
  }

  render() {
    return (
      <FlatList horizontal={this.horizontal}
                data={this.props.stats}
                contentContainerStyle={styles.container}
                numColumns={this.numColumns}
                renderItem={({item: stat}) => {
                  return <View style={styles.item}><StatItem stat={stat}/></View>
                }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    flexShrink: 0,
    minWidth: Platform.OS === 'web' ? 'min-content' : undefined,
  }
});
