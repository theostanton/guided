import { StageFragment } from "api/generated"
import React from "react"
import { Icon, Label, List } from "semantic-ui-react"

type Props = {
  stage: StageFragment
}
export default class LoadingStageItem extends React.Component<Props> {

  render(): React.ReactElement {
    const { stage } = this.props
    return <List.Item
      key={stage.id}
      value={stage.id}
    >
      <List.Icon size='large' verticalAlign='top'>
        <Icon name='motorcycle'/>
      </List.Icon>
      <List.Content>
        <List.Header>
          {stage.name}
        </List.Header>
      </List.Content>
      <Label>
        <Icon name='sync'/>Routing...
      </Label>
    </List.Item>
  }
}