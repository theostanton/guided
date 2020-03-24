import * as React from "react"
import {
  Button,
  Grid,
  GridColumn,
  Statistic,
  GridRow,
  Header,
  StatisticGroup, Segment, ButtonGroup,
} from "semantic-ui-react"

import { client } from "api"
import { DeleteGuideDocument, DeleteGuideMutationVariables } from "api/generated"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import StartDateForm from "./StartDateForm"
import EditGuideTitleForm from "./EditGuideTitleForm"
import { ReactElement } from "react"
import { humanDate, humanDistance } from "utils/human"

type Props = {
  guideStore?: GuideStore
  close: () => void
}

type State = {
}

@inject("guideStore")
@observer
export default class LeftRailComponent extends React.Component<Props, State> {

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  async deleteGuide(guideId: string): Promise<void> {
    this.props.close()
    const variables: DeleteGuideMutationVariables = {
      guideId,
    }
    await client.mutate({
      mutation: DeleteGuideDocument,
      variables,
    })
  }

  statistics(): ReactElement {
    const meters = this.guideStore.rides.reduce((acc, ride) => {
      return acc + ride.distanceMeters
    }, 0)
    const seconds = this.guideStore.rides.reduce((acc, ride) => {
      return acc + ride.durationSeconds
    }, 0)
    const stats: { label: string, value: string | number }[] = [
      {
        label: "Rides",
        value: this.guideStore.rides.length,
      },
      {
        label: "Spots",
        value: this.guideStore.spots.length,
      },
      {
        label: "Days",
        value: this.guideStore.spots.reduce((acc, spot) => {
          return acc + spot.nights
        }, 1),
      },
      {
        label: "Borders",
        value: this.guideStore.rides.reduce((acc, ride) => {
          if (ride.hasBorder) {
            return acc + 1
          } else {
            return acc
          }
        }, 0),
      },
      {
        label: "Miles",
        value: humanDistance(meters, false),
      },
      {
        label: "Hours",
        value: Math.ceil(seconds / 60 / 60),
      },
    ]

    let startDate = this.guideStore.guide.startDate
    if (startDate) {
      stats.push({
        label: "Start",
        value: humanDate(startDate),
      })
      const lastDate = this.guideStore.rides.reduce((acc, ride) => {
        if (acc < ride.date) {
          return ride.date
        } else {
          return acc
        }
      }, startDate)
      stats.push({
        label: "End",
        value: humanDate(lastDate),
      })
    }

    return <StatisticGroup widths='2' size={"tiny"}>
      {stats.map(stat => {
        return <Statistic label={stat.label} value={stat.value}/>
      })}

    </StatisticGroup>
  }

  render(): React.ReactElement {
    const guide = this.guideStore.guide

    if (!guide) {
      return <Segment loading/>
    }

    return <Segment style={{ backgroundColor: "#ffffff" }}>
      <Grid divided={"vertically"} padded={false}>
        <Grid.Row verticalAlign='middle'>
          <GridColumn width={"10"}>
            <EditGuideTitleForm guide={guide} edit={false}/>
          </GridColumn>
          <GridColumn width={"6"}>
            <ButtonGroup floated={"right"}>
              <Button icon='trash' onClick={async () => {
                await this.deleteGuide(guide.id)
              }}/>
              <Button icon='close' onClick={this.props.close}/>
            </ButtonGroup>
          </GridColumn>
        </Grid.Row>
        <GridRow>
          <GridColumn>
            {this.statistics.bind(this)()}
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <StartDateForm guideId={guide.id} startDate={guide.startDate}/>
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  }
}