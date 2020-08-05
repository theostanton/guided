import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {GuideFragment} from "api/generated";
import GuideListItem from "./GuideListItem";
import {half, whole} from "styles/dimensions";

type Props = {
  guides: readonly GuideFragment[]
};
type State = {};

export default class GuidesList extends React.Component<Props, State> {
  render() {
    const guides = this.props.guides;
    return (
      <View style={styles.root}>
        <FlatList
          data={guides}
          renderItem={(info => {
            return <GuideListItem key={info.item.slug} guide={info.item}/>
          })}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    padding: whole
  },
});
