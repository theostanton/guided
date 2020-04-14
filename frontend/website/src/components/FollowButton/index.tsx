import { inject, observer } from "mobx-react"
import { ReactElement } from "react"
import {
  FollowingStatus,
  FollowUserDocument,
  FollowUserMutation,
  UnfollowUserDocument,
  UnfollowUserMutation,
} from "api/generated"
import { Button } from "semantic-ui-react"
import { navigate } from "@reach/router"
import client from "../../api/client"
import AuthStore from "model/AuthStore"
import { logError } from "../../utils/logger"
import * as React from "react"

type Props = {
  authStore?: AuthStore
  username: string
  followingStatus: FollowingStatus
  onChange: () => Promise<void>
}

type State = {
  loading: boolean
  error: string | undefined
}

@inject("authStore")
@observer
export default class FollowButton extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: undefined,
    }
  }

  render(): ReactElement {

    const followingStatus = this.props.followingStatus

    switch (followingStatus) {
      case FollowingStatus.Anonymous:
        return <Button color={"olive"} fluid onClick={async () => {
          await navigate("/login")
        }
        }>Log in to follow</Button>
      case FollowingStatus.Following:
        return <Button color={"olive"} fluid loading={this.state.loading} onClick={async () => {
          this.setState({
            loading: true,
          })
          const result = await client.mutate<UnfollowUserMutation>({
            mutation: UnfollowUserDocument,
            variables: {
              username: this.props.username,
            },
          })
          if (result.errors && result.errors.length > 0) {
            result.errors.forEach(error => {
              logError(error.message)
            })
          } else if (result.data) {
            if (result.data.unfollow.success) {
              await this.props.onChange()
              this.setState({
                loading: false,
              })
            } else {
              this.setState({
                loading: false,
                error: result.data.unfollow.message,
              })
              logError(result.data.unfollow.message)
            }
          }
        }
        }>Unfollow</Button>
      case FollowingStatus.NotFollowing:
        return <Button color={"olive"} fluid loading={this.state.loading} onClick={async () => {
          this.setState({
            loading: true,
          })
          const result = await client.mutate<FollowUserMutation>({
            mutation: FollowUserDocument,
            variables: {
              username: this.props.username,
            },
          })
          if (result.errors && result.errors.length > 0) {
            result.errors.forEach(error => {
              logError(error.message)
            })
          } else if (result.data) {
            if (result.data.follow.success) {
              await this.props.onChange()
              this.setState({
                loading: false,
              })
            } else {
              this.setState({
                loading: false,
                error: result.data.follow.message,
              })
              logError(result.data.follow.message)
            }
          }
        }
        }>Follow</Button>
      case FollowingStatus.IsSelf:
        return
    }

  }

}