import { inject, observer } from "mobx-react"
import * as React from "react"
import CreateGuideStore from "model/CreateGuideStore"
import { TransportType } from "../../../api/generated"
import { Button, Container, Form, Header, Icon, Modal } from "semantic-ui-react"
import MaxHoursPerRideForm from "../Overlay/modals/CreateGuideModal/MaxHoursPerRideForm"
import * as validation from "./validation"


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
  isCircular: boolean
  transportType?: TransportType
  showErrors: boolean
}

@inject("createGuideStore")
@observer
export default class CreateGuideDetails extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      isCircular: false,
      maxHoursPerRide: 6,
      showErrors: false,
    }
  }

  get createGuideStore(): CreateGuideStore {
    return this.props.createGuideStore!
  }

  render(): React.ReactElement {

    const store = this.createGuideStore
    const { showErrors } = this.state
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
            error={showErrors && validation.title(this.state.title)}
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
            error={showErrors && store.transportTypeValidation()}
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
          color='blue'
          onClick={() => {
            if (store.validateDetails()) {
              store.goToStage("locations")
            } else {
              store.updateShowErrors(true)
            }
          }
          }>
          Continue
        </Form.Button>
      </div>
    </div>
  }
}