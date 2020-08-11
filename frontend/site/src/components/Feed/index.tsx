import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {eight, half, whole} from "styles/dimensions";
import {divider} from "../../styles";
import {h2} from "../../styles/text";
import {FeedEvent} from "./FeedEvent";
import FeedItem from "./FeedItem";

type Props = {
  feedEvents: readonly FeedEvent[]
};
type State = {};

export default class Feed extends React.Component<Props, State> {

  renderItem(info: ListRenderItemInfo<FeedEvent>) {
    return <FeedItem event={info.item}/>
  }

  render() {
    return (
      <View style={styles.root}>
        <FlatList data={this.props.feedEvents}
                  renderItem={this.renderItem.bind(this)}
                  contentContainerStyle={styles.content}
                  ItemSeparatorComponent={() => {
                    return <View style={{height: whole}}/>
                  }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 400,
    height:'100%',
    overflow:'scroll'
  },
  content: {
    paddingBottom:whole,
    paddingTop:whole
  },
  header: {},
  divider: {
    ...divider,
    marginLeft: whole,
    marginRight: whole,
  },
  title: {
    ...h2,
    paddingTop: half,
    paddingBottom: half,
    paddingLeft: whole,
    paddingRight: whole,
  }
});
