import * as React from "react"
import {
  Button,
  Grid,
  Statistic,
  GridRow,
  StatisticGroup, Segment, ButtonGroup,
} from "semantic-ui-react"
import { client } from "api"
import { DeleteGuideDocument, DeleteGuideMutationVariables } from "api/generated"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import AuthStore from "model/AuthStore"
import StartDateForm from "./StartDateForm"
import EditGuideTitleForm from "./EditGuideTitleForm"
import { ReactElement } from "react"
import {navigate} from "@reach/router"
import { humanDate, humanDistance } from "utils/human"

type Props = {
  guideStore?: GuideStore
  authStore?: AuthStore
}

type State = {}

@inject("guideStore", "authStore")
@observer
export default class LeftRailComponent extends React.Component<Props, State> {

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  async deleteGuide(guideId: string): Promise<void> {
    const variables: DeleteGuideMutationVariables = {
      guideId,
    }
    await client.mutate({
      mutation: DeleteGuideDocument,
      variables,
    })
    await navigate(`/${this.props.authStore.owner}/guides`)
  }

  statistics(): ReactElement {


    const isComputing = this.guideStore.stages.some(stage => {
      return stage.status === "COMPUTING"
    })

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
        value: isComputing ? "..." : this.guideStore.spots.reduce((acc, spot) => {
          return acc + spot.nights
        }, 1),
      },
      {
        label: "Borders",
        value: isComputing ? "..." : this.guideStore.rides.reduce((acc, ride) => {
          if (ride.hasBorder) {
            return acc + 1
          } else {
            return acc
          }
        }, 0),
      },
      {
        label: "Miles",
        value: isComputing ? "..." : humanDistance(meters, false),
      },
      {
        label: "Hours",
        value: isComputing ? "..." : Math.ceil(seconds / 60 / 60),
      },
    ]

    let startDate = this.guideStore.guide.startDate
    stats.push({
      label: "Start",
      value: startDate ? humanDate(startDate) : "...",
    })
    if (startDate) {
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
    } else {
      stats.push({
        label: "End",
        value: "...",
      })
    }

    return <StatisticGroup widths='2' size={"tiny"}>
      {stats.map(stat => {
        return <Statistic label={stat.label} value={stat.value}/>
      })}

    </StatisticGroup>
  }

  render(): React.ReactElement {
    const guide = this.guideStore?.guide

    if (!guide) {
      return <Segment loading/>
    }

    return <Segment style={{ backgroundColor: "#ffffff" }}>
      <Grid divided={"vertically"} padded={false}>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column width={"10"}>
            <EditGuideTitleForm guide={guide} edit={false}/>
          </Grid.Column>
          <Grid.Column width={"6"}>
            <ButtonGroup floated={"right"}>
              <Button icon='trash' onClick={async () => {
                await this.deleteGuide(guide.id)
              }}/>
              <Button icon='close' onClick={() => {
                window.history.back()
              }}/>
            </ButtonGroup>
          </Grid.Column>
        </Grid.Row>
        <GridRow>
          <Grid.Column>
            {this.statistics.bind(this)()}
          </Grid.Column>
        </GridRow>
        <GridRow>
          <Grid.Column>
            <StartDateForm guideId={guide.id} startDate={guide.startDate}/>
          </Grid.Column>
        </GridRow>
      </Grid>
    </Segment>
  }
}