import * as React from "react"
import { Card, Icon, Message, Segment, Statistic, StatisticGroup } from "semantic-ui-react"
import { subscriptionClient } from "api/client"
import { FollowersDocument, FollowersSubscription, FollowingDocument, UserInfoFragment } from "api/generated"
import exp from "constants"
import { logJson } from "../../utils/logger"
import { navigate } from "@reach/router"
import { humanDistance } from "../../utils/human"
import UserItem from "../items/UserItem"

export type Type = "followers" | "following"

type Props = {
  username: string
  type: Type
}
type State = {
  error: string | undefined
  followers: UserInfoFragment[] | undefined
}

export default class FollowingList extends React.Component<Props, State> {

  private subscription: ZenObservable.Subscription

  constructor(props) {
    super(props)
    this.state = {
      followers: undefined,
      error: undefined,
    }
  }

  subscribe() {

    let observable

    switch (this.props.type) {
      case "followers":
        observable = subscriptionClient.subscribe<FollowersSubscription>({
          query: FollowersDocument,
          variables: {
            username: this.props.username,
          },
        })
        break
      case "following":
        observable = subscriptionClient.subscribe<FollowersSubscription>({
          query: FollowingDocument,
          variables: {
            username: this.props.username,
          },
        })
        break
    }
    this.subscription = observable.subscribe(value => {
      if (value.data) {
        this.setState({
          followers: value.data.follows.nodes.map(node => {
            return node.user
          }),
          error: undefined,
        })
      } else if (value.errors && value.errors.length > 0) {
        this.setState({
          error: value.errors.map(error => {
            return error.message
          }).join("\n"),
        })
      }
    })

  }

  componentDidMount(): void {
    this.subscribe()
  }

  componentWillUnmount(): void {
    this.subscription?.unsubscribe()
  }

  render(): React.ReactElement {

    const { followers, error } = this.state

    if (error) {
      return <Message error>{error}</Message>
    } else if (!followers) {
      return <Segment loading/>
    } else if (followers.length > 0) {


      const cards = followers.map(user => {

        return <UserItem user={user}/>
      })
      return <Card.Group children={cards}/>
    } else if (followers) {
      return <Message>No followers</Message>
    }
  }
}