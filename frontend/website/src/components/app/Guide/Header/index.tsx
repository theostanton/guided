import React from "react"
import { Icon, Message } from "semantic-ui-react"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import { StageStatus } from "../../../../api/generated"

type Status = "loading" | "noSpots" | "oneSpot" | "suggestedStops" | "calculating"

type Props = {
  guideStore?: GuideStore
}

type State = {
  status: Status | undefined
}

function lightbulb(header: string, content: string): React.ReactElement {
  return <Message icon color={"yellow"}>
    <Icon name={"lightbulb"}/>
    <Message.Content>
      <Message.Header>{header}</Message.Header>{content}
    </Message.Content></Message>
}

function progress(header: string, content: string): React.ReactElement {
  return <Message icon>
    <Icon name={"circle notched"} loading/>
    <Message.Content>
      <Message.Header>{header}</Message.Header>{content}
    </Message.Content></Message>
}

function loading(): React.ReactElement {
  return <Message icon>
    <Icon name={"circle notched"} loading/>
    <Message.Content>Loading
    </Message.Content>
  </Message>
}

@inject("guideStore")
@observer
export default class GuideHeader extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      status: undefined,
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    const status = this.status()
    if (status !== this.state.status) {
      this.setState({
        status,
      })
    }
  }

  status(): Status | undefined {

    const guide = this.props.guideStore.guide

    if (!guide) {
      return "loading"
    }

    const stages = this.props.guideStore!.stages
    const spots = this.props.guideStore!.spots
    const rides = this.props.guideStore!.rides

    if (stages.some(stage => {
      return stage.status === StageStatus.Computing
    })) {
      return "calculating"
    }

    if (spots.length === 0) {
      return "noSpots"
    }

    if (spots.length === 1) {
      return "oneSpot"
    }

    if (rides.length === 2 && spots.length > 2) {
      return "suggestedStops"
    }

  }

  render(): React.ReactNode | null {


    switch (this.state.status) {
      case "noSpots":
        return lightbulb("Choose your start point", "Click anywhere on the map to add your first location")
      case "oneSpot":
        return lightbulb("Choose your next point", "Click anywhere on the map to add your second location")
      case "suggestedStops":
        return lightbulb("That's a long ride!", "We've suggested some locations to stop along the way. These will change if you move the flags either end of the ride.")
      case "calculating":
        return progress("Calculating", "Plotting your new rides")
      case "loading":
        return loading()
    }

    return <div/>

  }

}