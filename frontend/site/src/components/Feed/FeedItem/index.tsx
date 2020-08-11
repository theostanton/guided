import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FeedEvent} from "../FeedEvent";
import {h5} from "styles/text";
import {FeedEventType} from "api/generated";
import JoinedFeedItem from "./JoinedFeedItem";
import SelfCreatedFeedItem from "./SelfCreatedFeedItem";
import {humanElapsed} from "utils/human";
import Icon from "components/Icon";
import {eighth, half} from "styles/dimensions";
import HeaderText from "./HeaderText";
import {card, divider} from "../../../styles";
import NewGuideFeedItem from "./NewGuideFeedItem";
import {IconName} from "../../Icon/names";

type Props = {
  event: FeedEvent
};
type State = {};

const icon: { [eventType in FeedEventType]: IconName } = {
  [FeedEventType.Joined]: 'child-care',
  [FeedEventType.NewFollows]: 'arrow-back',
  [FeedEventType.SelfCreated]: 'child-friendly',
  [FeedEventType.NewGuide]: 'book'
}

export default class FeedItem extends React.Component<Props, State> {

  renderHeader() {
    return <View style={styles.header}>
      <View style={styles.icon}>
        <Icon name={icon[this.props.event.type]} size={22}/>
      </View>
      <View style={styles.headerText}>
        <View style={styles.headerTitle}>
          <HeaderText event={this.props.event}/>
        </View>
        <Text style={styles.headerSubtitle}>{humanElapsed(new Date(this.props.event.timestamp))}</Text>
      </View>
    </View>
  }

  renderContent() {
    const event = this.props.event
    switch (event.type) {
      case FeedEventType.Joined:
        return JoinedFeedItem(event)
      case FeedEventType.SelfCreated:
        return SelfCreatedFeedItem(event)
      case FeedEventType.NewGuide:
        return NewGuideFeedItem(event)
      default:
        return null
    }
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    ...card,
    flexDirection: 'column'
  },
  header: {
    padding: half,
    flexDirection: 'row',
  },
  icon: {
    padding: half,
    justifyContent: 'center',
    alignContent: 'center'
  },
  headerText: {
    flexDirection: 'column',
    flex: 1
  },
  headerTitle: {
    flex: 1,
    paddingBottom: eighth,
  },
  headerSubtitle: {
    ...h5,
    paddingTop: eighth,
    flex: 1,
  },
  contentDivider: {
    ...divider,
    marginTop: half,
    marginBottom: half
  }
});
