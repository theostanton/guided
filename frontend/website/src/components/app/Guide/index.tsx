import * as React from "react"
import GuideStore from "model/GuideStore"
import { inject, observer, Provider } from "mobx-react"
import Content from "./content"

 import { RouteComponentProps } from "@reach/router"
import AuthStore from "model/AuthStore"

interface Props extends RouteComponentProps {
  slug?: string
  owner?: string
  guideId?: string
  authStore?: AuthStore
}


@inject("authStore")
@observer
export default class GuideComponent extends React.Component<Props> {

  guideStore: GuideStore

  constructor(props) {
    super(props)
    const self = this.props.authStore.owner
    if (props.guideId) {
      this.guideStore = GuideStore.fromId(props.guideId!, self)
    } else if (props.slug && props.owner) {
      this.guideStore = GuideStore.fromSlug(props.owner!, props.slug!, self)
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