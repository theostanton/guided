import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { ScreenConfig, ScreenProps } from "../index"
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import Guides from "components/Guides"
import { inject } from "mobx-react"
import AuthStore from "model/AuthStore"

type Props = {
  authStore?: AuthStore
} & ScreenProps<"MyBible">

export type Params = {
  username: string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
})

@inject("authStore")
class MyBibleScreenComponent extends React.Component<Props> {

  render() {
    return <View style={styles.container}>
      <Guides owner={this.props.authStore?.owner!}/>
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