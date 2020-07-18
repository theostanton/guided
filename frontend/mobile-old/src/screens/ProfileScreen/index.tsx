import React from "react"
import { Button, StyleSheet, View } from "react-native"
import { ScreenConfig, ScreenProps } from "../index"
import { StackNavigationOptions } from "@react-navigation/stack"
import Profile from "components/Profile"
import ProfileStore from "../../model/ProfileStore"

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

  profileStore: ProfileStore

  constructor(props: Props) {
    super(props)
    this.profileStore = new ProfileStore(props.route.params.username)
  }

  async componentDidMount() {
    await this.profileStore.fetch()
  }

  render() {
    return <View style={styles.container}>
      <Profile profileStore={this.profileStore}/>
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