import * as React from "react"
import GuideStore from "model/GuideStore"
import { Provider } from "mobx-react"
import Content from "./content"

export type Props = {
  slug: string
  owner: string
  close: () => void
}

export default class GuideComponent extends React.Component<Props> {

  guideStore: GuideStore

  constructor(props) {
    super(props)
    this.guideStore = new GuideStore(props.slug, props.owner)
  }

  componentDidMount(): void {
    this.guideStore.subscribe()
  }

  componentWillUnmount(): void {
    this.guideStore.unsubscribe()
  }

  render() {
    return <Provider guideStore={this.guideStore}>
      < Content close={this.props.close}/>
    </Provider>
  }
}