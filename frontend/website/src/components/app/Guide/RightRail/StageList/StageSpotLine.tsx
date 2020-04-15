import React, { CSSProperties } from "react"
import { SpotFragment } from "api/generated"
import GuideStore from "model/GuideStore"
import { inject, observer } from "mobx-react"
import { SPOT_COLOURS, RIDE_COLOURS, RideColourStatus, SpotColourStatus } from "utils/colours"
import { log } from "../../../../../utils/logger"


export type ListPosition = "first" | "middle" | "last" | "only"

type Props = {
  spot: SpotFragment
  guideStore?: GuideStore
  position: ListPosition
}

type State = {}

@inject("guideStore")
@observer
export default class StageSpotLine extends React.Component<Props, State> {

  get arrivalStatus(): RideColourStatus | undefined {
    const arrivalRide = this.props.guideStore?.rides.find(ride => {
      return ride.toSpot.id === this.props.spot.id
    })
    if (arrivalRide) {
      return this.props.guideStore!.rideStatus(arrivalRide.id)
    }
  }

  get departureStatus(): RideColourStatus | undefined {
    const departureRide = this.props.guideStore?.rides.find(ride => {
      return ride.fromSpot.id === this.props.spot.id
    })
    if (departureRide) {
      return this.props.guideStore.rideStatus(departureRide.id)
    }
  }

  get spotStatus(): SpotColourStatus {
    return this.props.guideStore.spotStatus(this.props.spot.id)
  }

  spotFill(status: SpotColourStatus): string {
    switch (status) {
      case "start":
      case "end":
        return SPOT_COLOURS[status]
      default:
        return "white"
    }
  }

  spotStroke(status: SpotColourStatus): string {
    switch (status) {
      case "start":
      case "end":
        return RIDE_COLOURS["selected"]
      default:
        return SPOT_COLOURS[status]
    }
  }

  render(): React.ReactElement {

    if (!this.props.guideStore) {
      return null
    }

    const arrivalStatus = this.arrivalStatus
    const departureStatus = this.departureStatus
    const spotStatus = this.spotStatus

    return <svg style={{ width: "100%", height: "100%" }}>
      {["middle", "last"].includes(this.props.position) && <line x1={"50%"}
                                                                 x2={"50%"}
                                                                 y1={"0%"}
                                                                 y2={"50%"}
                                                                 strokeDasharray={arrivalStatus ? null : 5}
                                                                 stroke={RIDE_COLOURS[arrivalStatus || "dim"]}
                                                                 strokeWidth="5"/>}
      {["middle", "first"].includes(this.props.position) && <line x1={"50%"}
                                                                  x2={"50%"}
                                                                  y1={"50%"}
                                                                  y2={"100%"}
                                                                  strokeDasharray={departureStatus ? null : 5}
                                                                  strokeDashoffset={"100%"}
                                                                  stroke={RIDE_COLOURS[departureStatus || "dim"]}
                                                                  strokeWidth="5"/>}
      <circle cx={"50%"}
              cy={"50%"}
              r={10}
              fill={this.spotFill(spotStatus)}
              stroke={this.spotStroke(spotStatus)}
              strokeWidth={5}/>
    </svg>
  }

}