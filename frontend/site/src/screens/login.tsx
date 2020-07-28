import {StyleSheet, Text, View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import {h1} from 'styles/text';
import Login from 'components/Login';
import {NavigationProp} from '@react-navigation/core';
import {ScreenProp} from '../utils/router/ScreenProp';
import AppRouter from '../utils/router/AppRouter';

type Props = ScreenProp<"Login">

export default class LoginScreen extends React.Component<Props> {
  render() {
    return (
        <View>
          <Login router={AppRouter.create(this.props.navigation)}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({});
