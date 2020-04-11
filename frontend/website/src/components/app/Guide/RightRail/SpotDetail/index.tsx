import {
  RemoveSpotDocument,
  RemoveSpotMutationVariables,
  SpotFragment,
} from "api/generated"
import * as React from "react"
import {
  Breadcrumb, BreadcrumbDivider,
  BreadcrumbSection,
  Button,
  Flag,
  FlagNameValues,
  Grid,
  GridColumn,
  Header,
  Icon,
} from "semantic-ui-react"
import { client } from "api"
import { logJson } from "utils/logger"
import NightsForm from "./NightsForm"
import { CSSProperties } from "react"
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider"

type Props = {
  spot: SpotFragment
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

    if (true) {
      return <>Some spot</>
    }

    const spot = this.props.spot

    const style: CSSProperties = {
      backgroundColor: "white",
    }


    return <Grid key={spot.id} style={style}>
      <Grid.Row>
        <GridColumn width={10}>
          <Header as='h2'>
            <Icon name={"marker"} color={"orange"}/>
            <Header.Content>
              {spot.name}
              <Header.Subheader><Flag name={spot.country!.toLowerCase() as FlagNameValues}/>
                {`${spot.name === spot.location ? "" : spot.location + ", "}${spot.country}`}</Header.Subheader>
            </Header.Content>
          </Header>
        </GridColumn>
        <GridColumn width={6} floated={"right"}>
          <Button.Group icon floated={"right"}>
            <Button icon='trash' onClick={async () => {
              await this.removeSpot()
            }}/>
            <Button icon='close' onClick={this.props.close}/>
          </Button.Group>
        </GridColumn>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <NightsForm spot={spot}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  }
}

