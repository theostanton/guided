import React from 'react';
import {StyleSheet} from 'react-native';
import {ALlUsersComponent} from "api/generated";
import {subscriptionClient} from "api/client";
import UserList from "../index";

type Props = {};
type State = {};

export default class AllUsersList extends React.Component<Props, State> {
  render() {
    return (
      <ALlUsersComponent
        // @ts-ignore
        client={subscriptionClient}>
        {({loading, data, error}) => {
          if (loading) {
            return <UserList users={[]}/>
          } else {
            return <UserList users={data.users.nodes}/>
          }
        }}
      </ALlUsersComponent>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
