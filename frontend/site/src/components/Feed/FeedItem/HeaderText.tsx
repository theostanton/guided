import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {
  FeedEvent,
  FeedEventBase,
  JoinedFeedEvent,
  NewFollowsFeedEvent,
  NewGuideFeedEvent,
  SelfCreatedFeedEvent
} from "../FeedEvent";
import {FeedEventType} from "api/generated";
import {h3} from "../../../styles/text";
import {Route} from "../../../utils/navigation/ParamList";
import Link from "../../Link";
import {darkText} from "../../../styles/colors";
import {hairline} from "../../../styles/dimensions";

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

function JOINED(event: JoinedFeedEvent): HeaderTextItem[] {
  return [
    link(event.user.username, Route.user(event.user)),
    text('joined')
  ]
}

function NEW_FOLLOWS(event: NewFollowsFeedEvent): HeaderTextItem[] {
  return [
    link(event.user.username, Route.user(event.user)),
    text('started following you')
  ]
}

function NEW_GUIDE(event: NewGuideFeedEvent): HeaderTextItem[] {
  return [
    link(event.user.username, Route.user(event.user)),
    text('created'),
    link(event.guide.title, Route.guide(event.guide))
  ]
}

function SELF_CREATED(event: SelfCreatedFeedEvent): HeaderTextItem[] {
  return [
    text('You joined')
  ]
}

const generators: { [Type in FeedEventType]: (event: FeedEventBase<Type>) => HeaderTextItem[] } = {
  JOINED, NEW_FOLLOWS, NEW_GUIDE, SELF_CREATED
}

function generate(event: FeedEvent): HeaderTextItem[] {
  //TODO can prolly avoid this
  // generators[event.type](event) without the switches fails linting tho
  switch (event.type) {
    case FeedEventType.Joined:
      return generators[event.type](event)
    case FeedEventType.NewGuide:
      return generators[event.type](event)
    case FeedEventType.NewFollows:
      return generators[event.type](event)
    case FeedEventType.SelfCreated:
      return generators[event.type](event)
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