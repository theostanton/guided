import React from "react"
import { FeedEventFragment } from "api/generated"
import { View, Text, StyleSheet } from "react-native"
import FeedItemContainer, { HeaderText } from "./FeedItemContainer"
import Label from "../../Label"
import { humanDistance, humanDuration } from "../../../utils/human"

type NewGuideFeedEvent = Pick<FeedEventFragment, "timestamp" | "guide" | "user">

type Props = {
  event: NewGuideFeedEvent
}

export default class NewGuideFeedItem extends React.Component<Props> {

  headerTitle(): HeaderText[] {
    const { user, guide } = this.props.event
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
        text: " created ",
      },
      {
        text: guide!.title,
        onClick: (navigation) => {
          navigation.navigate("Guide", {
            guideId: guide!.id,
          })
        },
      },
    ]
  }

  render() {
    const guide = this.props.event.guide!
    return <View>
      <FeedItemContainer
        title={this.headerTitle()}
        icon={"guide"}
        event={this.props.event}>
        <View style={styles.labels}>
          <Label icon={"distance"}>{humanDistance(guide.distanceMeters, true,true)}</Label>
          <Label icon={"duration"}>{humanDuration(guide.durationSeconds,true)}</Label>
        </View>
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