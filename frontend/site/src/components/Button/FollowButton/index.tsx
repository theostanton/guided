import React from 'react';
import {StyleSheet} from 'react-native'
import {inject, observer} from "mobx-react";
import FollowingStore from "stores/FollowingStore";
import Button from "../index";
import client from "../../../api/client";
import {
  FollowDocument,
  FollowMutation,
  UnfollowDocument,
  UnfollowMutation,
  UnfollowMutationVariables
} from "api/generated";

type Props = {
  followingStore?: FollowingStore
  username: string
}
type State = {
  loading: boolean
};

@inject('followingStore')
@observer
export default class FollowButton extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  async follow(): Promise<void> {
    this.setState({loading: true})
    const variables: UnfollowMutationVariables = {
      username: this.props.username
    }
    const response = await client.mutate<FollowMutation>({
      mutation: FollowDocument,
      variables
    })
    console.log('follow message=', response.data!.followUser.message)
    this.setState({
      loading: false
    })
    this.props.followingStore!.subscribe()
  }

  async unfollow(): Promise<void> {
    this.setState({loading: true})
    const variables: UnfollowMutationVariables = {
      username: this.props.username
    }
    const response = await client.mutate<UnfollowMutation>({
      mutation: UnfollowDocument,
      variables
    })
    console.log('unfollow message=', response.data!.unfollowUser.message)
    this.setState({
      loading: false
    })
    this.props.followingStore!.subscribe()
  }

  render() {
    if (!this.props.followingStore!.following) {
      return <Button label={'Loading...'} onPress={() => {
      }}/>
    }
    const isFollowing = this.props.followingStore!.following.some(value => {
      return value.username === this.props.username
    })
    const label = isFollowing ? "Unfollow" : "Follow"
    const onPress = isFollowing ? this.unfollow : this.follow
    return (
      <Button label={label} onPress={onPress.bind(this)} disabled={this.state.loading}/>
    );
  }
}
const styles = StyleSheet.create({
  root: {},
});
