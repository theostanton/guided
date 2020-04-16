import * as React from "react"
import { Button, Grid, Header } from "semantic-ui-react"
import AuthStore from "model/AuthStore"
import { inject, observer } from "mobx-react"
import Feed from "./Feed"
import GuideComponent from "./Guide"
import { GuideInfoFragment } from "../../api/generated"

import { navigate, RouteComponentProps } from "@reach/router"
import { CSSProperties } from "react"
import OverlayStore from "model/OverlayStore"
import FollowingList from "../FollowerList/FollowingList"
import GuidesList from "./Guides/GuidesList"

interface Props extends RouteComponentProps {
  authStore?: AuthStore
  overlayStore?: OverlayStore
}

type State = {
  selectedGuide: GuideInfoFragment | undefined
}

@inject("authStore", "overlayStore")
@observer
export default class DashboardComponent extends React.Component<Props, State> {

  state: State = {
    selectedGuide: undefined,
  }

  guides(): React.ReactElement {

    if (!this.props.authStore.owner) {
      return <div/>
    }

    const listStyle: CSSProperties = {
      maxHeight: "50px",
      height: "50px",
    }

    //TODO learn css
    return <Grid style={{ marginTop: "1em" }}>
      <Grid.Column width={9}>
        <Grid columns={2}>
          <Grid.Column verticalAlign={"bottom"}>
            <Header as={"h1"}>My guides</Header>
          </Grid.Column>
          <Grid.Column width={4} floated={"right"}>
            <Button floated={"right"} onClick={async () => {
              await navigate("/create")
            }}>Create</Button>
          </Grid.Column>
        </Grid>
        <GuidesList owner={this.props.authStore.owner}/>
      </Grid.Column>
      <Grid.Column style={listStyle} width={7}>
        <Header as={"h1"}>Feed</Header>
        <Feed/>
        <Header as={"h1"}>Following</Header>
        <FollowingList username={this.props.authStore.owner} type={"following"}/>
        <Header as={"h1"}>Followers</Header>
        <FollowingList username={this.props.authStore.owner} type={"followers"}/>
      </Grid.Column>
    </Grid>
  }

  guide(): React.ReactElement {
    return <GuideComponent guideId={this.state.selectedGuide.id} slug={this.state.selectedGuide.slug}/>
  }

  render(): React.ReactElement {
    return this.props.authStore.isLoggedIn === true && this.state.selectedGuide ? this.guide() : this.guides()
  }

}