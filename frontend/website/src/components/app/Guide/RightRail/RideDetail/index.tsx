import * as React from "react"
import { Grid, GridColumn, Header } from "semantic-ui-react"
import { RideFragment } from "api/generated"

type Props = {
  ride: RideFragment
}

export default class RideDetail extends React.Component<Props> {

  render(): React.ReactElement {
    const ride = this.props.ride
    return <Grid padded={true}>
      <Grid.Row columns='equal' stretched verticalAlign='bottom'>
        <GridColumn>
          <Header as='h1'>From {ride.fromSpot!.label}</Header>
          <Header as='h1'>To {ride.toSpot!.label}</Header>
        </GridColumn>
      </Grid.Row>
    </Grid>
  }
}

