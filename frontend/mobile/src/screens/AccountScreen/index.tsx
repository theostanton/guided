import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { ScreenConfig, ScreenProps } from "../index"

type Props = ScreenProps<"Account">

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

class AccountScreenComponent extends React.Component<Props> {

  render() {
    return <View style={styles.container}>
      <Text>Account Screen</Text>
      <Button
        title="Go Home"
        onPress={() => this.props.navigation.popToTop()}
      />
    </View>
  }

}

const config: ScreenConfig<"Account"> = {
  component: AccountScreenComponent,
}

export default config