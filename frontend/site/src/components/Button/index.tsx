import React from 'react';
import {Button as ReactNativeButton, StyleSheet} from 'react-native';
import {NavigationProps} from "utils/navigation/ScreenProps";
import {secondary} from "../../styles/colors";

type Props = {
  label: string
  disabled?: boolean
  onPress: () => Promise<void> | void
} & NavigationProps
type State = {};

export default class Button extends React.Component<Props, State> {
  render() {
    return (
      <ReactNativeButton
        title={this.props.label}
        color={secondary}
        disabled={this.props.disabled}
        onPress={(this.props.onPress)}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
