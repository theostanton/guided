import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { ScreenConfig, ScreenProps } from "../index"
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"

type Props = ScreenProps<"MyBible">

export type Params = {
  username: string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

class MyBibleScreenComponent extends React.Component<Props> {

  render() {
    return <View style={styles.container}>
      <Text>My Bible Screen</Text>
    </View>
  }

}

const config: ScreenConfig<"MyBible"> = {
  component: MyBibleScreenComponent,
  options: (props): BottomTabNavigationOptions => {
    return {
      title: "Bible",
    }
  },
}

export default config