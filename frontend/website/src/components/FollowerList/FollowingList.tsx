import * as React from "react"
import { Card, Icon, Message, Segment, Statistic, StatisticGroup } from "semantic-ui-react"
import { subscriptionClient } from "api/client"
import { FollowersDocument, FollowersSubscription, FollowingDocument, UserInfoFragment } from "api/generated"
import exp from "constants"
import { logJson } from "../../utils/logger"
import { navigate } from "@reach/router"
import { humanDistance } from "../../utils/human"

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

      function stats(user: UserInfoFragment): React.ReactElement {
        const items: { label: string, value: string | number }[] = [
          {
            label: "Following",
            value: user.following.totalCount,
          },
          {
            label: "Followers",
            value: user.followers.totalCount,
          },
          {
            label: "Rides",
            value: user.rides.totalCount,
          },
        ]
        return <StatisticGroup size={"mini"} widths={3}>
          {items.map(item => {
            return <Statistic label={item.label} value={item.value}/>
          })}
        </StatisticGroup>
      }


      const cards = followers.map(user => {

        return <Card fluid onClick={async () => {
          await navigate(`/${user.username}`)
        }}>
          <Card.Content>
            <Card.Header>
              <Icon
                name={"user"}
                color={user.colour?.toLowerCase()}
                floated='right'
              />{user.username}</Card.Header>
          </Card.Content>
          <Card.Content>
            {stats(user)}
          </Card.Content>
        </Card>
      })
      return <Card.Group children={cards}/>
    } else if (followers) {
      return <Message>No followers</Message>
    }
  }
}