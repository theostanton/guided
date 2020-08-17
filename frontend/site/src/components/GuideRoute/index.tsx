import React from 'react'
import {FlatList, ListRenderItemInfo, View} from "react-native";
import {hairline} from "styles/dimensions";
import {border} from "styles/colors";
import SpotItem, {SpotItemSpot} from "./SpotItem";

export type Props = {
  spots: readonly SpotItemSpot[]
  selectedSpotId: string | undefined
  selectSpot: (spotId: string) => void
}

export default class GuideRoute extends React.Component<Props> {
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

    return <FlatList data={this.props.spots}
                     ItemSeparatorComponent={FlatListItemSeparator}
                     renderItem={(info: ListRenderItemInfo<SpotItemSpot>) => {
                       return <SpotItem
                         key={info.item.id}
                         spot={info.item}
                         isSelected={this.props.selectedSpotId === info.item.id}
                         selectSpot={(spotId => this.props.selectSpot(spotId))}/>
                     }}/>
  }
}