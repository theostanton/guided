import * as React from "react"
import GuideComponent from "components/app/Guide"

type Props = {
  slug: string
}

export default class GuidePage extends React.Component<Props> {

  render(): React.ReactElement | undefined {
    return <GuideComponent slug={this.props.slug}/>
  }

}