import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
type State = {};

export default class MobileGuideContent extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.root}>
        <Text>MobileGuideContent component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
