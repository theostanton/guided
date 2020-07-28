import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthStore from 'stores/AuthStore';
import {inject} from 'mobx-react';

type Props = ProfileProps & {
  authStore?: AuthStore;
};

@inject('authStore')
export default class Profile extends React.Component<Props> {
  render() {
    return (
      <View style={styles.root}>
        <Text>Profile of {this.props.username}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  textInput: {},
  button: {},
});
