import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GuideStore from "screens/Guide/GuideStore";
import {ModeProps} from "screens/Guide/GuideStore/GuideMode";
import {h1} from "styles/text";
import {inject} from "mobx-react";
import Icon from "components/Icon";
import {icon, quarter, whole} from "styles/dimensions";
import {darkIcon, itemStateColor} from "styles/colors";

export type Props = ModeProps<'SelectSpot'> & {
  onDismiss:()=>void
};
type State = {};

export default class SelectSpotContent extends React.Component<Props, State> {

  renderHeader() {
    return <View style={styles.header}>
      <Icon name={'chevron-left'} color={darkIcon} size={icon} onPress={() => {
        this.props.onDismiss()
      }}/>
      <Icon name={'place'} color={itemStateColor('spot', 'selected')} size={icon}/>
      <Text style={styles.headerTitle}>
        {this.props.params.spot.name}
      </Text>
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
    minHeight: 200,
    padding: whole,
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
