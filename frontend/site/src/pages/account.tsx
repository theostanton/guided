import {StyleSheet, Text, View} from 'react-native';
import Layout from 'components/Layout';
import LabelledTextInput from 'components/LabelledTextInput';
import React from 'react';
import {h1} from 'styles/text';
import {inject, observer} from 'mobx-react';
import AuthStore from 'stores/AuthStore';
import LabelledText from 'components/LabelledText';

type Props = {
  authStore: AuthStore;
};

@inject('authStore')
@observer
export default class AccountPage extends React.Component<Props> {
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
  }
});
