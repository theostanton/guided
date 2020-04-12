import * as React from "react"
import GuideStore from "model/GuideStore"
import { Provider } from "mobx-react"
import Content from "./content"

import { RouteProps } from "react-router"
import { logObject } from "../../../utils/logger"

interface Props extends RouteProps {
  slug?: string
  owner?: string
  guideId?: string
}

export default class GuideComponent extends React.Component<Props> {

  guideStore: GuideStore

  constructor(props) {
    super(props)
    logObject(props, "GuideComponent.props")
    if (props.guideId) {
      this.guideStore = GuideStore.fromId(props.guideId!)
    } else if (props.slug && props.owner) {
      this.guideStore = GuideStore.fromSlug(props.owner!, props.slug!)
    } else {
      console.error("GuideComponent Need a slug+owner or id !")
    }
  }

  componentDidMount(): void {
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