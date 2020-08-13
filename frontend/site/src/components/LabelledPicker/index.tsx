import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import {half} from "styles/dimensions";
import {h4, h5} from "styles/text";


export type Props = {
  label: string
  options: string[]
  selected?: string
  onValueChange: (value: string) => Promise<void> | void
  style?: ViewStyle
};
type State = {};

export default class LabelledPicker extends React.Component<Props, State> {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.label}>{this.props.label}</Text>
        <Dropdown options={this.props.options}
                  value={this.props.selected}
                  onChange={(option) => {
                    this.props.onValueChange(option.value)
                  }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    paddingTop: half,
    paddingBottom: half,
  },
  label: {
    ...h5,
  },
  picker: {
    ...h4,
    marginTop: half,
    padding: half
  },
});
