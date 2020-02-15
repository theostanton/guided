import React, { ReactElement } from "react"
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
        "line-color": "#0000ff",
      },
    }
    const highlightedStyle = {
      paint: {
        "line-width": 5,
        "line-color": "green",
      },
    }
    const selectedStyle = {
      paint: {
        "line-width": 5,
        "line-color": "red",
      },
    }

    const isHighlighted = this.guideStore.highlightedId === ride.id
    const isSelected = this.guideStore.selectedId === ride.id

    let layer: ReactElement

    switch (true) {
      case isSelected:
        layer = <Layer key={layerId} type={"line"} source={sourceId} {...selectedStyle}/>
        break
      case isHighlighted:
        layer = <Layer key={layerId} type={"line"} source={sourceId} {...highlightedStyle}/>
        break
      default:
        layer = <Layer key={layerId} type={"line"} source={sourceId} {...style}/>
    }

    return (
      [
        <Source key={sourceId} id={sourceId} type='geojson' data={ride.path}/>,
        layer,
      ]
    )
  }

  render() {
    const distinctIds: string[] = []
    return this.guideStore.guide!.ridesByGuide!.nodes
      .filter(ride => {
        if (!ride) {
          return false
        }
        if (distinctIds.includes(ride.id)) {
          return false
        }
        distinctIds.push(ride.id)
        return true
      })
      .map(ride => {
        return this.createLayer(ride!)
      })
  }
}