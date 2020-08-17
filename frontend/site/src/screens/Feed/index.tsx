import React from 'react';
import {StyleSheet} from 'react-native';
import {TabProps} from "utils/navigation/ScreenProps";
import HomeFeed from "../../components/Feed/HomeFeed";
import {inject} from "mobx-react";

type Props = TabProps

@inject('authStore')
export default class FeedScreen extends React.Component<Props> {

  render() {
    return <HomeFeed self={this.props.authStore!.user!.username!}/>
  }
}

const styles = StyleSheet.create({});
