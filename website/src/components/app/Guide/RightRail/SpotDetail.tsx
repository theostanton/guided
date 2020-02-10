import { SpotByGuideFragment } from "api/generated"
import * as React from "react"
import { Grid, GridColumn, Header } from "semantic-ui-react"

type Props = {
  spot: SpotByGuideFragment
}

export default class SpotDetail extends React.Component<Props>{

  render(): React.ReactElement {
    const spot = this.props.spot
    return <Grid padded={true}>
      <Grid.Row columns='equal' stretched verticalAlign='bottom'>
        <GridColumn>
          <Header as='h1'>{spot.label}</Header>
        </GridColumn>
      </Grid.Row>
    </Grid>
  }
}

