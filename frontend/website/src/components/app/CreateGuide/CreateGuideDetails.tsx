import { inject, observer } from "mobx-react"
import * as React from "react"
import CreateGuideStore from "model/CreateGuideStore"
import { TransportType } from "../../../api/generated"
import { Button, Container, Form, Header, Icon, Modal } from "semantic-ui-react"
import MaxHoursPerRideForm from "../Overlay/modals/CreateGuideModal/MaxHoursPerRideForm"
import { DateInput } from "semantic-ui-calendar-react"
import { dateString } from "../../../utils/dates"
import { logJson } from "../../../utils/logger"


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

@inject("createGuideStore")
@observer
export default class CreateGuideDetails extends React.Component<Props> {

  get createGuideStore(): CreateGuideStore {
    return this.props.createGuideStore!
  }

  render(): React.ReactElement {

    const store = this.createGuideStore
    const { showErrors } = store
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
            error={showErrors && store.titleValidation()}
            value={store.title}
            onChange={(e, { value }) => {
              store.updateTitle(value)
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.TextArea
            label='Summary'
            width={16}
            disabled
            onChange={(e, { value }) => {

            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Field style={{ width: "200px" }}>
            <label>Max ride duration</label>
            <Form.Input>
              <MaxHoursPerRideForm
                hours={store.maxHoursPerRide}
                onChange={(hours) => {
                  store.updateMaxHours(hours)
                }}/>
            </Form.Input>
          </Form.Field>
          <Form.Select
            label={"Vehicle"}
            width={"4"}
            fluid
            error={showErrors && store.transportTypeValidation()}
            value={store.transportType}
            onChange={(e, { value }) => {
              store.updateTransportType(value as TransportType)
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