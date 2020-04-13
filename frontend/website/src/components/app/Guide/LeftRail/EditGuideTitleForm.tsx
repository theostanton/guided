import React from "react"
import { GuideFragment } from "api/generated"
import { Header } from "semantic-ui-react"
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader"
import { Link } from "@reach/router"

type Props = {
  guide: GuideFragment
  isOwner: boolean
}

type State = {}

export default class EditGuideTitleForm extends React.Component<Props, State> {

  render(): React.ReactElement {
    const guide = this.props.guide
    if (this.props.isOwner) {
      return <Header as='h2'>{guide.title}</Header>
    } else {
      return <Header
        as='h2'>{guide.title}<HeaderSubHeader>by <Link to={`/${guide.owner}`}>{guide.owner}</Link></HeaderSubHeader></Header>
    }
  }

}