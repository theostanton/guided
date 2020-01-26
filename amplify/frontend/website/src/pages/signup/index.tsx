import * as React from "react"
import { Form, Button, Segment, Message, Modal, Input } from "semantic-ui-react"
import Layout from "../../components/layout"
import { Auth } from "aws-amplify"
import { navigate } from "gatsby"

type Stage = "enter" | "error" | "submitting" | "validate" | "validating"

type Props = {}

type State = {
  email: string,
  password: string,
  accept: boolean,
  stage: Stage,
  validationCode: string | undefined,
  error: any | undefined
}

export default class SignupComponent extends React.Component<Props, State> {

  state: State = {
    email: "",
    password: "",
    accept: false,
    validationCode: undefined,
    error: undefined,
    stage: "enter",
  }

  async signUp(): Promise<void> {
    const { password, email, accept } = this.state
    if (accept) {
      this.setState({ stage: "submitting" })
      try {
        await Auth.signUp({ username: email, password, attributes: { email } })
        this.setState({ stage: "validate", error: undefined })
      } catch (e) {
        console.error(e)
        this.setState({ error: e, stage: "error" })
      }
    } else {
      this.setState({
        stage: "error",
        error: {
          message: "You must accept terms and conditions",
        },
      })
    }
  }

  async validate(): Promise<void> {
    const { email, validationCode } = this.state
    try {
      await Auth.confirmSignUp(email, validationCode)
      await navigate("/")
    } catch (e) {
      console.error(e)
      this.setState({ stage: "error", error: e })
    }

  }

  render(): React.ReactElement | undefined {
    const { password, email, accept, error, stage, validationCode } = this.state
    return <Layout>
      <Segment>
        <Form error={stage === "error"}>
          <Form.Input
            label={"Email"}
            icon='mail'
            iconPosition='left'
            value={email}
            type={"email"}
            onChange={(e, { value }) => {
              this.setState({ "email": value, error: undefined, stage: "enter" })
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
              this.setState({ "password": value, error: undefined, stage: "enter" })
            }}/>
          <Form.Checkbox
            label='I agree to the Terms and Conditions'
            checked={accept}
            onChange={((event, { checked }) => {
              this.setState({ accept: checked, error: undefined, stage: "enter" })
            })}/>

          {error && <Message error header={"Error"} content={error.message}/>}

          <Button
            type='submit'
            active={stage === "enter"}
            loading={stage === "submitting"}
            onClick={async () => {
              console.log(JSON.stringify(this.state, null, 4))
              await this.signUp()
            }
            }>Sign up</Button>
        </Form>

        {(stage === "validate" || stage === "validating") && <Modal
          open={true}
        >
          <Modal.Header>Validate your email</Modal.Header>
          <Modal.Content>
            <Input
              label={"Validation code"}
              onChange={(e, { value }) => {
                this.setState({ validationCode: value })
              }}/>
          </Modal.Content>

          <Modal.Actions>
            <Button
              positive
              loading={stage === "validating"}
              active={validationCode !== undefined && validationCode.length > 0}
              onClick={async () => {
                await this.validate()
              }
              }
            >
              Continue
            </Button>
          </Modal.Actions>
        </Modal>}
      </Segment>
    </Layout>
  }
}