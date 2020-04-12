import {
  RemoveSpotDocument,
  RemoveSpotMutationVariables,
  SpotFragment,
} from "api/generated"
import * as React from "react"
import {
  Breadcrumb, BreadcrumbDivider,
  BreadcrumbSection,
  Button, ButtonGroup,
  Flag,
  FlagNameValues,
  Grid,
  GridColumn,
  Header,
  Icon, Label,
} from "semantic-ui-react"
import { client } from "api"
import { logJson } from "utils/logger"
import NightsForm from "./NightsForm"
import { CSSProperties } from "react"
import { plural } from "../../../../../utils/human"

type Props = {
  spot: SpotFragment
  isOwner: boolean
  close: () => void
}

type State = {}

export default class SpotDetail extends React.Component<Props, State> {


  async removeSpot(): Promise<void> {
    const variables: RemoveSpotMutationVariables = {
      spotId: this.props.spot.id,
    }
    const result = await client.mutate({
      mutation: RemoveSpotDocument,
      variables,
    })
    logJson(result.data, "result")
    this.props.close()
  }

  render(): React.ReactElement {

    const spot = this.props.spot
    const isOwner = this.props.isOwner

    const style: CSSProperties = {
      backgroundColor: "white",
    }

    let Nights: React.ReactElement
    if (isOwner) {
      Nights = <Grid.Row>
        <Grid.Column>
          <NightsForm spot={spot}/>
        </Grid.Column>
      </Grid.Row>
    } else {
      Nights = <Grid.Row>
        <Grid.Column>
          <Label> <Icon name='moon'/>{spot.nights} {plural("night", spot.nights)}</Label>
        </Grid.Column>
      </Grid.Row>
    }

    return <Grid key={spot.id} style={style}>
      <Grid.Row>
        <Grid.Column width={10}>
          <Header as='h2'>
            <Icon name={"marker"} color={"orange"}/>
            <Header.Content>
              {spot.name}
              <Header.Subheader><Flag name={spot.country!.toLowerCase() as FlagNameValues}/>
                {`${spot.name === spot.location ? "" : spot.location + ", "}${spot.country}`}</Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>
        <Grid.Column width={2} floated={"right"}>
          <ButtonGroup floated={"right"}>
            {isOwner && <Button icon='trash' onClick={async () => {
              await this.removeSpot()
            }}/>}
            <Button icon='close' onClick={this.props.close}/>
          </ButtonGroup>
        </Grid.Column>
      </Grid.Row>
      {Nights}
    </Grid>
  }
}

