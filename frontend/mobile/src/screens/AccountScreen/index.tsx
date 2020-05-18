import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { ScreenConfig, ScreenProps } from "../index"
import AuthStore from "model/AuthStore"
import { inject } from "mobx-react"
import ProfileStore from "../../model/ProfileStore"
import Profile from "../../components/Profile"

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

  profileStore: ProfileStore

  constructor(props: Props) {
    super(props)
    this.profileStore = new ProfileStore(props.authStore!.owner!)
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

const config: ScreenConfig<"Account"> = {
  component: AccountScreenComponent,
}

export default config