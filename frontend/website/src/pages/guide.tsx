import * as React from "react"
import AuthStore from "model/AuthStore"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import GuideComponent from "components/app/Guide/index"
import { log, logJson } from "@guided/logger"
import { Router } from "@reach/router"

type Props = {
  slug: string
  guideStore: GuideStore
  authStore: AuthStore
}

@inject("authStore", "guideStore")
@observer
export default class GuidePage extends React.Component<Props> {

  componentDidMount(): void {
    if (this.props.slug) {
      this.props.guideStore.subscribe(
        this.props.slug,
        this.props.authStore.owner,
      )
    }
  }

  componentWillUnmount(): void {
    this.props.guideStore.unsubscribe()
  }

  render(): React.ReactElement | undefined {
    logJson(this.props, "render this.props")
    logJson(this.state, "render this.state")
    return (
      <Router>
        <GuideComponent path="/guide/:slug"/>
      </Router>

    )
  }

}