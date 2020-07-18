import React from "react"
import { TextInputProps, StyleSheet, TextInput } from "react-native"

type Props = TextInputProps

type State = {}

export default class FormTextInput extends React.Component<Props, State> {
  render() {
    const { style, ...otherProps } = this.props
    return <TextInput
      selectionColor={"#ffff00"}
      style={[styles.textInput, style]}
      {...otherProps}
    />
  }
}


const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "#ff00ff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    // marginBottom: 20,
  },
})