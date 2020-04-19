import { inject, observer } from "mobx-react"
import * as React from "react"
import CreateGuideStore from "model/CreateGuideStore"
import { TransportType } from "../../../api/generated"
import { Form, Icon, Message } from "semantic-ui-react"
import * as validation from "./validation"
import MaxHoursPerRideForm from "./MaxHoursPerRideForm"


type Status = "none" | "loading" | "errors" | "failed"

type TransportOption = {
  key: TransportType,
  text: string,
  value: TransportType
  image?: React.ReactElement
}


const TRANSPORT_OPTIONS: TransportOption[] = [
  {
    value: TransportType.Motorcycle,
    text: "Motorbike",
    key: TransportType.Motorcycle,
    image: <Icon name='motorcycle'/>,
  },
  {
    value: TransportType.Bicycle,
    text: "Bicycle",
    key: TransportType.Bicycle,
    image: <Icon name='bicycle'/>,
  },
  {
    value: TransportType.Car,
    text: "Car",
    key: TransportType.Car,
    image: <Icon name='car'/>,
  },
]

type Props = {
  createGuideStore?: CreateGuideStore
}

type State = {
  title?: string
  summary?: string
  maxHoursPerRide: number
  error: string | undefined
  transportType?: TransportType
  status: Status
}

@inject("createGuideStore")
@observer
export default class CreateGuideDetails extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      maxHoursPerRide: 6,
      error: undefined,
      status: "none",
    }
  }

  get createGuideStore(): CreateGuideStore {
    return this.props.createGuideStore!
  }

  validate(): boolean {
    return !!validation.title(this.state.title) && !!this.state.transportType
  }

  async upsertGuide(): Promise<boolean> {

    if (!this.validate()) {
      this.setState({
        status: "errors",
        error: undefined,
      })
      return
    }

    this.setState({
      status: "loading",
      error: undefined,
    })
    const { title, maxHoursPerRide, transportType } = this.state
    const result = await this.createGuideStore.upsertGuide(title, maxHoursPerRide, transportType)

    if (result.success) {
      this.setState({
        status: "none",
      })
      return true
    } else {
      this.setState({
        status: "failed",
        error: result.message || "Something went wrong",
      })
      return false
    }
  }

  render(): React.ReactElement {

    return <div style={{
      marginTop: "2em",
      marginBottom: "2em",
      paddingBottom: "2em",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    }}>
      <Form>
        <Form.Group>
          <Form.Input
            label='Title'
            width={12}
            error={this.state.status === "errors" && !validation.title(this.state.title)}
            onChange={(e, { value }) => {
              this.setState({
                title: value,
              })
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.TextArea
            label='Summary'
            width={16}
            disabled
            onChange={(e, { value }) => {
              this.setState({
                summary: value.toString(),
              })
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Field style={{ width: "200px" }}>
            <label>Max ride duration</label>
            <Form.Input>
              <MaxHoursPerRideForm
                hours={this.state.maxHoursPerRide}
                onChange={(hours) => {
                  this.setState({
                    maxHoursPerRide: hours,
                  })
                }}/>
            </Form.Input>
          </Form.Field>
          <Form.Select
            label={"Vehicle"}
            width={"4"}
            fluid
            error={this.state.status === "errors" && !this.state.transportType}
            value={this.state.transportType}
            onChange={(e, { value }) => {
              this.setState({
                transportType: (value as TransportType),
              })
            }}
            options={TRANSPORT_OPTIONS}
          />
        </Form.Group>
      </Form>
      {this.state.error && <Message error={this.state.status === "failed"}>{this.state.error}</Message>}
      <div style={{
        bottom: "2em",
        position: "absolute",
        maxWidth: "600px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}>

        <Form.Button
          style={{
            bottom: 0,
            right: 0,
            position: "absolute",
          }}
          loading={this.state.status === "loading"}
          color='blue'
          onClick={async () => {
            if (await this.upsertGuide()) {
              this.createGuideStore.goToStage("locations")
            }
          }
          }>
          Continue
        </Form.Button>
      </div>
    </div>
  }
}