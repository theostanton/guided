import React from "react"
import { GuideFragment } from "api/generated"
import { Header } from "semantic-ui-react"

type Props = {
  guide: GuideFragment
  edit: boolean
}

type State = {
  value: string
  edit: boolean
}

export default class EditGuideTitleForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      value: props.guide.title,
      edit: props.edit,
    }
  }

  render(): React.ReactElement {
    if (this.state.edit) {
      return <Header as='h2'>{this.state.value}!</Header>
    } else {
      return <Header as='h2'>{this.state.value}!</Header>
    }
  }

}