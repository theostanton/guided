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

    const status = this.status

    return <div style={{
      height: "100%",
    }}>
      <svg style={{
        width: "100%",
        height: "100%",
      }}>
        <line x1={"50%"}
              x2={"50%"}
              y1={"0%"}
              y2={"100%"}
              strokeDasharray={status ? null : 5}
              strokeWidth={5}
              stroke={RIDE_COLOURS[status || "dim"]}/>
      </svg>
    </div>
  }

}