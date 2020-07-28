import {StyleSheet, Text, View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import {webRouter} from 'utils/router/WebRouter';
import LoginScreen from 'screens/Login';

export default function LoginPage(props) {
  return (
    <Layout>
      <View>
        <LoginScreen params={{}} router={webRouter}/>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({});
