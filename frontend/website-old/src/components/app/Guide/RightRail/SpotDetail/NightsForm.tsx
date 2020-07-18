import React, { CSSProperties } from "react"
import {
  Button, Header,
  Input,
} from "semantic-ui-react"
import { EditNightsDocument, MutationEditNightsArgs, SpotFragment } from "api/generated"
import client from "api/client"

type Props = {
  spot: SpotFragment
}

type State = {
  loading: boolean
  nights: number
}

export default class NightsForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      loading: false,
      nights: props.spot.nights,
    }
  }

  increment() {
    this.setState({
      nights: this.state.nights + 1,
    })
  }

  decrement() {
    this.setState({
      nights: this.state.nights - 1,
    })
  }

  async onSave() {
    this.setState({
      loading: true,
    })

    const variables: MutationEditNightsArgs = {
      spotId: this.props.spot.id,
      nights: this.state.nights,
    }

    await client.mutate({
      mutation: EditNightsDocument,
      variables,
    })

    this.setState({
      loading: false,
    })
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
      <Button icon='minus' size='tiny' style={styleLeft} disabled={this.state.loading}
              onClick={this.decrement.bind(this)}/>
      <input style={styleInput} value={`${this.state.nights} nights`} autoFocus={false}/>
      <Button icon='plus' size='tiny' style={styleRight} disabled={this.state.loading}
              onClick={this.increment.bind(this)}/>
      <Button loading={this.state.loading} disabled={this.props.spot.nights === this.state.nights}
              onClick={this.onSave.bind(this)}>Save</Button>
    </Input>
  }
}