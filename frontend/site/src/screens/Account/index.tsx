import React from 'react';
import {StyleSheet, View} from 'react-native';
import {inject} from 'mobx-react';
import {h4} from 'styles/text';
import LabelledText from 'components/LabelledText';
import {TabProps} from "utils/navigation/ScreenProps";
import Link from "components/Link";

type Props = TabProps

@inject('authStore')
export default class AccountScreen extends React.Component<Props> {

  render() {
    const user = this.props.authStore.user;
    if (user) {
      return (
        <View style={styles.root}>
          <LabelledText label={'Email'}>{user.email}</LabelledText>
          <LabelledText label={'Username'}>{user.username}</LabelledText>
          <LabelledText label={'Token'}>{user.bearerToken}</LabelledText>
          <Link onClick={async () => {
            await this.props.authStore.logOut()
          }}>Sign out</Link>
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
