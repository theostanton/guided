import {StyleSheet, Text, View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import Login from 'components/Login';
import {webRouter} from 'utils/router/WebRouter';

export default function LoginPage(props) {
  return (
    <Layout>
      <View>
        <Login router={webRouter}/>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({});
