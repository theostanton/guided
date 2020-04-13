import React, { CSSProperties } from "react"
import { subscriptionClient } from "api/client"
import {
  FeedDocument,
  FeedSubscription,
  GuideFeedItemFragment,
} from "api/generated"
import { ZenObservable } from "zen-observable-ts/lib/types"
import { Segment } from "semantic-ui-react"
import { Feed } from "semantic-ui-react"
import AuthStore from "model/AuthStore"
import NewGuideFeedItem from "./NewGuideFeedItem"
import { inject } from "mobx-react"

type Props = {
  authStore?: AuthStore
}
type State = {
  feedItems: {
    newGuides: GuideFeedItemFragment[]
  } | undefined
}

@inject("authStore")
export default class FeedComponent extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      feedItems: undefined,
    }
  }

  subscription: ZenObservable.Subscription | undefined

  componentDidMount(): void {
    this.subscription = subscriptionClient.subscribe<FeedSubscription>({
      query: FeedDocument,
      fetchPolicy: "network-only",
    }).subscribe(value => {
      if (value.data) {
        this.setState({
          feedItems: {
            newGuides: value!.data!.items!.newGuides!.nodes!.map(node => {
              return node!
            }),
          },
        })
      } else {
        value.errors.forEach(error => {
          console.error(error)
        })
      }
    })
  }

  componentWillUnmount(): void {
    this.subscription?.unsubscribe()
  }

  render(): React.ReactElement {
    const feedItems = this.state.feedItems

    const style: CSSProperties = {
      height: "500px",
      overflowY: "scroll",
    }

    if (feedItems) {
      return <Segment style={style}>
        <Feed key={"feed"}>
          {feedItems.newGuides.map(guide => {
            return <NewGuideFeedItem item={guide} isOwner={this.props.authStore!.owner === guide.owner.username}/>
          })}
        </Feed></Segment>
    } else {
      return <Segment loading style={style}/>
    }
  }
}