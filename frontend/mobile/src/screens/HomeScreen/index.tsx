import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { ScreenProps } from "../index"

type Props = {} & ScreenProps<"Home">


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default class HomeScreenComponent extends React.Component<Props> {

  render() {
    return <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate("Details")}
      />
    </View>
  }

}