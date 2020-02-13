import {
  RemoveSpotDocument,
  RemoveSpotMutationVariables,
  SpotByGuideFragment,
} from "api/generated"
import * as React from "react"
import { Button, Form, Grid, GridColumn, Header, Icon, Segment } from "semantic-ui-react"
import { client } from "api"
import { logJson } from "@guided/logger"

type Props = {
  spot: SpotByGuideFragment
  close: () => void
}

export default class SpotDetail extends React.Component<Props> {

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
    return <Grid padded={true}>
      <Grid.Row columns='equal' stretched verticalAlign='bottom'>
        <GridColumn>
          <Header as='h1'>{spot.label}</Header>
        </GridColumn>
        <GridColumn width={"6"} floated={"right"}>
          <Button.Group icon size={"tiny"}>
            <Button icon={"edit"}>
            </Button>
            <Button icon='trash' onClick={async () => {
              await this.removeSpot()
            }}/>
          </Button.Group>
        </GridColumn>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Button.Group icon>
            <Button size={"tiny"}>
              <Icon name='minus'/>
            </Button>
            <Button>
              <Icon name='plus'/>
            </Button>
          </Button.Group>
        </Grid.Column>
        <Grid.Column verticalAlign={"middle"} stretched={true}>
          <Header textAlign={"left"}>5 nights</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  }
}

