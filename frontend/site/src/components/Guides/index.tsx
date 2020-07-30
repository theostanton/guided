import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {GuideListItemFragment} from "api/generated";
import GuideListItem from "./GuideListItem";
import {half} from "styles/dimensions";
import Router from "utils/router";
import {inject} from "mobx-react";

type Props = {
  guides: readonly GuideListItemFragment[]
  router?:Router
};
type State = {};

@inject('router')
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
            console.log('info',info)
            return <GuideListItem key={info.item.slug} guide={info.item} router={this.props.router}/>
          })}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
