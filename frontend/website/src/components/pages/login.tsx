import * as React from "react"
import { Form, Button, Message, Container, Header } from "semantic-ui-react"
import { Link } from "@reach/router"
import { inject } from "mobx-react"
import AuthStore from "model/AuthStore"
 import { RouteComponentProps } from "@reach/router"
import { navigate } from "@reach/router"

interface Props extends RouteComponentProps {
  authStore?: AuthStore
}

type State = {
  email: string,
  password: string,
  loading: boolean,
  error: any | undefined
}

@inject("authStore")
export default class LoginComponent extends React.Component<Props, State> {

  state: State = {
    email: "",
    password: "",
    error: undefined,
    loading: false,
  }

  async logIn(): Promise<void> {
    const { password, email } = this.state
    this.setState({ loading: true })
    try {
      const result = await this.props.authStore.login(email, password)
      if (result.success) {
        await navigate(`/`)
      } else {
        this.setState({
          error: result.message || "Something went wrong",
          loading: false,
        })
      }
    } catch (e) {
      console.error(e)
      this.setState({ error: e, loading: false })
    }
  }

  render(): React.ReactElement | undefined {

    const { password, email, error, loading } = this.state
    return <Container text style={{ marginTop: "2em" }}>
      <Form error={error !== undefined}>
        <Form.Input
          label={"Email"}
          icon='mail'
          iconPosition='left'
          value={email}
          onChange={(e, { value }) => {
            this.setState({ email: value, error: undefined })
          }
          }/>
        <Form.Input
          label={"Password"}
          value={password}
          icon='lock'
          iconPosition='left'
          type={"password"}
          onChange={(e, { value, error }) => {
            this.setState({ password: value, error: undefined })
          }}/>
        {error && <Message error header={"Error"} content={error.message}/>}

        <Button
          type='submit'
          active={!error}
          loading={loading}
          onClick={async () => {
            await this.logIn()
          }
          }>Log in</Button>

        <Header as='h4'><Link to={"/signup"}>Not a member? Create an account</Link></Header>
      </Form>
    </Container>
  }
}