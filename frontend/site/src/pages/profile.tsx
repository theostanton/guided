import {StyleSheet, Text, View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import {h1} from 'styles/text';
import Login from '../components/Login';
import Profile from '../components/Profile';

type Props = {};

export default class ProfilePage extends React.Component<Props> {
  render() {
    return (
      <Layout>
        <View>
          <Profile />
        </View>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({});
