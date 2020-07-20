import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
type State = {};

export default class SomeComponent extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.root}>
        <Text>Some Component!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {padding: 10},
  text: {fontWeight: 'bold'},
});
