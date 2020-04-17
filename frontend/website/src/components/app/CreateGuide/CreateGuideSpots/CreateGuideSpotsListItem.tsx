import CreateGuideStore from "model/CreateGuideStore"
import { inject, observer } from "mobx-react"
import * as React from "react"
import { GeocodesStore } from "./GeocodesStore"
import { Button, Card, Flag, FlagNameValues, Form, FormGroup, Grid, GridColumn, Header, Icon } from "semantic-ui-react"
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

  locationForm(): React.ReactElement {
    const { result } = this.state
    const error = this.createGuideStore.showSpotsErrors && !this.spot.location && "Set a location"

    return <Form.Dropdown
      label={"Location"}
      fluid
      selection
      width={6}
      error={error}
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
      width={6}
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
    return <Form.Field>
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
        value={this.createGuideStore.startDate}
        preserveViewMode={false}
        autoComplete='off'
        onChange={(_, { value }) => {
          this.createGuideStore.updateStartDate(value)
        }}
      />
    </Form.Field>
  }

  renderHeader(): React.ReactElement {
    switch (this.props.position) {
      case "first":
        return <Header color={"grey"}>Start</Header>
      case "last":
        return <Grid>
          <GridColumn width={10}>
            <Header color={"grey"}>End</Header>
          </GridColumn>
          <GridColumn floated={"right"}>
            <Button basic compact icon={"trash"} circular floated={"right"} style={{ padding: "0.5em" }}
                    onClick={() => {
                      this.createGuideStore.removeSpot(this.props.spotIndex)
                    }
                    }/>
          </GridColumn>
        </Grid>
      case "firstLast":
        return <Grid>
          <GridColumn width={10}>
            <Header color={"grey"}>Back to start</Header>
          </GridColumn>
          <GridColumn floated={"right"}>
            <Button basic compact icon={"close"} circular floated={"right"} style={{ padding: "0.5em" }}
                    onClick={() => {
                      this.createGuideStore.updateIsCircular(false)
                    }
                    }/>
          </GridColumn>
        </Grid>
      case "middle":
        return <Grid>
          <GridColumn width={10}>
            <Header color={"grey"}>{this.props.spotIndex}.</Header>
          </GridColumn>
          <GridColumn floated={"right"}>
            <Button basic compact icon={"trash"} circular floated={"right"} style={{ padding: "0.5em" }}
                    onClick={() => {
                      this.createGuideStore.removeSpot(this.props.spotIndex)
                    }
                    }/>
          </GridColumn>
        </Grid>
    }
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

  render(): React.ReactElement {
    return <Card fluid style={{ paddingLeft: "1em", paddingRight: "1em", paddingTop: "1em" }}>
      {this.renderHeader()}
      <Form>
        <FormGroup>
          {this.locationForm()}
          {this.labelForm()}
          {this.renderContextualForm()}
        </FormGroup>
      </Form>
    </Card>
  }
}