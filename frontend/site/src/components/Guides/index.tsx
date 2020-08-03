import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {GuideListItemFragment} from "api/generated";
import GuideListItem from "./GuideListItem";
import {half} from "styles/dimensions";

type Props = {
  guides: readonly GuideListItemFragment[]
};
type State = {};

export default class GuidesList extends React.Component<Props, State> {
  render() {
    const guides = this.props.guides;
    return (
      <View style={styles.root}>
        <FlatList
          data={guides}
          ItemSeparatorComponent={
            () => <View style={{height: half}}/>
          }
          renderItem={(info => {
            return <GuideListItem key={info.item.slug} guide={info.item}/>
          })}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
