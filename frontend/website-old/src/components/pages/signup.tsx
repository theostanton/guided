import * as React from "react"
import { Button, Container, Form, Header, Message } from "semantic-ui-react"
import { Link, navigate, RouteComponentProps } from "@reach/router"
import { inject } from "mobx-react"
import AuthStore from "model/AuthStore"
import { Helmet } from "react-helmet"

type Stage = "enter" | "error" | "submitting" | "validate"


interface Props extends RouteComponentProps {
  authStore?: AuthStore
}

type Errors = {
  password?: string | undefined
  email?: string | undefined
  username?: string | undefined
  message?: string | undefined
}

type Field = "email" | "username" | "password"

type State = {
  fields: { [field in Field]: string }
  accept: boolean,
  stage: Stage,
  validationCode: string | undefined,
  errors: Errors
}

const PATTERNS: {
  [field in Field]: {
    message: string
    pattern: RegExp
  }
} = {
  email: {
    message: "Please enter a valid email",
    pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+))/,
  },
  password: {
    message: "Password must be at least 8 letters long",
    pattern: /^(.){8,64}$/,
  },
  username: {
    message: "Username can only contain lower case letters, numbers and dashes",
    pattern: /^[a-z0-9-]+$/,
  },
}

@inject("authStore")
export default class SignUpComponent extends React.Component<Props, State> {

  state: State = {
    fields: {
      email: "",
      username: "",
      password: "",
    },
    accept: false,
    validationCode: undefined,
    errors: {},
    stage: "enter",
  }

  checkErrors(): Errors | undefined {
    let hasErrors = false
    const errors: Errors = {};

    (Object.keys(PATTERNS) as Field[]).forEach((field: Field) => {
      const { message, pattern } = PATTERNS[field]
      const match = this.state.fields[field].match(pattern)
      if (!match) {
        hasErrors = true
        errors[field] = message
      }
    })

    if (hasErrors) {
      return errors
    }
  }

  async signUp(): Promise<void> {
    const { fields: { password, email, username }, accept } = this.state
    const errors = this.checkErrors()
    if (errors) {
      this.setState({ errors, stage: "error" })
    } else if (accept) {
      this.setState({ stage: "submitting" })
      try {
        const result = await this.props.authStore.signUp(username, email, password)
        if (result.success) {
          await navigate("/")
        } else {
          this.setState({ errors: { message: result.message }, stage: "error" })
        }
        this.setState({ stage: "validate", errors: {} })
      } catch (e) {
        console.error(e)
        this.setState({ errors: { message: e.message }, stage: "error" })
      }
    } else {
      this.setState({
        stage: "error",
        errors: {
          message: "You must accept terms and conditions",
        },
      })
    }
  }

  updateValue(field: Field, value: string) {

    const errors = this.state.errors
    if (errors[field]) {
      if (!value.match(PATTERNS[field].pattern)) {
        errors[field] = PATTERNS[field].message
      }
    }

    const fields = this.state.fields
    fields[field] = value

    this.setState({ fields, errors, stage: "enter" })
  }

  render(): React.ReactElement | undefined {

    const { fields: { password, email, username }, accept, errors, stage, validationCode } = this.state
    return <Container text style={{ marginTop: "2em" }}>
      <Helmet title={`Sign up - Riders Bible`} defer={true}/>
      <Form error={stage === "error"}>
        <Form.Input
          label="Username"
          icon='user'
          error={errors["username"]}
          iconPosition='left'
          value={username}
          onChange={(e, { value }) => {
            this.updateValue("username", value)
          }
          }/>
        <Form.Input
          label="Email - Dont use a real one - API is public"
          icon='mail'
          iconPosition='left'
          error={errors["email"]}
          value={email}
          type={"email"}
          onChange={(e, { value }) => {
            this.updateValue("email", value)
          }
          }/>
        <Form.Input
          label={"Password"}
          value={password}
          error={errors["password"]}
          icon='lock'
          iconPosition='left'
          type={"password"}
          onChange={(e, { value, error }) => {
            this.updateValue("password", value)
          }}/>
        <Form.Checkbox
          label='I agree to the Terms and Conditions'
          checked={accept}
          onChange={((event, { checked }) => {
            this.setState({ accept: checked || false, stage: "enter" })
          })}/>

        {errors.message && <Message error header={"Error"} content={errors.message}/>}

        <Button
          type='submit'
          active={stage === "enter"}
          loading={stage === "submitting"}
          onClick={async () => {
            await this.signUp()
          }
          }>Sign up</Button>
      </Form>

      <Header as='h4'><Link to={"/login"}>Already a member? log in</Link></Header>
    </Container>
  }
}