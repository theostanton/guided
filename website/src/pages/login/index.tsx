import * as React from "react"
import { Form, Button, Segment, Message, Container } from "semantic-ui-react"
import Layout from "layouts/root"
import { Auth } from "aws-amplify"
import { navigate } from "gatsby"
import { isLoggedIn } from "../../utils/auth"

type Props = {}

type State = {
  email: string,
  password: string,
  loading: boolean,
  error: any | undefined
}

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
      await Auth.signIn({ username: email, password })
      await navigate("/app")
    } catch (e) {
      console.error(e)
      this.setState({ error: e, loading: false })
    }
  }

  render(): React.ReactElement | undefined {

    //TODO this smarter
    if (isLoggedIn()) {
      try {
        navigate("/app").then().catch()
        return
      } catch (e) {
        console.error(e)
      }
    }

    const { password, email, error, loading } = this.state
    return <Layout>
      <Container text style={{ marginTop: "2em" }}>
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
              console.log(JSON.stringify(error, null, 4))
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
        </Form>
      </Container>
    </Layout>
  }
}