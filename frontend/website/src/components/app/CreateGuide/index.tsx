import { inject, Provider } from "mobx-react"
import * as React from "react"
import AuthStore from "model/AuthStore"
import { Grid, Segment } from "semantic-ui-react"
import CreateGuideStore from "model/CreateGuideStore"
import { RouteComponentProps } from "@reach/router"
import CreateGuideSteps from "./CreateGuideSteps"
import CreateGuideContent from "./CreateGuideContent"
import { GeocodesStore } from "./CreateGuideSpots/GeocodesStore"
import { Helmet } from "react-helmet"

interface Props extends RouteComponentProps {
  authStore?: AuthStore
  slug?: string | undefined
}

@inject("authStore")
export default class CreateGuide extends React.Component<Props> {

  createGuideStore: CreateGuideStore
  geocodeStore: GeocodesStore

  constructor(props) {
    super(props)
    const slug = props.slug ? `${props.authStore.owner}_${props.slug}` : undefined
    this.createGuideStore = new CreateGuideStore(slug)
    this.geocodeStore = new GeocodesStore()
  }

  componentDidMount(): void {
    if (this.props.slug) {
      this.createGuideStore.subscribe()
    }
  }

  componentWillUnmount(): void {
    this.createGuideStore.unsubscribe()
  }

  render(): React.ReactElement {
    return <Provider createGuideStore={this.createGuideStore} geocodeStore={this.geocodeStore}>
      <Helmet title={`Create - Riders Bible`} defer={true}/>
      <Segment padded={false} style={{ padding: 0, minHeight: "800px" }}>
        <CreateGuideSteps/>
        <CreateGuideContent/>
      </Segment>
    </Provider>
  }
}