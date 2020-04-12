import React from "react"
import { subscriptionClient } from "api/client"
import {
  FeedDocument,
  FeedSubscription,
  GuideFeedItemFragment,
  GuideStagesDocument,
} from "api/generated"
import { ZenObservable } from "zen-observable-ts/lib/types"
import { Segment } from "semantic-ui-react"
import { Feed } from "semantic-ui-react"
import NewGuideFeedItem from "./NewGuideFeedItem"

type Props = {}
type State = {
  feedItems: {
    newGuides: GuideFeedItemFragment[]
  } | undefined
}

export default class FeedComponent extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      feedItems: undefined,
    }
  }

  #subscription: ZenObservable.Subscription | undefined

  componentDidMount(): void {
    this.#subscription = subscriptionClient.subscribe<FeedSubscription>({
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
    this.#subscription?.unsubscribe()
  }

  render(): React.ReactElement {
    const feedItems = this.state.feedItems

    if (feedItems) {
      return <Segment><Feed key={"feed"} >
        {feedItems.newGuides.map(guide => {
          return <NewGuideFeedItem item={guide}/>
        })}
      </Feed></Segment>
    } else {
      return <Segment loading/>
    }
  }
}