import FeedStore from "model/FeedStore"
import { observer } from "mobx-react"
import { FlatList, Text } from "react-native"
import { FeedEventFragment, FeedEventType } from "api/generated"
import React from "react"
import NewGuideFeedItem from "./items/NewGuideFeedItem"

type Props = {
  feedStore: FeedStore
}

@observer
export default class FeedList extends React.Component<Props> {


  renderItem(feedEvent: FeedEventFragment): React.ReactElement {
    switch (feedEvent.type) {
      case FeedEventType.NewGuide:
        return <NewGuideFeedItem event={feedEvent}/>
      case FeedEventType.NewFollows:
      // return <NewFollowFeedItem event={feedEvent}/>
      case FeedEventType.SelfCreated:
      // return <AccountCreatedFeedItem event={feedEvent}/>
    }
    return <Text>No handler for {feedEvent.type}</Text>
  }

  render() {
    return <FlatList data={this.props.feedStore.feedEvents} renderItem={(item) => {
      return this.renderItem(item.item)
    }
    }/>
  }

}