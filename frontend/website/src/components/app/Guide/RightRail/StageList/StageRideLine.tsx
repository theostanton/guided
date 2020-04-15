import React, { CSSProperties } from "react"
import { RideFragment, SpotFragment } from "api/generated"
import { RIDE_COLOURS, RideColourStatus } from "utils/colours"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"

type Props = {
  ride: RideFragment | null
  guideStore?: GuideStore
}

type State = {}

const WIDTH = 100

@inject("guideStore")
@observer
export default class StageRideLine extends React.Component<Props, State> {

  get status(): RideColourStatus | null {
    if (this.props.ride) {
      return this.props.guideStore.rideStatus(this.props.ride.id)
    } else {
      return null
    }
  }

  render(): React.ReactElement {

    const styles: { [key in string]: CSSProperties } = {
      root: {
        width: WIDTH,
        height: "5em",
      },
      topLine: {
        backgroundColor: "red",
        top: 0,
        bottom: 0,
        width: 5,
        left: "50%",
      },
    }

    const status = this.status

    function strokeColour(): string {
      if (status) {
        return RIDE_COLOURS[status]
      } else {
        return RIDE_COLOURS["dim"]
      }
    }

    return <div style={styles.root}>
      <svg style={{ height: "100%" }}>
        <line x1={WIDTH / 2}
              x2={WIDTH / 2}
              y1={"0%"}
              y2={"100%"}
              strokeDasharray={status ? null : 5}
              strokeWidth={5}
              stroke={RIDE_COLOURS[status || "dim"]}/>
      </svg>
    </div>
  }

}