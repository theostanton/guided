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
    return <Step.Group ordered attached={'top'}>
      <Step completed={stage !== "details"} active={stage === "details"} onClick={() => {
        this.createGuideStore.goToStage("details")
      }
      }>
        <Step.Content>
          <Step.Title>Details</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>

      <Step completed={stage === "members"} active={stage === "locations"} onClick={() => {
        this.createGuideStore.goToStage("locations")
      }
      }>
        <Step.Content>
          <Step.Title>Locations</Step.Title>
          <Step.Description>Choose key locations for your guide</Step.Description>
        </Step.Content>
      </Step>

      <Step active={stage === "members"} onClick={() => {
        this.createGuideStore.goToStage("members")
      }
      }>
        <Step.Content>
          <Step.Title>Members</Step.Title>
          <Step.Description>Choose others users to join you</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  }
}