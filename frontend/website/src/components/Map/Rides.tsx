import React from "react"
import GuideStore from "model/GuideStore"
import { inject, observer } from "mobx-react"
import { RideLine } from "./RideLine"
import { RideFragment } from "api/generated"

type Props = {
  guideStore?: GuideStore
}


@inject("guideStore")
@observer
export class Rides extends React.Component<Props> {

  render(): React.ReactElement[] {
    const items: React.ReactElement[] = []

    const selectedId = this.props.guideStore?.selectedId
    const highlightedId = this.props.guideStore?.highlightedId
    const guideStore = this.props.guideStore

    function add(ride: RideFragment) {
      items.push(<RideLine ride={ride!} key={`line-${ride.id}`}/>)
    }

    guideStore.rides.forEach(ride => {
      if (ride.id !== selectedId && ride.id !== highlightedId) {
        add(ride)
      }
    })

    if (guideStore.highlightedRide) {
      add(guideStore.highlightedRide!)
    }

    if (guideStore.selectedRide) {
      add(guideStore.selectedRide!)
    }


    return items
  }
}