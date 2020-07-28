import {StyleSheet} from 'react-native';
import React from 'react';
import {ScreenProp} from '../utils/router/ScreenProp';
import Signup from '../components/Signup';
import AppRouter from '../utils/router/AppRouter';

type Props = ScreenProp<'Signup'>

export default class SignupScreen extends React.Component<Props> {
  render() {
    return (
      <Signup router={AppRouter.create(this.props.navigation)}/>
    );
  }
}

const styles = StyleSheet.create({});
