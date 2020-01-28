import * as React from "react"
import {
  Button,
  Header,
  Segment,
  Rail,
} from "semantic-ui-react"

import { API, graphqlOperation } from "aws-amplify"

import * as GQL from "api"

import Map from "components/Map"
import { navigate } from "gatsby"
import AppMenu from "components/app/Menu"
import AuthStore from "../../models/AuthStore"
import { inject, observer } from "mobx-react"
import GuideStore from "../../models/GuideStore"

type Props = {
  guideStore: GuideStore
  authStore: AuthStore
  slug?: string
}

type State = {}

@inject("authStore", "guideStore")
@observer
export default class GuideComponent extends React.Component<Props, State> {

  componentDidMount(): void {
    this.props.guideStore.subscribe(
      this.props.slug!,
      this.props.authStore.owner,
    )
  }

  async deleteGuide(): Promise<void> {

    const variables: GQL.Generated.DeleteGuideMutationVariables = {
      guideId: this.props.guideStore.guide?.id!,
    }
    const response = await API.graphql(graphqlOperation(GQL.Mutations.DeleteGuide, variables))
    console.log(response)
    await navigate("app/guides")
  }

  componentWillUnmount(): void {
    this.props.guideStore.unsubscribe()
  }

  render(): React.ReactElement | undefined {
    const guide = this.props.guideStore.guide

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
        zIndex: 3, /* Specify a stack order in case you're using a different order for other elements */
      }}>
        <AppMenu/>
      </div>

      {guide && <div style={{
        position: "fixed",
        height: "100%",
        width: "25%",
        marginTop: "1em",
        marginLeft: "1em",
        paddingBottom: "2em",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 3, /* Specify a stack order in case you're using a different order for other elements */
      }}>

        <Segment padded={false} style={{ backgroundColor: "#ffffff", height: "100%" }}>
          <Button floated={"right"} icon='trash' onClick={async () => {
            await this.deleteGuide()
          }}/>
          <Header style={{ paddingTop: "1em", paddingBottom: "0.5em" }} as='h1'>{guide!.title} </Header>
        </Segment>

      </div>
      }
    </div>
  }

}