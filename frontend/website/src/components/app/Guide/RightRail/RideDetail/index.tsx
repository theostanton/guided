import * as React from "react"
import {
  Button,
  Divider,
  Flag,
  FlagNameValues,
  Grid,
  GridColumn,
  Header,
  Icon,
  Item, Statistic,
  StatisticGroup,
} from "semantic-ui-react"
import { RideFragment, SpotFragment, StageFragment } from "api/generated"
import { humanDate, humanDistance, humanDuration } from "utils/human"
import GuideStore from "../../../../../model/GuideStore"

type Props = {
  ride: RideFragment
  guideStore: GuideStore
  close: () => void
}

export default class RideDetail extends React.Component<Props> {

  spot(position: "from" | "to", spot: SpotFragment): React.ReactElement {

    const markerColour = position === "from" ? "green" : "red"

    return <Grid.Row columns='2' stretched>
      <Grid.Column width={"12"}>
        <Header as='h2'>
          <Icon name={spot.locked ? "flag" : "flag outline"} color={markerColour}/>
          <Header.Content>
            {spot.name}
            <Header.Subheader><Flag name={spot.country!.toLowerCase() as FlagNameValues}/>
              {`${spot.name === spot.location ? "" : spot.location + ", "}${spot.country}`}</Header.Subheader>
          </Header.Content>
        </Header>
      </Grid.Column>
      <Grid.Column verticalAlign={"middle"} floated={"right"} width={"4"} onClick={() => {
        this.props.guideStore.selectSpot(spot.id)
      }}>
        <Icon name="arrow alternate circle right outline" fitted={true} size={"large"}/>
      </Grid.Column>
    </Grid.Row>
  }

  stats(): React.ReactElement {

    const ride = this.props.ride

    const stats: { label: string, value: string | number }[] = [{
      label: "Miles",
      value: humanDistance(ride.distanceMeters, false),
    }, {
      label: "Hours",
      value: Math.ceil(ride.durationSeconds / 60 / 60),
    }]

    if (ride.date) {
      stats.push({
        label: "Date",
        value: humanDate(ride.date),
      })
    }

    return <StatisticGroup widths='2' size={"tiny"}>
      {stats.map(stat => {
        return <Statistic label={stat.label} value={stat.value}/>
      })}
    </StatisticGroup>
  }

  render(): React.ReactElement {

    function Wrap({ children }): React.ReactElement {
      return <Grid.Row>
        <Grid.Column>
          {children}
        </Grid.Column>
      </Grid.Row>
    }

    const ride = this.props.ride
    return <Grid>
      <Grid.Row columns='equal' stretched>
        <GridColumn width={6} floated={"right"}>
          <Button.Group icon size={"tiny"} floated={"right"}>
            <Button icon='close' onClick={this.props.close}/>
          </Button.Group>
        </GridColumn>
      </Grid.Row>

      {this.spot("from", ride.fromSpot!)}
      <Wrap>
        <Divider horizontal>to</Divider>
      </Wrap>
      {this.spot("to", ride.toSpot!)}

      <Wrap>
        <Divider/>
      </Wrap>

      <Wrap>
        {this.stats()}
      </Wrap>

      <Wrap>
        <Divider/>
      </Wrap>

      <Wrap>
        <Button icon='flag checkered' labelPosition='right' fluid content='Mark as completed'/>
      </Wrap>
    </Grid>
  }
}

