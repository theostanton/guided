import { inject, observer } from "mobx-react"
import * as React from "react"
import CreateGuideStore from "model/CreateGuideStore"
import CreateGuideDetails from "./CreateGuideDetails"
import CreateGuideSpots from "./CreateGuideSpots"
import CreateGuideMembers from "./CreateGuideMembers"

type Props = {
  createGuideStore?: CreateGuideStore
}

@inject("createGuideStore")
@observer
export default class CreateGuideContent extends React.Component<Props> {

  get createGuideStore(): CreateGuideStore {
    return this.props.createGuideStore!
  }

  render(): React.ReactElement {
    const stage = this.createGuideStore.stage
    switch (stage) {
      case "details":
        return <CreateGuideDetails/>
      case "locations":
        return <CreateGuideSpots/>
      case "members":
        return <CreateGuideMembers/>
    }
  }
}