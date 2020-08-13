import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeFeedComponent} from "api/generated";
import Feed from "../index";
import AuthStore from "stores/AuthStore";
import {inject} from "mobx-react";
import client from "api/client";
import {assertMaybes} from "../../../utils";
import {mapFeedEventFragment} from "../FeedEvent";

type Props = {
  authStore?: AuthStore
};
type State = {};

@inject('authStore')
export default class HomeFeed extends React.Component<Props, State> {
  render() {
    console.log('HomeFeed this.props.authStore.user.username=', this.props.authStore!.user!.username)
    return (
      <HomeFeedComponent
        // @ts-ignore
        client={client}
        variables={{
          self: this.props.authStore!.user!.username!
        }}>
        {({loading, data, error}) => {
          if (loading) {
            // return <Feed feedEvents={[]}/>
            return <View><Text>Loading..</Text></View>

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
