import { Text, View, StyleSheet } from "react-native"
import React from "react"
import { h1, h3 } from "styles/text"

export type StatisticProps = {
  value: string | number,
  label: string
}

export default class Statistic extends React.Component<StatisticProps> {
  render() {
    return <View style={styles.container}>
      <Text style={styles.value}>{this.props.value}</Text>
      <Text style={styles.label}>{this.props.label}</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  value: {
    ...h1,
    textAlign: "center",
  },
  label: {
    ...h3,
    textAlign: "center",
  },
})