import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { ScreenConfig, ScreenProps } from "../index"
import FormTextInput from "components/FormTextInput"
import AuthStore from "model/AuthStore"
import { signup } from "model/AuthStore/actions"
import { inject } from "mobx-react"


type Props = {
  authStore?: AuthStore
} & ScreenProps<"Login">

type State = {
  email: string,
  username: string,
  password: string,
  loading: boolean,
  error: any | undefined
}

@inject("authStore")
class SignupScreenComponent extends React.Component<Props, State> {

  state: State = {
    email: "",
    username: "",
    password: "",
    error: undefined,
    loading: false,
  }

  handleUsernameChange = (username: string) => {
    this.setState({ username })
  }
  handleEmailChange = (email: string) => {
    this.setState({ email })
  }

  handlePasswordChange = (password: string) => {
    this.setState({ password })
  }


  async handleSignupPress(): Promise<void> {
    const { email, username, password } = this.state
    this.setState({ loading: true })
    try {
      const result = await signup(this.props.authStore!, email, username, password)
      if (result.error) {
        this.setState({
          error: result.error || "Something went wrong",
          loading: false,
        })
      }
    } catch (e) {
      console.error(e)
      this.setState({ error: e, loading: false })
    }
  }

  render() {
    return <View style={styles.container}>
      <View style={styles.form}>
        <FormTextInput
          value={this.state.email}
          onChangeText={this.handleEmailChange.bind(this)}
          placeholder={"Email"}
        />
        <FormTextInput
          value={this.state.username}
          onChangeText={this.handleUsernameChange.bind(this)}
          placeholder={"Username"}
        />
        <FormTextInput
          value={this.state.password}
          textContentType={"newPassword"}
          secureTextEntry={true}
          onChangeText={this.handlePasswordChange.bind(this)}
          placeholder={"Password"}
        />
        <Button onPress={this.handleSignupPress.bind(this)} title="Signup"/>
        <Text onPress={() => this.props.navigation.replace("Login")}>Already a member? Login</Text>
      </View>
    </View>
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
  },
})

const config: ScreenConfig<"Signup"> = {
  component: SignupScreenComponent,
}

export default config