import {StyleSheet, Text, View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import {h1} from 'styles/text';
import Signup from 'components/Signup';

export default function SignupPage(props) {
  return (
    <Layout>
      <View>
        <Signup />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({});
