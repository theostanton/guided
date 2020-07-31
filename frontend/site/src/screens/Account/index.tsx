import React from 'react';
import {StyleSheet, View} from 'react-native';
import {inject} from 'mobx-react';
import {h4} from 'styles/text';
import LabelledText from 'components/LabelledText';
import AuthStore from "stores/AuthStore";
import Router from "utils/router";

type Props = {
  authStore?: AuthStore
  router?: Router
}

@inject('authStore', 'router')
export default class AccountScreen extends React.Component<Props> {

  render() {
    const user = this.props.authStore.user;
    console.log('user', user);
    if (user) {
      return (
        <View style={styles.root}>
          <LabelledText label={'Email'}>{user.email}</LabelledText>
          <LabelledText label={'Username'}>{user.username}</LabelledText>
          <LabelledText label={'Token'}>{user.bearerToken}</LabelledText>
        </View>
      );
    } else {
      return (
        <View style={styles.root}>
          <LabelledText label={'User'}>None</LabelledText>
        </View>
      );
    }
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
  error: {
    ...h4,
    color: 'red'
  },
  button: {},
  already: {
    ...h4
  },
});
