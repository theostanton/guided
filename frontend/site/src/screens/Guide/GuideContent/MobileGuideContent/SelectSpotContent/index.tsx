import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GuideStore from "screens/Guide/GuideStore";
import {ModeProps} from "screens/Guide/GuideStore/GuideMode";
import {h1} from "styles/text";
import {inject} from "mobx-react";
import Icon from "../../../../../components/Icon";
import {icon, quarter} from "../../../../../styles/dimensions";
import {darkIcon} from "../../../../../styles/colors";

type Props = ModeProps<'SelectSpot'> & {
  guideStore?: GuideStore
};
type State = {};

@inject('guideStore')
export default class SelectSpotContent extends React.Component<Props, State> {

  renderHeader() {
    return <View style={styles.header}>
      <View>
        <Icon name={'place'} color={'#ff0000'} size={icon}/>
      </View>
      <Text style={styles.headerTitle}>
        {this.props.params.spot.name}
      </Text>
      <View>
        <Icon name={'close'} color={darkIcon} size={icon} onPress={() => {
          this.props.guideStore.clearMode()
        }}/>
      </View>
    </View>
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderHeader()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    height: '200'
  },
  header: {
    flex: 1,
    flexDirection: 'row'
  },
  headerTitle: {
    ...h1,
    flex: 1,
    marginLeft: quarter
  }
});
