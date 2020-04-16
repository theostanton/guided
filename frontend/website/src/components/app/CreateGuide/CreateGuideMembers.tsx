import { inject, observer } from "mobx-react"
import * as React from "react"
import CreateGuideStore from "model/CreateGuideStore"
import { Header } from "semantic-ui-react"

type Props = {
  createGuideStore?: CreateGuideStore
}

@inject("createGuideStore")
@observer
export default class CreateGuideMembers extends React.Component<Props> {

  get createGuideStore(): CreateGuideStore {
    return this.props.createGuideStore!
  }

  render(): React.ReactElement {
    return <div>
      <Header>Members</Header>

    </div>
  }
}