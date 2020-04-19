import React, { CSSProperties } from "react"
import { Button, Input } from "semantic-ui-react"
import { plural } from "utils/human"

type Props = {
  hours: number
  loading: boolean
  onChange: (hours: number) => void
}

type State = {
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
      <Button icon='minus'
              size='tiny'
              style={styleLeft}
              disabled={this.props.loading || this.state.hours <= 1}
              onClick={this.decrement.bind(this)}/>
      <input style={styleInput}
             value={`${this.state.hours} ${plural("hour", this.state.hours)}`}
             disabled={this.props.loading}
             autoFocus={false}/>
      <Button icon='plus'
              size='tiny'
              style={styleRight}
              disabled={this.props.loading}
              onClick={this.increment.bind(this)}/>
    </Input>
  }
}