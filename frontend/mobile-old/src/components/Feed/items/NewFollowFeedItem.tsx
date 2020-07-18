import React from "react"
import { FeedEventFragment } from "api/generated"
import { View, StyleSheet } from "react-native"
import FeedItemContainer, { HeaderText } from "./FeedItemContainer"

type NewFollowFeedEvent = Pick<FeedEventFragment, "timestamp" | "user">

type Props = {
  event: NewFollowFeedEvent
}

export default class NewFollowFeedItem extends React.Component<Props> {

  headerTitle(): HeaderText[] {
    const { user } = this.props.event
    return [
      {
        text: user!.username,
        onClick: (navigation) => {
          navigation.navigate("Profile", {
            username: user!.username,
          })
        },
      },
      {
        text: " started following you",
      },
    ]
  }

  render() {
    return <View>
      <FeedItemContainer
        title={this.headerTitle()}
        icon={"user"}
        event={this.props.event}>
      </FeedItemContainer>
    </View>
  }
}


const styles = StyleSheet.create({
    labels: {
      flexDirection: "row",
    },
  },
)