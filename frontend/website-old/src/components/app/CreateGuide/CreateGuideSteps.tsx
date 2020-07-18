import { inject, observer } from "mobx-react"
import * as React from "react"
import { Step } from "semantic-ui-react"
import CreateGuideStore from "model/CreateGuideStore"

type Props = {
  createGuideStore?: CreateGuideStore
}

@inject("createGuideStore")
@observer
export default class CreateGuideSteps extends React.Component<Props> {

  get createGuideStore(): CreateGuideStore {
    return this.props.createGuideStore!
  }

  render(): React.ReactElement {
    const stage = this.createGuideStore.stage

    return <Step.Group ordered attached={"top"}>

      <Step completed={stage !== "details"} active={stage === "details"} onClick={() => {
        this.createGuideStore.goToStage("details")
      }
      }>
        <Step.Content>
          <Step.Title>Details</Step.Title>
          {/*<Step.Description>Choose your shipping options</Step.Description>*/}
        </Step.Content>
      </Step>

      <Step completed={["members", "save"].includes(stage)} active={stage === "locations"} onClick={() => {
        if (stage === "details") {
          this.createGuideStore.goToStage("locations")
        } else {
          this.createGuideStore.goToStage("locations")
        }
      }
      }>
        <Step.Content>
          <Step.Title>Locations</Step.Title>
          {/*<Step.Description>Choose key locations for your guide</Step.Description>*/}
        </Step.Content>
      </Step>

      <Step active={stage === "members"} completed={stage === "save"}>
        <Step.Content>
          <Step.Title>Members</Step.Title>
          {/*<Step.Description>Choose others users to join you</Step.Description>*/}
        </Step.Content>
      </Step>

      <Step active={stage === "save"} onClick={() => {
        if (stage === "details") {
        } else if (stage === "locations" && !this.createGuideStore.validateSpots()) {
          this.createGuideStore.showSpotsErrors = true
        } else {
          this.createGuideStore.goToStage("save")
        }
      }
      }>
        <Step.Content>
          <Step.Title>Save</Step.Title>
          {/*<Step.Description>Get directions for your guide</Step.Description>*/}
        </Step.Content>
      </Step>
    </Step.Group>
  }
}