import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { ScreenConfig, ScreenProps } from "../index"

type Props = ScreenProps<"Home">

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
})

class HomeScreenComponent extends React.Component<Props> {

  render() {
    return <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Guide"
        onPress={() => this.props.navigation.navigate("Guide", {
          guideId: "guide_1234",
        })}
      />
    </View>
  }

}

const config: ScreenConfig<"Home"> = {
  component: HomeScreenComponent,
}

export default config