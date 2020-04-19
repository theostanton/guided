import CreateGuideStore from "model/CreateGuideStore"
import { inject, observer } from "mobx-react"
import * as React from "react"
import { GeocodesStore } from "./GeocodesStore"
import {
  Button,
  Card,
  Flag,
  FlagNameValues,
  Form,
  FormGroup,
  Grid,
  GridColumn,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react"
import { CreateGuideWithSpotInput, Geocode, GeocodeDocument, GeocodeQuery } from "api/generated"
import { ApolloQueryResult } from "apollo-boost"
import { client } from "api"
import AwesomeDebouncePromise from "awesome-debounce-promise"
import { logJson } from "../../../../utils/logger"
import { CSSProperties, ReactElement } from "react"
import { DateInput } from "semantic-ui-calendar-react"
import { dateString } from "../../../../utils/dates"
import { plural } from "../../../../utils/human"

type Result = {
  query?: string
  error?: string
  status: "loading" | "error" | "success" | "clear"
  geocodes?: Geocode[]
}

type DropdownOption = {
  key: string,
  text: React.ReactElement | string,
  value: string,
  order?: string
  image?: React.ReactElement
}

export type Position = "first" | "middle" | "last" | "firstLast"

type Props = {
  position: Position
  createGuideStore?: CreateGuideStore
  geocodeStore?: GeocodesStore
  spotIndex: number
}

type State = {
  result: Result
}

@inject("createGuideStore", "geocodeStore")
@observer
export default class CreateGuideSpotsListItem extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      result: {
        status: "clear",
      },
    }
  }

  get createGuideStore(): CreateGuideStore {
    return this.props.createGuideStore!
  }

  get geocodeStore(): GeocodesStore {
    return this.props.geocodeStore!
  }

  private request = AwesomeDebouncePromise(
    this.executeRequest.bind(this),
    200,
    {
      accumulate: false,
      onlyResolvesLast: true,
    },
  )

  clear() {
    this.setState({
      result: {
        status: "clear",
      },
    })
  }

  async updateQuery(query: string | undefined) {
    if (!query || query.length === 0) {
      this.clear()
    } else {
      this.setState({
        result: {
          status: "loading",
        },
      })
    }
    await this.request(query)
  }

  async executeRequest(query: string | undefined) {
    if (!query || query.length === 0) {
      this.clear()
      return
    }

    let result: ApolloQueryResult<GeocodeQuery>
    try {
      result = await client.query<GeocodeQuery>({
        query: GeocodeDocument,
        variables: {
          query,
        },
      })
    } catch (e) {
      this.setState({
        result: {
          status: "error",
          error: e.message,
        },
      })
      return
    }

    if (result.errors) {
      this.setState({
        result: {
          status: "error",
          error: result.errors.map(error => {
            return error.message
          }).join("\n"),
        },
      })
    } else {
      const geocodes = result.data.geocode.geocodes.map(geocode => geocode)
      this.setState({
        result: {
          status: "success",
          query,
          geocodes: geocodes,
        },
      })
    }

  }

  get spot(): Partial<CreateGuideWithSpotInput> {
    return this.createGuideStore.spots[this.props.spotIndex]
  }

  geocodeOptions(): DropdownOption[] | undefined {
    if (this.state.result.geocodes) {
      return this.state.result.geocodes.map(geocode => {
        return {
          key: geocode.label,
          text: geocode.label,
          image: <Flag name={geocode.countryCode.toLowerCase() as FlagNameValues}/>,
          value: geocode.label,
        }
      })
    }
  }

  updateSpot(fields: Partial<CreateGuideWithSpotInput>) {
    this.createGuideStore.updateSpot(this.props.spotIndex, fields)
  }

  locationErrorMessage(): string | undefined {
    if (this.createGuideStore.showSpotsErrors && !this.spot.location) {
      return "Set a location"
    }
    if (this.state.result.status === "error") {
      return this.state.result.error || "Something went wrong"
    }
  }

  locationForm(): React.ReactElement {
    const { result } = this.state

    return <Form.Dropdown
      label={"Location"}
      fluid
      selection
      width={6}
      error={this.locationErrorMessage()}
      options={this.geocodeOptions()}
      placeholder='Search location'
      closeOnChange
      clearable
      icon={"search"}
      onFocus={() => {
        this.updateSpot({
          long: undefined,
          lat: undefined,
          country: undefined,
          location: undefined,
        })
      }}
      text={this.spot.location}
      open={!!result.geocodes && !this.spot.location}
      loading={result.status === "loading"}
      onChange={(event, { value }) => {
        if (result.geocodes) {
          const geocode = result.geocodes.find(geocode => {
            return geocode.label === value
          })
          this.updateSpot({
            long: geocode.longitude,
            lat: geocode.latitude,
            country: geocode.countryCode,
            location: geocode.label,
          })
        }
      }}
      onSearchChange={async (_, { searchQuery }) => {
        await this.updateQuery(searchQuery)
      }}
      search={(props, two) => {
        return props
      }}
    />
  }

  labelForm(): React.ReactElement {

    const error = this.createGuideStore.showSpotsErrors && !this.spot.label && "Choose a name"

    return <Form.Input
      label='Name'
      width={4}
      error={error}
      value={this.spot.label}
      onChange={(e, { value }) => {
        this.updateSpot({
          label: value,
        })
      }}
    />
  }

  nightsForm(): React.ReactElement {

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

    const nights = this.spot.nights
    const label = nights === 0 ? (this.props.createGuideStore.transportType === "CAR" ? "Drive by" : "Ride by") : `${nights} ${plural("night", nights)}`

    return <Form.Input
      label={"Nights"}
    >
      <Button icon='minus' size='tiny' style={styleLeft} disabled={nights === 0}
              onClick={() => {
                this.updateSpot({
                  nights: nights - 1,
                })
              }}/>
      <input style={styleInput} value={label} autoFocus={false}/>
      <Button icon='plus' size='tiny' style={styleRight}
              onClick={() => {
                this.updateSpot({
                  nights: nights + 1,
                })
              }}/>
    </Form.Input>
  }

  startDateForm(): React.ReactElement {
    return <Form.Field width={6} style={{ backgroundColour: "#ff0000" }}>
      <label>Start date</label>
      <DateInput
        style={{ backgroundColour: "#00ff00" }}
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
        value={this.createGuideStore.startDate}
        preserveViewMode={false}
        autoComplete='off'
        onChange={(_, { value }) => {
          this.createGuideStore.updateStartDate(value)
        }}
      />
    </Form.Field>
  }

  renderContextualForm(): React.ReactElement {
    switch (this.props.position) {
      case "first":
        return this.startDateForm()
      case "middle":
      case "last":
        return this.nightsForm()
    }
  }

  renderLeft(): React.ReactElement {

    let title: string
    switch (this.props.position) {
      case "first":
        title = `Start`
        break
      case "middle":
        title = `${this.props.spotIndex}.`
        break
      case "last":
        title = `End`
        break
      case "firstLast":
        title = `Back to start`
        break
    }

    return <Header as={'h5'} color={"grey"}>{title}</Header>
  }

  renderCenter(): React.ReactElement {

    function attached(): boolean | "top" | "bottom" {
      switch (this.props.position) {
        case "first":
          return "top"
        case "middle":
          return true
        case "firstLast":
        case "last":
          return "bottom"
      }
    }

    return <Segment fluid attached={attached.bind(this)()}
                    style={{ paddingLeft: "1em", paddingRight: "1em", paddingTop: "1em" }}>
      <Form>
        <FormGroup widths={16}>
          {this.labelForm()}
          {this.locationForm()}
          {this.renderContextualForm()}
        </FormGroup>
      </Form>
    </Segment>
  }

  renderRight(): React.ReactElement | undefined {
    switch (this.props.position) {
      case "first":
        return
      case "last":
      case "middle":
        return <Button basic compact icon={"trash"} circular style={{ padding: "0.5em" }}
                       onClick={() => {
                         this.createGuideStore.removeSpot(this.props.spotIndex)
                       }
                       }/>
      case "firstLast":
        return <Button basic compact icon={"close"} circular style={{ padding: "0.5em" }}
                       onClick={() => {
                         this.createGuideStore.updateIsCircular(false)
                       }
                       }/>
    }
  }

  render(): React.ReactElement {

    return <Grid>
      <GridColumn width={2} verticalAlign={"middle"} textAlign={"right"}>
        {this.renderLeft()}
      </GridColumn>
      <GridColumn width={12} style={{ padding: 0 }}>
        {this.renderCenter()}
      </GridColumn>
      <GridColumn width={2} verticalAlign={"middle"}>
        {this.renderRight()}
      </GridColumn>
    </Grid>


  }
}