import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { ScreenConfig, ScreenProps } from "../."
import Feed from "components/Feed"
import AuthStore from "model/AuthStore"
import { inject } from "mobx-react"

type Props = {
  authStore?: AuthStore
} & ScreenProps<"Home">

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

@inject("authStore")
class HomeScreenComponent extends React.Component<Props> {

  render() {
    return <View style={styles.container}>
      <Text>Home Screen</Text>
      <Feed owner={this.props.authStore!.owner!}/>
    </View>
  }

}

const config: ScreenConfig<"Home"> = {
  component: HomeScreenComponent,
}

export default config