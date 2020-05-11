import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { ScreenConfig, ScreenProps } from "../index"
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import { StackNavigationOptions } from "@react-navigation/stack"

type Props = ScreenProps<"Profile">

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

class ProfileScreenComponent extends React.Component<Props> {

  render() {
    return <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Go Home"
        onPress={() => this.props.navigation.popToTop()}
      />
    </View>
  }

}

export const config: ScreenConfig<"Profile"> = {
  component: ProfileScreenComponent,
  options: (props: Props): StackNavigationOptions => {
    return {
      title: props.route.params.username,
    }
  },
}