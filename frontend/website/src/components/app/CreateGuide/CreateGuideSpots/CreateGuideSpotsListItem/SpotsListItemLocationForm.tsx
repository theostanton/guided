import { Flag, FlagNameValues, Form } from "semantic-ui-react"
import * as React from "react"
import { State, SubProps } from "./index"
import AwesomeDebouncePromise from "awesome-debounce-promise"
import { ApolloQueryResult } from "apollo-boost"
import { Geocode, GeocodeDocument, GeocodeQuery } from "api/generated"
import { client } from "api"
import { log, logObject } from "../../../../../utils/logger"

type DropdownOption = {
  key: string,
  text: React.ReactElement | string,
  value: string,
  order?: string
  image?: React.ReactElement
}

const REQUEST = AwesomeDebouncePromise(
  executeRequest,
  200,
  {
    accumulate:false,
    onlyResolvesLast: true,
    key: (key) => key,
  },
)

async function executeRequest(key: string, query: string | undefined, setState: (state: Partial<State>) => void) {
  if (!query || query.length === 0) {
    setState({
      result: {
        status: "clear",
      },
    })
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
    setState({
      result: {
        status: "error",
        error: e.message,
      },
    })
    return
  }

  if (result.errors) {
    setState({
      result: {
        status: "error",
        error: result.errors.map(error => {
          return error.message
        }).join("\n"),
      },
    })
  } else {
    const geocodes = result.data.geocode.geocodes.map(geocode => geocode)
    setState({
      result: {
        status: "success",
        query,
        geocodes: geocodes,
      },
    })
  }

}


export default function SpotsListItemLabelForm({ state, setState, updateSpot,...props }: SubProps): React.ReactElement {

  logObject(props,'props')

  function geocodeOptions(): DropdownOption[] | undefined {
    if (state.result.geocodes) {
      return state.result.geocodes.map(geocode => {
        return {
          key: geocode.label,
          text: geocode.label,
          image: <Flag name={geocode.countryCode.toLowerCase() as FlagNameValues}/>,
          value: geocode.label,
        }
      })
    }
  }

  function locationErrorMessage(): string | undefined {
    if (props.createGuideStore.showSpotsErrors && !props.spot.location) {
      return "Set a location"
    }
    if (state.result.status === "error") {
      return state.result.error || "Something went wrong"
    }
  }


  function clear() {
    setState({
      result: {
        status: "clear",
      },
    })
  }

  async function updateLocation(geocode: Geocode) {

    setState({
      result: {
        ...state.result,
        status: "updating",
      },
    })

    await updateSpot({
      long: geocode.longitude,
      lat: geocode.latitude,
      country: geocode.countryCode,
      location: geocode.label,
    })
    const success = await props.createGuideStore.updateSpotLocation(props.spotIndex, geocode)


    if (success) {
      clear()
    } else {
      setState({
        result: {
          status: "error",
          error: success.message || "Something went wrong",
        },
      })
    }
  }

  async function updateQuery(query: string | undefined) {
    if (!query || query.length === 0) {
      clear()
    } else {
      setState({
        result: {
          status: "loading",
        },
      })
    }
    await REQUEST(props.spot.key, query, setState)
  }

  const { result } = state

  return <Form.Dropdown
    label={"Location"}
    selection
    floating
    error={locationErrorMessage()}
    options={geocodeOptions()}
    placeholder='Search location'
    closeOnChange
    clearable
    icon={"search"}
    onFocus={async () => {
      await updateSpot({
        long: undefined,
        lat: undefined,
        country: undefined,
        location: undefined,
      })
    }}
    text={props.spot.location}
    open={!!result.geocodes && !props.spot.location}
    loading={result.status === "loading"}
    onChange={async (event, { value }) => {
      if (result.geocodes) {
        const geocode = result.geocodes.find(geocode => {
          return geocode.label === value
        })
        await updateLocation(geocode)
      }
    }}
    onSearchChange={async (_, { searchQuery }) => {
      await updateQuery(searchQuery)
    }}
    search={(props, two) => {
      return props
    }}
  />
}