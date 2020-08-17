import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeFeedComponent} from "api/generated";
import Feed from "../index";
import client from "api/client";
import {assertMaybes} from "../../../utils";
import {mapFeedEventFragment} from "../FeedEvent";
import Activity from "../../Activity";

type Props = {
  self: string
};
type State = {};

export default class HomeFeed extends React.Component<Props, State> {
  render() {
    return (
      <HomeFeedComponent
        // @ts-ignore
        client={client}
        variables={{
          self: this.props.self
        }}>
        {({loading, data, error}) => {
          if (loading) {
            return <Activity/>

          } else if (error) {
            console.log('error', error.message)
            return <View><Text>error:{error.message}</Text></View>
          } else {
            const feedEvents = data!.feed.nodes.map(assertMaybes()).map(mapFeedEventFragment)
            return <Feed feedEvents={feedEvents}/>
          }
        }}
      </HomeFeedComponent>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
