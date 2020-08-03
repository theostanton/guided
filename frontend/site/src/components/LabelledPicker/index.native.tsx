import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {half} from "styles/dimensions";
import {h4, h5} from "styles/text";


type Props<T> = {
  label: string
  options: string[]
  selected?: string
  onValueChange: (value: string) => Promise<void> | void
  style?: ViewStyle
};
type State = {};

export default class LabelledPicker<T> extends React.Component<Props<T>, State> {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.label}>{this.props.label}</Text>
        <Picker style={styles.picker}
                selectedValue={this.props.selected}
                onValueChange={async (value: string) => {
                  await this.props.onValueChange(value)
                }}>
          {this.props.options.map((option) => {
            return <Picker.Item key={option} label={option} value={option}/>
          })}
        </Picker>
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
