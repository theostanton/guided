import * as React from "react"
import GuideStore from "model/GuideStore"
import { Provider } from "mobx-react"
import Content from "./content"
import { logJson } from "../../../utils/logger"

export type Props = {
  slug: string
  guideId?: string
}

export default class GuideComponent extends React.Component<Props> {

  guideStore: GuideStore

  constructor(props) {
    super(props)
    logJson(props, "GuideComponent constructor(props)")
    if (props.guideId) {
      this.guideStore = GuideStore.fromId(props.guideId!)
    } else if (props.slug) {
      this.guideStore = GuideStore.fromSlug(props.slug!)
    } else {
      console.error("GuideComponent Need a slug or id!")
    }
  }

  componentDidMount(): void {
    logJson(this.props, "GuideComponent componentDidMount props")
    this.guideStore.subscribe()
  }

  componentWillUnmount(): void {
    this.guideStore.unsubscribe()
  }

  render() {
    return <Provider guideStore={this.guideStore}>
      <Content/>
    </Provider>
  }
}