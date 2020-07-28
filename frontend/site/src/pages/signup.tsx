import {StyleSheet, View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import {webRouter} from 'utils/router/WebRouter';
import SignupScreen from 'screens/Signup';

export default function SignupPage(props) {
  return (
    <Layout>
      <View>
        <SignupScreen router={webRouter} params={{}} />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({});
