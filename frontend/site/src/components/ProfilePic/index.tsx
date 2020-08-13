import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Color, primary} from "../../styles/colors";
import Icon from "../Icon";
import {icon} from "../../styles/dimensions";

export type Props = {
  color: Color | undefined
};
type State = {};

export default class ProfilePic extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.root}>
        <Icon name={'person'} color={this.props.color || primary} size={icon}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
    margin: 0,
    padding: 0
  },
  image: {
    flexGrow: 1,
    aspectRatio: 1,
    backgroundColor: 'red',
  }
});
