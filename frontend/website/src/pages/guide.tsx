import * as React from "react"
import { logJson } from "@guided/logger"

type Props = {
  slug: string
}

export default class GuidePage extends React.Component<Props> {

  // render(): React.ReactElement | undefined {
  //   logJson(this.props, "render this.props")
  //   logJson(this.state, "render this.state")
  //   return <GuideComponent slug={this.props.slug}/>
  // }

}