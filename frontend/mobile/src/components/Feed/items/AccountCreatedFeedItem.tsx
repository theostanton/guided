import React from "react"
import { FeedEventFragment } from "api/generated"
import { View, StyleSheet } from "react-native"
import FeedItemContainer, { HeaderText } from "./FeedItemContainer"

type AccountCreatedFeedEvent = Pick<FeedEventFragment, "timestamp">

type Props = {
  event: AccountCreatedFeedEvent
}

export default class AccountCreatedFeedItem extends React.Component<Props> {

  headerTitle(): HeaderText[] {
    return [{
      text: "You created an account",
    },
    ]
  }

  render() {
    return <View>
      <FeedItemContainer
        title={this.headerTitle()}
        icon={"joined"}
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