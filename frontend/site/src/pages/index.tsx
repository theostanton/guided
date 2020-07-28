import {StyleSheet, Text, View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import HomeScreen from '../screens/Home';
import {webRouter} from '../utils/router/WebRouter';

export default function App(props) {
  return (
    <Layout>
      <View>
        <HomeScreen params={{}} router={webRouter}/>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({});
