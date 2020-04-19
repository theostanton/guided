import { Feed, Segment } from "semantic-ui-react"
import React, { CSSProperties } from "react"
import { observer } from "mobx-react"
import FeedStore from "model/FeedStore"
import { FeedEventType } from "api/generated"
import NewGuideFeedItem from "./NewGuideFeedItem"
import NewFollowFeedItem from "./NewFollowFeedItem"
import AuthStore from "model/AuthStore"
import AccountCreatedFeedItem from "./AccountCreatedFeedItem"

type Props = {
  feedStore: FeedStore,
  authstore: AuthStore
}

type State = {}

@observer
export default class FeedComponent extends React.Component<Props, State> {

  get feedStore(): FeedStore {
    return this.props.feedStore!
  }

  componentDidMount(): void {
    this.feedStore.subscribe(this.props.authstore.owner)
  }

  componentWillUnmount(): void {
    this.feedStore.unsubscribe()
  }

  feedItems(): React.ReactElement[] {
    return this.props.feedStore.feedEvents.map(feedEvent => {
      switch (feedEvent.type) {
        case FeedEventType.NewGuide:
          return <NewGuideFeedItem event={feedEvent}/>
        case FeedEventType.NewFollows:
          return <NewFollowFeedItem event={feedEvent}/>
        case FeedEventType.SelfCreated:
          return <AccountCreatedFeedItem event={feedEvent}/>
      }
    })
  }

  render(): React.ReactElement {

    const style: CSSProperties = {
      height: "400px",
      overflowY: "scroll",
    }

    return <Segment style={style} loading={!this.feedStore.feedEvents}>
      <Feed>
        {this.feedStore.feedEvents && this.feedItems()}
      </Feed>
    </Segment>
  }
}