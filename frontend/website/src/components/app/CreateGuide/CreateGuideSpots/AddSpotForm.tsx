import { inject, observer } from "mobx-react"
import * as React from "react"
import CreateGuideStore from "model/CreateGuideStore"
import { Button, Dropdown, Flag, FlagNameValues, Form, FormGroup, Header, Input, Segment } from "semantic-ui-react"
import { CSSProperties } from "react"
import { Geocode } from "api/generated"


type DropdownOption = {
  key: string,
  text: React.ReactElement | string,
  value: string,
  order?: string
  image?: React.ReactElement
}


function geocodeOptions(geocodes: Geocode[] | undefined): DropdownOption[] | undefined {
  if (geocodes) {
    return geocodes.map(geocode => {
      return {
        key: geocode.label,
        text: geocode.label,
        image: <Flag name={geocode.countryCode.toLowerCase() as FlagNameValues}/>,
        value: geocode.label,
      }
    })
    // .sort((a, b) => {
    // return a.order?.localeCompare(b.order)
    // })
  }
}

type Props = {
  createGuideStore?: CreateGuideStore
}

type State = {
  nights: number
  label: string
  geocode: Geocode | undefined
}

@inject("createGuideStore")
@observer
export default class AddSpotForm extends React.Component<Props, State> {


  constructor(props) {
    super(props)
    this.state = {
      nights: 1,
      label: "",
      geocode: undefined,
    }
  }

  get createGuideStore(): CreateGuideStore {
    return this.props.createGuideStore!
  }

  render(): React.ReactNode {

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

    const label = this.state.nights === 0 ? "Ride by" : `${this.state.nights} nights`


    return <div>
      <Header>
        Add locations
      </Header>
      <Form>
        <FormGroup>
          <Form.Dropdown
            label={"Location"}
            fluid
            selection
            width={6}
            options={geocodeOptions(this.props.createGuideStore.geocodes)}
            placeholder='Search location'
            closeOnChange
            clearable
            icon={"search"}
            value={this.state.geocode?.label}
            open={!!this.createGuideStore.geocodes && !this.state.geocode}
            loading={this.createGuideStore.loadingGeocodes}
            onChange={(event, { value }) => {
              if (this.createGuideStore.geocodes) {
                const geocode = this.createGuideStore.geocodes.find(geocode => {
                  return geocode.label === value
                })
                this.setState({
                  geocode,
                })
              }
            }}
            onSearchChange={async (one, two) => {
              if (this.state.geocode) {
                this.setState({
                  geocode: undefined,
                })
                await this.createGuideStore.updateGeocode(two.searchQuery, true)
              } else {
                await this.createGuideStore.updateGeocode(two.searchQuery, false)
              }
            }}
            search={(props, two) => {
              // this.createGuideStore.updateGeocode(two).then()
              return props
            }}
          />
          <Form.Input
            label='Label'
            width={6}
            value={this.state.label}
            onChange={(e, { value }) => {
              this.setState({
                label: value,
              })
            }}
          />
          <Form.Input
            label={"Nights"}
          >
            <Button icon='minus' size='tiny' style={styleLeft} disabled={this.state.nights === 0}
                    onClick={() => {
                      this.setState({
                        nights: this.state.nights - 1,
                      })
                    }}/>
            <input style={styleInput} value={label} autoFocus={false}/>
            <Button icon='plus' size='tiny' style={styleRight}
                    onClick={() => {
                      this.setState({
                        nights: this.state.nights + 1,
                      })
                    }}/>
          </Form.Input>
        </FormGroup>
      </Form>

      <Form.Button
        floated={"right"}
        disabled={!this.state.label || !this.state.geocode}
        onClick={() => {
          this.createGuideStore.saveSpot(this.state.label, this.state.geocode, this.state.nights)
          this.setState({
            label: "",
            geocode: undefined,
            nights: 1,
          })
        }}>
        Add
      </Form.Button>
    </div>
  }
}