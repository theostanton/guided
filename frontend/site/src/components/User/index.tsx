import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProfileUserFragment} from "api/generated";
import {h1} from "styles/text";

type Props = {
  user:ProfileUserFragment
};
type State = {};

export default class User extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.username}>{this.props.user}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
  username:{
    ...h1
  }
});
