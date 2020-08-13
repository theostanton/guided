import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {h3, h4} from "styles/text";
import {whole} from "styles/dimensions";
import {Stat} from "./index";

type Props = {
  stat: Stat
};
type State = {};

export default class StatItem extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.value}>{this.props.stat.value}</Text>
        <Text style={styles.label}>{this.props.stat.label}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    // textAlign: 'center',
    alignContent: 'center',
    minWidth: Platform.OS === 'web' ? 'min-content' : undefined,
    flexShrink: 0,
    padding: whole
  },
  label: {
    ...h4,
    flex: 1,
  },
  value: {
    ...h3,
    flex: 1
  }
});
