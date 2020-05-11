import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { ScreenConfig, ScreenProps } from "../index"
import { inject } from "mobx-react"
import AuthStore from "../../model/AuthStore"
import FormTextInput from "../../components/FormTextInput"
import { login } from "../../model/AuthStore/actions"

type Props = {
  authStore?: AuthStore
} & ScreenProps<"Login">

type State = {
  email: string,
  password: string,
  loading: boolean,
  error: any | undefined
}

@inject("authStore")
class LoginScreenComponent extends React.Component<Props, State> {

  state: State = {
    email: "",
    password: "",
    error: undefined,
    loading: false,
  }

  handleEmailChange = (email: string) => {
    this.setState({ email })
  }

  handlePasswordChange = (password: string) => {
    this.setState({ password })
  }

  async handleLoginPress(): Promise<void> {
    const { password, email } = this.state
    this.setState({ loading: true })
    try {
      const result = await login(this.props.authStore!, email, password)
      if (result.error) {
        this.setState({
          error: result.error,
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
          value={this.state.password}
          textContentType={"password"}
          secureTextEntry={true}
          onChangeText={this.handlePasswordChange.bind(this)}
          placeholder={"Password"}
        />
        <Button onPress={this.handleLoginPress.bind(this)} title="Login"/>
        <Text onPress={() => this.props.navigation.replace("Signup")}>Not a member? Create an account</Text>
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

const config: ScreenConfig<"Login"> = {
  component: LoginScreenComponent,
}

export default config