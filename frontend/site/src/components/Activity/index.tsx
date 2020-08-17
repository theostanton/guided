import React from "react";
import {ActivityIndicator, StyleSheet, View, ViewStyle} from "react-native";
import {Color, primary, secondary} from "styles/colors";

type Props = {
  style?: ViewStyle
  size?: number | 'small' | 'large'
  color?: Color
}

export default class Activity extends React.Component<Props> {
  render() {
    return <View style={[this.props.style, styles.root]}>
      <ActivityIndicator
        size={this.props.size || 'large'}
        color={this.props.color || secondary}
      />
    </View>;
  }
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})