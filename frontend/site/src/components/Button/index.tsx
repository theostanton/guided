import React from 'react';
import {Button as ReactNativeButton, StyleSheet} from 'react-native';
import {NavigationProps} from "utils/navigation/ScreenProps";
import {Color, secondary} from "styles/colors";

export type Props = {
  label: string
  disabled?: boolean
  color?: Color
  onPress: () => Promise<void> | void
} & NavigationProps
type State = {};

export default class Button extends React.Component<Props, State> {
  render() {
    return (
      <ReactNativeButton
        title={this.props.label}
        color={this.props.color || secondary}
        disabled={this.props.disabled}
        onPress={(this.props.onPress)}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
