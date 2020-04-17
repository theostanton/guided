import { inject, observer } from "mobx-react"
import * as React from "react"
import CreateGuideStore from "model/CreateGuideStore"
import { Form, Header, Icon, Message } from "semantic-ui-react"
import { navigate } from "@reach/router"
import { client } from "api"
import {
  CreateGuideWithSpotInput,
  CreateGuideWithSpotsDocument,
  CreateGuideWithSpotsMutation,
  CreateGuideWithSpotsMutationResult,
  CreateGuideWithSpotsMutationVariables,
} from "api/generated"
import { ReactElement } from "react"
import { FetchResult } from "apollo-boost"


type Props = {
  createGuideStore?: CreateGuideStore
}

type State = {
  status: "creating" | "computing" | "errors" | "none"
  guideId: string | undefined
  errors: { message: string }[] | undefined
}

@inject("createGuideStore")
@observer
export default class CreateGuideSave extends React.Component<Props, State> {


  constructor(props) {
    super(props)
    this.state = {
      status: "none",
      guideId: undefined,
      errors: undefined,
    }
  }

  get createGuideStore(): CreateGuideStore {
    return this.props.createGuideStore!
  }

  async create() {

    const { title, startDate, isCircular, maxHoursPerRide, transportType: type } = this.createGuideStore
    const spots: CreateGuideWithSpotInput[] = this.createGuideStore.spots.map(spot => {
      return {
        nights:spot.nights,
        label:spot.label,
        location:spot.location,
        country:spot.country,
        long:spot.long,
        lat:spot.lat
      }
    })

    const errors: { message: string }[] = []

    function validate(condition: boolean, message: string) {
      if (!condition) {
        errors.push({
          message,
        })
      }
    }

    validate(title && title.length > 0, "No title")
    validate(!!spots, "No spots")
    validate(isCircular !== undefined, "No isCircular")
    validate(!!type, "No type")
    validate(!!maxHoursPerRide && maxHoursPerRide > 0, "No maxHoursPerRide")

    if (errors.length > 0) {
      this.setState({
        status: "errors",
        errors,
      })
      return
    } else {
      this.setState({
        status: "creating",
        errors: undefined,
      })
    }

    const variables: CreateGuideWithSpotsMutationVariables = {
      input: {
        spots,
        startDate,
        isCircular,
        maxHoursPerRide,
        title,
        type,
      },
    }

    let result: FetchResult<CreateGuideWithSpotsMutation>
    try {
      result = await client.mutate<CreateGuideWithSpotsMutation>({
        mutation: CreateGuideWithSpotsDocument,
        variables,
      })
    } catch (e) {
      this.setState({
        status: "errors",
        errors: [{
          message: e.message,
        }],
      })
    }

    if (result.errors) {
      this.setState({
        status: "errors",
        errors: result.errors.map(error => {
          return {
            message: error.message,
          }
        }),
      })
    } else if (result.data.createGuideWithSpots.success) {
      this.setState({
        status: "computing",
        guideId: result.data.createGuideWithSpots.guideId,
        errors: undefined,
      })
    } else {
      this.setState({
        status: "errors",
        errors: [{
          message: result.data.createGuideWithSpots.error || "Something went wrong",
        }],
      })
    }
  }

  errorMessages(): React.ReactElement | undefined {
    if (this.state.errors) {
      return <div>
        {this.state.errors.map(error => {
          return <Message error>{error.message}</Message>
        })}
      </div>
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

      <Header>
        Save
      </Header>
      {this.errorMessages()}
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
          disabled={this.state.status === "errors"}
          loading={this.state.status === "creating"}
          onClick={async () => {

            switch (this.state.status) {
              case "none":
                await this.create()
                break
              case "computing":
                const [owner, slug] = this.state.guideId.split("_")
                await navigate(`${owner}/${slug}`)
            }
            if (this.state.status === "none") {
            }
          }
          }>
          {this.state.status === "computing" ? "View" : "Save"}
        </Form.Button>

      </div>
    </div>
  }
}