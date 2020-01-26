import * as React from "react"
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  List,
  MenuMenu,
  Segment,
  GridRow,
  GridColumn,
  Rail, Menu,
} from "semantic-ui-react"

import { API, graphqlOperation } from "aws-amplify"
import * as queries from "gql/queries"
import { deleteGuide } from "../../graphql/mutations"
import { DeleteGuideMutationVariables, ListGuidesQuery, ListGuidesQueryVariables } from "../../graphql/API"
import { Guide } from "../../types"
import { onUpdateGuide } from "../../graphql/subscriptions"
import Map from "../Map"
import { navigate } from "gatsby"
import { logout } from "../../utils/auth"
import AppMenuComponent from "../AppMenu"

type Props = {
  slug: string
}

type State = {
  guide: Guide | undefined
}

export default class GuideComponent extends React.Component<Props, State> {

  state: State = {
    guide: undefined,
  }

  private subscription: any | undefined

  async fetchGuide(): Promise<void> {

    console.log("props")
    console.log(this.props)

    try {
      const variables: ListGuidesQueryVariables = {
        filter: {
          slug: {
            eq: this.props.slug,
          },
        },
      }
      const response: { data: ListGuidesQuery } = await API.graphql(graphqlOperation(queries.listGuides, variables))
      console.log(response)
      const guide: Guide = response.data.listGuides!.items![0]!
      this.setState({ guide })
    } catch (response) {
      console.error("Error!?")
      console.error(response)
    }
  }

  componentDidMount(): void {

    this.subscription = API.graphql(
      graphqlOperation(onUpdateGuide),
    ).subscribe({
      next: async (data: any) => {
        console.log("onUpdateGuide")
        console.log(data)
      },
    })

    this.fetchGuide().then()
  }

  async deleteGuide(): Promise<void> {

    const variables: DeleteGuideMutationVariables = {
      input: {
        id: this.state.guide?.id!,
      },
    }
    const response = await API.graphql(graphqlOperation(deleteGuide, variables))
    console.log(response)
    await navigate("app/guides")
  }

  componentWillUnmount(): void {
    this.subscription?.unsubscribe()
  }

  render(): React.ReactElement | undefined {
    const guide = this.state.guide

    return <div>
      <div style={{
        position: "fixed", /* Sit on top of the page content */
        width: "100%", /* Full width (cover the whole page) */
        height: "100%", /* Full height (cover the whole page) */
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2, /* Specify a stack order in case you're using a different order for other elements */
      }}>
        <Map>
          <Rail position='left'>LEFT</Rail>
        </Map>
      </div>


      <div style={{
        position: "fixed",
        marginLeft: "2em",
        marginRight: "2em",
        top: "1em",
        left: "25%",
        right: "25%",
        bottom: 0,
        zIndex: 3, /* Specify a stack order in case you're using a different order for other elements */
      }}>
        <AppMenuComponent/>
      </div>
      {guide && <div style={{
        position: "fixed",
        height: "100%",
        width: "25%",
        marginTop: "1em",
        marginLeft: "1em",
        paddingTop: "1em",
        paddingBottom: "1em",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 3, /* Specify a stack order in case you're using a different order for other elements */
      }}>
        <div style={{ backgroundColor: "#ffffff", height: "100%" }}>
          <Grid>
            <GridRow>
              <GridColumn width={14}>
                <Header style={{ paddingTop: "1em", paddingBottom: "0.5em" }} as='h1'>{guide!.title} </Header>
              </GridColumn>
              <GridColumn width={2} style={{ padding: "1em" }}>
                <Button icon='trash' onClick={async () => {
                  await this.deleteGuide()
                }}/>
              </GridColumn>
            </GridRow>

          </Grid>
        </div>
      </div>
      }
    </div>
  }

}