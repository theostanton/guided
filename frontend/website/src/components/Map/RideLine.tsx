import React from "react"
import { Layer, Source } from "react-map-gl"

type Props = {
  ride: {
    id: string,
    pathUrl: string
  }
  state: LineState
}

type Style = {
  paint: {
    "line-width": number,
    "line-color": string
  }
}

export type LineState = "selected" | "highlighted" | "unfocused" | "none";

export class RideLine extends React.Component<Props> {

  get style(): Style {
    switch (this.props.state) {
      case "selected":
        return {
          paint: {
            "line-color": "#000000",
            "line-width": 5,
          },
        }
      case "highlighted":
        return {
          paint: {
            "line-color": "#555555",
            "line-width": 5,
          },
        }
      case "unfocused":
        return {
          paint: {
            "line-color": "#555555",
            "line-width": 1,
          },
        }
      case "none":
        return {
          paint: {
            "line-color": "#b25757",
            "line-width": 5,
          },
        }
    }

  }

  render(): React.ReactNode {
    const ride = this.props.ride
    if (!ride.pathUrl) {
      return []
    }
    const layerId = `ride-layer-${ride.id}`
    const sourceId = `ride-source-${ride.id}`
    return (
      [
        <Source key={sourceId} id={sourceId} type='geojson' data={ride.pathUrl}/>,
        <Layer key={layerId} type={"line"} source={sourceId} {...this.style}/>,
      ]
    )
  }
}