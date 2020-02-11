import { DeleteSpotDocument, DeleteSpotMutation, DeleteSpotMutationVariables, SpotByGuideFragment } from "api/generated"
import * as React from "react"
import { Button, Grid, GridColumn, Header } from "semantic-ui-react"
import { client } from "api"
import { logJson } from "@guided/logger"

type Props = {
  spot: SpotByGuideFragment
}

export default class SpotDetail extends React.Component<Props> {

  async deleteSpot(): Promise<void> {
    const variables: DeleteSpotMutationVariables = {
      spotId: this.props.spot.id,
    }
    const result = await client.mutate({
      mutation: DeleteSpotDocument,
      variables,
    })
    logJson(result.data, "result")
  }

  render(): React.ReactElement {
    const spot = this.props.spot
    return <Grid padded={true}>
      <Grid.Row columns='equal' stretched verticalAlign='bottom'>
        <GridColumn>
          <Header as='h1'>{spot.label}</Header>
        </GridColumn>
        <GridColumn width={"4"} floated={"right"}>
          <Button icon='trash' onClick={async () => {
            await this.deleteSpot()
          }}/>
        </GridColumn>
      </Grid.Row>
    </Grid>
  }
}

