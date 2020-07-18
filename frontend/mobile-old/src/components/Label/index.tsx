import Icon, { IconName } from "../Icon"
import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { eighth, half, quarter, whole } from "../../utils/dimensions"
import { lightGrey } from "../../styles/colors"
import { h3, h5 } from "../../styles/text"

export type Props = {
  icon?: IconName
}

export default class Label extends React.Component<Props> {
  render() {
    const { icon } = this.props
    return <View style={styles.container}>
      {icon && <View style={styles.icon}><Icon color={h5.color} name={icon} size={12}/></View>}
      <Text style={styles.text}>{this.props.children}</Text>
    </View>
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: quarter,
    paddingLeft: half,
    paddingRight: half,
    paddingTop: eighth,
    paddingBottom: eighth,
    backgroundColor: lightGrey,
    borderRadius: whole,
  },
  text: {
    ...h5,
    alignSelf: "center",
    paddingLeft: quarter,
  },
  icon: {
    alignSelf: "center",
    marginLeft:eighth
  },
})

