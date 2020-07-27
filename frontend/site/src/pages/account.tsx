import {StyleSheet, Text, View} from 'react-native';
import Layout from 'components/Layout';
import LabelledTextInput from 'components/LabelledTextInput';
import React from 'react';
import {h1} from 'styles/text';
import {inject, observer} from 'mobx-react';
import AuthStore from 'stores/AuthStore';

type Props = {
  authStore: AuthStore;
};

@inject('authStore')
@observer
export default class AccountPage extends React.Component<Props> {
  render() {
    const user = this.props.authStore.user;
    if (user) {
      return (
        <Layout>
          <View>
            <LabelledTextInput label={'Username'} initialText={user.username} />
            <LabelledTextInput label={'Email'} initialText={user.email} />
          </View>
        </Layout>
      );
    } else {
      return <Layout />;
    }
  }
}

const styles = StyleSheet.create({});
