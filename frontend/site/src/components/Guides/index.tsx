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
    const guides: GuideListItemFragment[] = []
    return (
      <View style={styles.root}>
        <Text>{guides.length} guides</Text>
        {guides && <FlatList
          data={this.props.guides}
          ItemSeparatorComponent={
            () => <View style={{height: half}}/>
          }
          renderItem={(info => {
            console.log('info', info)
            return <GuideListItem key={info.item.slug} guide={info.item}/>
          })}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
