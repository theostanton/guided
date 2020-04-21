import { Button, Form, Icon } from "semantic-ui-react"
import * as React from "react"
import { State, SubProps } from "./index"
import AwesomeDebouncePromise from "awesome-debounce-promise"
import { ApolloQueryResult } from "apollo-boost"
import { Geocode, GeocodeDocument, GeocodeQuery } from "api/generated"
import { client } from "api"
import { CSSProperties } from "react"
import { plural } from "../../../../../utils/human"
import { DateInput } from "semantic-ui-calendar-react"
import { dateString } from "../../../../../utils/dates"


export default function SpotsListItemContextualForm({ state, setState, updateSpot,...props }: SubProps): React.ReactElement {

  function nightsForm(): React.ReactElement {

    const styleLeft: CSSProperties = {
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "0px",
      margin: "0px",
    }

    const styleInput: CSSProperties = {
      borderRadius: "0px",
      width: "6em",
      textAlign: "center",
    }

    const styleRight: CSSProperties = {
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
    }

    const nights = props.spot.nights
    const label = nights === 0 ? (props.createGuideStore.guide.transportType === "CAR" ? "Drive by" : "Ride by") : `${nights} ${plural("night", nights)}`

    return <Form.Input
      label={"Nights"}
    >
      <Button icon='minus' size='tiny' style={styleLeft} disabled={nights === 0}
              onClick={async () => {
                await updateSpot({
                  nights: nights - 1,
                })
              }}/>
      <input style={styleInput} value={label} autoFocus={false}/>
      <Button icon='plus' size='tiny' style={styleRight}
              onClick={async () => {
                await updateSpot({
                  nights: nights + 1,
                })
              }}/>
    </Form.Input>
  }

  function startDateForm(): React.ReactElement {
    return <Form.Field disabled={state.updatingStartDate}>
      <label>Start date</label>
      <DateInput
        icon={"calendar"}
        closeOnMouseLeave={true}
        popupPosition='bottom right'
        name='Date'
        closable
        dateFormat={"YYYY-MM-DD"}
        initialDate={dateString(new Date())}
        inlineLabel={true}
        clearIcon={(<Icon name='remove' color='red'/>)}
        clearable={true}
        animation='fade'
        duration={200}
        hideMobileKeyboard
        iconPosition='right'
        value={props.createGuideStore.startDate}
        preserveViewMode={false}
        autoComplete='off'
        onChange={async (_, { value }) => {
          setState({
            updatingStartDate: true,
          })
          await props.createGuideStore.updateStartDate(value)
          setState({
            updatingStartDate: false,
          })
        }}
      />
    </Form.Field>
  }

  switch (props.position) {
    case "first":
      return startDateForm()
    case "middle":
    case "last":
      return nightsForm()
    default:
      return null
  }
}