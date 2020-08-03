import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import GuideStore from "screens/Guide/GuideStore";
import {GuideFragment} from "api/generated";
import {inject} from "mobx-react";
import SpotItem from "./SpotItem";
import {hairline} from "styles/dimensions";
import {border} from "styles/colors";

type Props = {
  guideStore?: GuideStore
};
type State = {};

@inject('guideStore')
export default class RouteContent extends React.Component<Props, State> {

  get guide(): GuideFragment {
    return this.props.guideStore.guide
  }

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
        <FlatList data={this.guide.spots.nodes}
                  ItemSeparatorComponent={FlatListItemSeparator}
                  renderItem={(item) => {
                    return <SpotItem key={item.item.id} item={item}/>
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
