import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { ScreenConfig, ScreenProps } from "../index"
import AuthStore from "../../model/AuthStore"
import { inject } from "mobx-react"

type Props = { authStore?: AuthStore } & ScreenProps<"Account">

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

@inject("authStore")
class AccountScreenComponent extends React.Component<Props> {

  render() {
    return <View style={styles.container}>
      <Text>Account Screen</Text>
      <Button
        title="Logout"
        onPress={() => this.props.authStore!.logOut()}
      />
    </View>
  }

}

const config: ScreenConfig<"Account"> = {
  component: AccountScreenComponent,
}

export default config