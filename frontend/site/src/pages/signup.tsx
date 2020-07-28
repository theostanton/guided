import {StyleSheet, Text, View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import {webRouter} from 'utils/router/WebRouter';
import SignupScreen from 'screens/signup';

export default function SignupPage(props) {
  return (
    <Layout>
      <View>
        <SignupScreen router={webRouter} />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({});
