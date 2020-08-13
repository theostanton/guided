import React from 'react';
import {StyleSheet} from 'react-native';
import {TabProps} from "utils/navigation/ScreenProps";
import HomeFeed from "../../components/Feed/HomeFeed";

type Props = TabProps

export default class FeedScreen extends React.Component<Props> {

  render() {
    return (
      <HomeFeed/>
    );
  }
}

const styles = StyleSheet.create({});
