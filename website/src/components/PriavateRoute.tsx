import * as React from "react"
import { isLoggedIn } from "utils/auth"
import { navigate } from "gatsby"

type Props = {
  component: any
}

type State = {}

export default class PrivateRouteComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement | undefined {
    const { component: Component, ...rest } = this.props
    if (isLoggedIn()) {
      return <Component {...rest}/>
    } else {
      navigate("/login").then()
    }
  }

}