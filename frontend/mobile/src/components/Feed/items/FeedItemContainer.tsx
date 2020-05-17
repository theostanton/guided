import { FeedEventFragment } from "api/generated"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { gutter, half, quarter } from "utils/dimensions"
import { lightGrey, white } from "styles/colors"
import { h1, h2, h3, a } from "styles/text"
import Icon, { IconName } from "components/Icon"
import { useNavigation } from "@react-navigation/native"
import { NavigationProp } from "@react-navigation/core/lib/typescript/src/types"
import { ScreenParams } from "screens"

type HeaderFeedEvent = Pick<FeedEventFragment, "timestamp" | "user">

type Props = {
  icon: IconName
  title: HeaderText[]
  subtitle?: React.ReactElement
  event: HeaderFeedEvent
}

export type HeaderText = {
  text: string,
  onClick?: (navigation: NavigationProp<ScreenParams>) => void
}

function HeaderTitle({ texts }: { texts: HeaderText[] }) {
  const navigation = useNavigation<NavigationProp<ScreenParams>>()
  return <View style={styles.title}>{texts.map(({ text, onClick }) => {
    if (onClick) {
      return <Text style={styles.titleLink} onPress={() => {
        onClick(navigation)
      }}>{text}</Text>
    } else {
      return <Text style={styles.titleText}>{text}</Text>
    }
  })}</View>
}

export default class FeedItemContainer extends React.Component<Props> {

  render() {

    const { title, subtitle } = this.props

    return <View style={styles.container}>
      <View style={styles.left}>
        <Icon name={this.props.icon}/>
      </View>
      <View style={styles.right}>
        <View style={styles.header}>
          <HeaderTitle texts={this.props.title}/>
          {subtitle && <Text style={styles.subtitle}>subtitle</Text>}
        </View>
        <View style={styles.contents}>
          {this.props.children}
        </View>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: half,
    borderBottomColor: lightGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: white,
  },
  left: {
    flexBasis: "auto",
    width: gutter,
    alignItems:'center',
    padding: quarter,
  },
  right: {
    flex: 1,
    marginLeft: half,
  },
  header: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    flexDirection: "row",
  },
  titleText: {
    ...h2,
  },
  titleLink: {
    ...h2,
    ...a,
  },
  subtitle: {
    ...h3,
  },
  contents: {
    paddingTop: quarter,
  },
});