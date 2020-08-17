import React from 'react';
import {StyleSheet} from 'react-native';
import {AllUsersComponent} from "api/generated";
import {subscriptionClient} from "api/client";
import UserList from "../index";
import {assertMaybes} from "utils";

type Props = {
  self: string
};
type State = {};

export default class AllUsersList extends React.Component<Props, State> {
  render() {
    return (
      <AllUsersComponent
        // @ts-ignore
        client={subscriptionClient}
        variables={{
          self: this.props.self
        }}>
        {({loading, data, error}) => {
          if (loading) {
            return <UserList users={[]}/>
          } else {
            return <UserList users={data!.users!.nodes.map(assertMaybes())}/>
          }
        }}
      </AllUsersComponent>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
