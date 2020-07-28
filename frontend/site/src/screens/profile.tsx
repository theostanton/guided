import {ScreenProp} from '../utils/router/ScreenProp';
import {inject, observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Profile from '../components/Profile';

type Props = ScreenProp<"Profile">

@inject("authStore")
@observer
export default class ProfileScreen extends React.Component<Props> {
  render() {
    return (
      <Profile {...this.props.params}/>
    );
  }
}

const styles = StyleSheet.create({});