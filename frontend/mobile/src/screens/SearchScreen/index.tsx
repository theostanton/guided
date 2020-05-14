import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { ScreenConfig, ScreenProps } from "../index"

type Props = ScreenProps<"Search">

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

class SearchScreenComponent extends React.Component<Props> {

  render() {
    return <View style={styles.container}>
      <Text>Search Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate("Guide", {
          guideId: "guide_1234",
        })}
      />
    </View>
  }

}

const config: ScreenConfig<"Home"> = {
  component: SearchScreenComponent,
}

export default config