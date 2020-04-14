import React, { CSSProperties } from "react"
import { subscriptionClient } from "api/client"
import {
  FeedDocument,
  FeedSubscription, FollowFeedItemFragment,
  GuideFeedItemFragment,
} from "api/generated"
import { ZenObservable } from "zen-observable-ts/lib/types"
import { Message, Segment } from "semantic-ui-react"
import { Feed } from "semantic-ui-react"
import AuthStore from "model/AuthStore"
import NewGuideFeedItem from "./NewGuideFeedItem"
import { inject } from "mobx-react"
import NewFollowFeedItem from "./NewFollowFeedItem"
import { log } from "../../../utils/logger"

type Props = {
  authStore?: AuthStore
}
type State = {
  feedItems: (GuideFeedItemFragment | FollowFeedItemFragment)[] | undefined
}

function isFollowFeedItemFragments(item: any): item is FollowFeedItemFragment {
  if (item["followed"]) {
    return item
  }
}

function isGuideFeedItemFragments(item: any): item is GuideFeedItemFragment {
  if (item["title"]) {
    return item
  }
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
    }).subscribe(value => {
      if (value.data) {

        const newGuides = value!.data!.items!.newGuides!.nodes!.map(node => {
          return node!
        })
        const newFollows = value!.data!.items!.follows!.nodes!.map(node => {
          return node!
        })

        const feedItems: (GuideFeedItemFragment | FollowFeedItemFragment)[] = [
          ...newFollows, ...newGuides,
        ]

        function timeStamp(feedItem: any): number {
          if (isFollowFeedItemFragments(feedItem)) {
            return new Date(feedItem.created).getTime()
          } else if (isGuideFeedItemFragments(feedItem)) {
            return new Date(feedItem.created).getTime()
          } else {
            throw new Error("Couldnt parse")
          }
        }

        feedItems.sort(((a, b) => {
          return timeStamp(b) - timeStamp(a)
        }))

        this.setState({
          feedItems,
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
      height: "400px",
      overflowY: "scroll",
    }

    if (feedItems) {
      const self = this.props.authStore!.owner

      return <Segment style={style}>
        <Feed key={"feed"}>
          {feedItems.map(feedItem => {

            if (isFollowFeedItemFragments(feedItem)) {
              return <NewFollowFeedItem self={self} item={feedItem}/>
            } else if (isGuideFeedItemFragments(feedItem)) {
              return <NewGuideFeedItem item={feedItem} isOwner={self === feedItem.owner.username}/>
            } else {
              return <Message error>Didn't handle feed item</Message>
            }
          })}
        </Feed></Segment>
    } else {
      return <Segment loading style={style}/>
    }
  }
}