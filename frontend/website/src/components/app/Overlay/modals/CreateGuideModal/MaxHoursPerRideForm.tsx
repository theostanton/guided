import React, { CSSProperties } from "react"
import {
  Button, Header,
  Input,
} from "semantic-ui-react"
import { EditNightsDocument, MutationEditNightsArgs, SpotFragment } from "api/generated"
import client from "api/client"
import { plural } from "../../../../../utils/human"

type Props = {
  hours: number
  onChange: (hours: number) => void
}

type State = {
  loading: boolean
  hours: number
}

export default class MaxHoursPerRideForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      loading: false,
      hours: props.hours,
    }
  }

  increment() {
    const hours = this.state.hours + 1
    this.setState({
      hours,
    })
    this.props.onChange(hours)
  }

  decrement() {
    const hours = this.state.hours - 1
    this.setState({
      hours,
    })
    this.props.onChange(hours)
  }

  render(): React.ReactElement {

    const styleLeft: CSSProperties = {
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "0px",
      margin: "0px",
    }

    const styleInput: CSSProperties = {
      borderRadius: "0px",
      width: "7em",
      textAlign: "center",
    }

    const styleRight: CSSProperties = {
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
    }

    return <Input>
      <Button icon='minus' size='tiny' style={styleLeft} disabled={this.state.hours <= 1}
              onClick={this.decrement.bind(this)}/>
      <input style={styleInput} value={`${this.state.hours} ${plural("hour", this.state.hours)}`} autoFocus={false}/>
      <Button icon='plus' size='tiny' style={styleRight}
              onClick={this.increment.bind(this)}/>
    </Input>
  }
}