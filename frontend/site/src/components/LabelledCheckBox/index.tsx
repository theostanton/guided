import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {h4} from "styles/text";


type Props = {
  onChange: (value: boolean) => Promise<void>
  selected: boolean,
  label: string
}

export default class LabelledCheckBox extends React.Component<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.root} onPress={async () => {
        await this.props.onChange(!this.props.selected)
      }}>
        {/*<Icon*/}
        {/*  size={30}*/}
        {/*  color={this.props.selected ?"#00ff00":"#ff0000"}*/}
        {/*  name={this.props.selected === true ? 'airplane-outline' : 'airplane'}*/}
        {/*/>*/}
        <Text style={styles.text}> {this.props.label} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    ...h4
  }
})

