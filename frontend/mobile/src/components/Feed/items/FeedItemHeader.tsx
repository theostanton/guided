import { FeedEventFragment } from "api/generated"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { half, quarter } from "utils/dimensions"
import { lightGrey } from "styles/colors"
import { h1, h3 } from "styles/text"
import Icon from "components/Icon"

type HeaderFeedEvent = Pick<FeedEventFragment, "timestamp" | "user">

type Props = {
  title: string
  subtitle?: string
  event: HeaderFeedEvent
}

export default class FeedItemHeader extends React.Component<Props> {

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        padding: half,
        borderBottomColor: lightGrey,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      icon: {
        flexBasis: "auto",
        margin: quarter,
      },
      text: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
      },
      title: {
        ...h1,
      },
      subtitle: {
        ...h3,
      },
    })

    const { title, subtitle } = this.props

    return <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name={"user"}/>
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>subtitle</Text>}
      </View>
    </View>
  }
}