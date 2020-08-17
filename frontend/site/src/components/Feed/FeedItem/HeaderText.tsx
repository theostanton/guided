import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {FeedEvent, JoinedFeedEvent, NewFollowsFeedEvent, NewGuideFeedEvent, SelfCreatedFeedEvent} from "../FeedEvent";
import {FeedEventType} from "api/generated";
import {h3} from "styles/text";
import {Route} from "utils/navigation/ParamList";
import Link from "components/Link";
import {darkText} from "styles/colors";
import {hairline} from "styles/dimensions";

type HeaderTextItem = HeaderTextLink | HeaderTextText

type HeaderTextLink = {
  type: 'link'
  text: string
  href: string
}
type HeaderTextText = {
  type: 'text'
  text: string
}

function link(text: string, href: string): HeaderTextLink {
  return {
    type: 'link',
    href,
    text
  }
}

function text(text: string): HeaderTextText {
  return {
    type: 'text',
    text
  }
}

function joined(event: JoinedFeedEvent): HeaderTextItem[] {
  return [
    link(event.user.username, Route.user(event.user)),
    text('joined')
  ]
}

function newFollows(event: NewFollowsFeedEvent): HeaderTextItem[] {
  return [
    link(event.user.username, Route.user(event.user)),
    text('started following you')
  ]
}

function newGuide(event: NewGuideFeedEvent): HeaderTextItem[] {
  return [
    link(event.guide.owner, Route.user({
      username: event.guide.owner
    })),
    text('created'),
    link(event.guide.title, Route.guide(event.guide))
  ]
}

function selfCreated(event: SelfCreatedFeedEvent): HeaderTextItem[] {
  return [
    text('You joined')
  ]
}

function generate(event: FeedEvent): HeaderTextItem[] {
  switch (event.type) {
    case FeedEventType.Joined:
      return joined(event)
    case FeedEventType.NewGuide:
      return newGuide(event)
    case FeedEventType.NewFollows:
      return newFollows(event)
    case FeedEventType.SelfCreated:
      return selfCreated(event)
  }
}

export default function ({event}: { event: FeedEvent }) {
  const items = generate(event)

  return <View style={styles.root}>
    {items.map((item, index) => {
      switch (item.type) {
        case "link":
          return <Link key={item.text} textStyle={styles.link} href={item.href}>{item.text}</Link>
        case "text":
          const left = index === 0 ? '' : ' '
          const right = index === items.length - 1 ? '' : ' '
          return <Text key={item.text} style={styles.text}>{left}{item.text}{right}</Text>
      }
    })}

  </View>

}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row'
  },
  text: {
    ...h3
  },
  link: {
    ...h3,
    borderBottomColor: darkText,
    borderBottomWidth: hairline,
  },
})