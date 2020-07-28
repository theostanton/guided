import {StyleSheet, Text, View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import Signup from 'components/Signup';
import {webRouter} from 'utils/router/WebRouter';

export default function SignupPage(props) {
  return (
    <Layout>
      <View>
        <Signup router={webRouter} />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({});
