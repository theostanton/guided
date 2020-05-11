import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { ScreenProps } from "../."

type Props = {} & ScreenProps<"Details">


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default class DetailsScreenComponent extends React.Component<Props> {

  render() {
    return <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => this.props.navigation.navigate("Home")}
      />
    </View>
  }

}