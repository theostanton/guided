import {StyleSheet, Text, View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import {h1} from 'styles/text';

export default function App(props) {
  return (
    <Layout>
      <View>
        <Text style={h1}>Some content</Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({});
