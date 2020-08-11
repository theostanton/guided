import React from 'react';
import {StyleSheet} from 'react-native';
import {ALlUsersComponent} from "api/generated";
import {subscriptionClient} from "api/client";
import UserList from "../index";
import AuthStore from "stores/AuthStore";
import {inject} from "mobx-react";

type Props = {
  authStore?: AuthStore
};
type State = {};

@inject('authStore')
export default class AllUsersList extends React.Component<Props, State> {
  render() {
    return (
      <ALlUsersComponent
        // @ts-ignore
        client={subscriptionClient}
        variables={{
          self: this.props.authStore.user.username
        }}>
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
