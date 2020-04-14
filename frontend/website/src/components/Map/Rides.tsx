import React from "react"
import GuideStore from "model/GuideStore"
import { inject, observer } from "mobx-react"
import { LineState, RideLine } from "./RideLine"
import { RideFragment } from "api/generated"

type Props = {
  guideStore?: GuideStore
}


@inject("guideStore")
@observer
export class Rides extends React.Component<Props> {

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  render(): React.ReactElement[] {
    const items: React.ReactElement[] = []
    const distinctIds: string[] = []

    const selectedId = this.props.guideStore?.selectedId
    const highlightedId = this.props.guideStore?.highlightedId

    function add(ride: RideFragment) {
      let state: LineState
      switch (true) {
        case selectedId === ride!.id:
          state = "selected"
          break
        case highlightedId === ride!.id:
          state = "highlighted"
          break
        case selectedId && selectedId.startsWith("ride"):
          state = "unfocused"
          break
        case highlightedId && highlightedId.startsWith("ride"):
          state = "unfocused"
          break
        default:
          state = "none"
      }
      items.push(<RideLine ride={ride!} state={state} key={ride.id}/>)
    }

    this.guideStore.rides
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
      .forEach(ride => {
        if (!(ride!.id in [selectedId, highlightedId])) {
          add(ride!)
        }
      })

    if (this.guideStore.selectedRide) {
      add(this.guideStore.selectedRide!)
    }

    if (this.guideStore.highlightedRide) {
      add(this.guideStore.highlightedRide!)
    }

    return items
  }
}