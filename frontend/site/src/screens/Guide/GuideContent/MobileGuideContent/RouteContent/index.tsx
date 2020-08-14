import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import SpotItem, {SpotItemSpot} from "./SpotItem";
import {hairline} from "styles/dimensions";
import {border} from "styles/colors";

export type Props = {
  spots: SpotItemSpot[]
  selectSpot: (spotId: string) => void
};
type State = {};

export default class RouteContent extends React.Component<Props, State> {

  render() {
    const FlatListItemSeparator = () => {
      return (
        <View
          style={{
            height: hairline,
            marginLeft: '15%',
            width: "100%",
            backgroundColor: border,
          }}
        />
      );
    }

    return (
      <View style={styles.root}>
        <FlatList data={this.props.spots}
                  ItemSeparatorComponent={FlatListItemSeparator}
                  renderItem={(info: ListRenderItemInfo<SpotItemSpot>) => {
                    return <SpotItem key={info.item.id} spot={info.item} selectSpot={this.props.selectSpot}/>
                  }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    height: 200
  },
});
