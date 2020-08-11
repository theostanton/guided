import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeFeedComponent} from "api/generated";
import Feed from "../index";
import AuthStore from "stores/AuthStore";
import {inject} from "mobx-react";
import client from "api/client";

type Props = {
  authStore?: AuthStore
};
type State = {};

@inject('authStore')
export default class HomeFeed extends React.Component<Props, State> {
  render() {
    console.log('HomeFeed this.props.authStore.user.username=',this.props.authStore.user.username)
    return (
      <HomeFeedComponent
        // @ts-ignore
        client={client}
        variables={{
          self: this.props.authStore.user.username
        }}>
        {({loading, data, error}) => {
          if (loading) {
            // return <Feed feedEvents={[]}/>
            return <View><Text>Loading..</Text></View>

          } else {
            const feedEvents = data.feed.nodes
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
