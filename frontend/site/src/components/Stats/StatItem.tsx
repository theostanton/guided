import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {h2, h3} from "styles/text";
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
        <Text style={styles.label}>{this.props.stat.label}</Text>
        <Text style={styles.value}>{this.props.stat.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    // textAlign: 'center',
    textAlign:'center',
    flexShrink: 0,
    padding: whole
  },
  label: {
    ...h3,
    flex: 1,
  },
  value: {
    ...h2,
    flex: 1
  }
});
