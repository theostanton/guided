import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
type State = {};

export default class Feed extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.root}>
        <Text>Feed component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
