import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {GuideFragment} from "api/generated";
import GuideListItem from "./GuideListItem";
import {half, whole} from "styles/dimensions";

type Props = {
  guides: readonly GuideFragment[]
  numColumns: number
};
type State = {};

export default class GuidesList extends React.Component<Props, State> {

  renderItem(info: ListRenderItemInfo<GuideFragment>) {
    let style
    if (this.props.numColumns === 1) {
      style = styles.item
    } else if (info.index % 2 == 0) {
      style = styles.itemLeft
    } else {
      style = styles.itemRight
    }
    return <View style={style} key={info.item.slug}>
      <GuideListItem guide={info.item}/>
    </View>
  }

  render() {
    const guides = this.props.guides;
    return (
      <FlatList
        data={guides}
        numColumns={this.props.numColumns}
        renderItem={this.renderItem.bind(this)}/>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginBottom: whole,
  },
  itemLeft: {
    flex: 0.5,
    marginRight: half,
    marginBottom: whole,
  },
  itemRight: {
    flex: 0.5,
    marginLeft: half,
    marginBottom: whole,
  },
});
