import {StyleSheet, View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import {inject, observer} from 'mobx-react';
import AuthStore from 'stores/AuthStore';
import {webRouter} from '../utils/router/WebRouter';
import AccountScreen from 'screens/Account';

type Props = {
  authStore: AuthStore;
};

@inject('authStore')
@observer
export default class AccountPage extends React.Component<Props> {
  render() {
    return (
      <Layout>
        <View>
          <AccountScreen params={{}} router={webRouter}/>
        </View>
      </Layout>
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
});
