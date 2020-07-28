import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject} from 'mobx-react';
import {ScreenProps} from 'utils/router/ScreenProps';

type Props = ScreenProps<'Profile'>

@inject('authStore')
export default class ProfileScreen extends React.Component<Props> {
  render() {
    return (
      <View style={styles.root}>
        <Text>Profile of {this.props.params.username}</Text>
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
