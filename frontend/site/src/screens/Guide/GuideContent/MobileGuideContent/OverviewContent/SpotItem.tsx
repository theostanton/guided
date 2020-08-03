import React from 'react';
import {ListRenderItemInfo, StyleSheet, Text, View} from 'react-native';
import {SpotFragment} from "api/generated";
import {h3} from "styles/text";
import {quarter} from "styles/dimensions";
import LabelledText from "components/LabelledText";
import Pressable from "components/Pressable";
import GuideStore from "screens/Guide/GuideStore";
import {inject} from "mobx-react";

type Props = {
  guideStore?: GuideStore
  item: ListRenderItemInfo<SpotFragment>
};
type State = {};

@inject('guideStore')
export default class SpotItem extends React.Component<Props, State> {
  render() {
    const spot = this.props.item.item
    return <Pressable onPress={() => {
      this.props.guideStore.updateMode('SelectSpot', {
        spot
      })
    }}>
      <View style={styles.root}>
        <Text style={styles.title}>{spot.name}</Text>
        <LabelledText label={'Nights'}>{spot.nights}</LabelledText>
      </View>
    </Pressable>
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    paddingTop: quarter
  },
  title: {
    ...h3
  }
});
