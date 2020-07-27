import {StyleSheet, Text, View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import {h1} from 'styles/text';
import Login from '../components/Login';

export default function LoginPage(props) {
  return (
    <Layout>
      <View>
        <Login />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({});
