import { Button, Grid, GridColumn, Icon } from "semantic-ui-react"
import * as React from "react"
import { ReactElement } from "react"
import { SubProps } from "./index"
import { humanDistance, plural } from "utils/human"
import { UI_COLOURS } from "utils/colours"
import { iconForTransportType } from "utils/icons"
import { log } from "../../../../../utils/logger"

type Props = SubProps

type State = {
  addingSpot: boolean
}

export default class SpotsListItemContextualForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      addingSpot: false,
    }
  }

  get isRelevant(): boolean {
    const stage = this.props.spot.beginsStage

    if (!stage) {
      return false
    }

    if (this.props.createGuideStore.guide.isCircular && this.props.spotIndex === this.props.createGuideStore.spots.length - 1) {
      // Is last spot before 'Back to start' spot
      return true
    }

    const nextSpotId = this.props.createGuideStore.spots.length > this.props.spotIndex + 1
      && this.props.createGuideStore.spots[this.props.spotIndex + 1].spotId

    if (!nextSpotId) {
      log("nextSpotId===null")
      return false
    }

    log(`stage.toSpot=${stage.toSpot} nextSpotId=${nextSpotId}`)

    return stage.toSpot === nextSpotId
  }

  render(): React.ReactElement {


    const relevant = this.isRelevant
    log(`render() relevant=${relevant}`)
    if (!relevant) {
      return <div style={{
        padding: "0.5em",
        textAlign: "center",
        marginBottom: 0,
        marginTop: 0,
        marginLeft: "0.3em",
        marginRight: "0.3em",
        backgroundColor: UI_COLOURS.lightGrey,
      }}>
        <p>Set locations for ride summary</p>
      </div>
    }

    const stage = this.props.spot.beginsStage
    const isComputing = stage.status === "COMPUTING"

    const distanceMeters = stage.ridesByStage.nodes.reduce((acc, ride) => {
      return acc + ride.distanceMeters
    }, 0)

    const durationSeconds = stage.ridesByStage.nodes.reduce((acc, ride) => {
      return acc + ride.durationSeconds
    }, 0)

    function loading(append: string): ReactElement {
      return <p><Icon name='circle notched' fitted loading/> {append}</p>
    }


    return <div style={{
      padding: "0.5em",
      marginLeft: "0.3em",
      marginRight: "0.3em",
      marginBottom: 0,
      marginTop: 0,
      backgroundColor: UI_COLOURS.lightGrey,
    }}>
      <Grid columns={16} stretched style={{ padding: "0 1em", margin: 0 }}>

        <GridColumn width={5}/>

        <GridColumn width={2} verticalAlign={"middle"} textAlign={"center"} style={{ padding: 0 }}>
          {isComputing ? loading("hours") :
            <p><Icon name='clock'/>{`${Math.ceil(durationSeconds / 60 / 60)} hours`}</p>}
        </GridColumn>

        <GridColumn width={2} verticalAlign={"middle"} textAlign={"center"} style={{ padding: 0 }}>
          {isComputing ? loading("miles") :
            <p><Icon name='road'/>{humanDistance(distanceMeters, true, true)}</p>}
        </GridColumn>

        <GridColumn width={2} verticalAlign={"middle"} textAlign={"center"} style={{ padding: 0 }}>
          {isComputing ? loading("rides") :
            <p><Icon
              name={iconForTransportType(this.props.createGuideStore.guide.transportType)}/>{`${stage.ridesByStage.totalCount} ${plural("ride", stage.ridesByStage.totalCount)}`}
            </p>}
        </GridColumn>


        <GridColumn width={4}/>
        <GridColumn width={1} style={{
          padding: 0,
        }}>
          <Button loading={this.state.addingSpot}
                  circular
                  basic
                  size={"mini"}
                  icon={"plus"}
                  onClick={async () => {
                    this.setState({
                      addingSpot: true,
                    })
                    await this.props.createGuideStore.addSpot(this.props.spotIndex + 1)
                    this.setState({
                      addingSpot: false,
                    })
                  }}/>
        </GridColumn>
      </Grid>
    </div>
  }
}