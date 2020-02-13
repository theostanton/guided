import React from "react"
import GuideStore from "../../model/GuideStore"
import { inject, observer } from "mobx-react"
import { RideByGuideFragment } from "../../api/generated"
import { Layer, Source } from "react-map-gl"
import { log } from "@guided/logger"

type Props = {
  guideStore?: GuideStore
}


@inject("guideStore")
@observer
export class Rides extends React.Component<Props, {}> {

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  createLayer(ride: RideByGuideFragment): React.ReactElement[] {
    const layerId = `ride-layer-${ride.id}`
    const sourceId = `ride-source-${ride.id}`

    const style = {
      paint: {
        "line-width": 1,
        "line-color": "#444444",
      },
    }

    return (
      [
        <Source key={sourceId} id={sourceId} type='geojson' data={ride.path}/>,
        <Layer key={layerId} type={"line"} source={sourceId} {...style}/>,
      ]
    )
  }

  render() {
    return this.guideStore.guide!.ridesByGuide!.nodes
      .map(ride => {
        return this.createLayer(ride!)
      })
  }
}