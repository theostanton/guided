import React from "react"
import { FeedEventFragment } from "api/generated"
import { View, Text } from "react-native"
import FeedItemHeader from "./FeedItemHeader"

type NewGuideFeedEvent = Pick<FeedEventFragment, "timestamp" | "guide" | "user">

type Props = {
  event: NewGuideFeedEvent
}

export default class NewGuideFeedItem extends React.Component<Props> {

  render() {
    return <View>
      <FeedItemHeader title={"Some title"} event={this.props.event}/>
      <Text>Some text</Text>
    </View>
  }
}