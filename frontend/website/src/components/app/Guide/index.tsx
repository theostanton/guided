import * as React from "react"
import GuideStore from "model/GuideStore"
import { Provider } from "mobx-react"
import Content from "./content"

export type Props = {
  slug?: string
  guideId?: string
  close: () => void
}

export default class GuideComponent extends React.Component<Props> {

  guideStore: GuideStore

  constructor(props) {
    super(props)
    if (props.guideId) {
      this.guideStore = GuideStore.fromId(props.guideId!)
    } else if (props.slug) {
      this.guideStore = GuideStore.fromSlug(props.slug!)
    } else {
      throw new Error('Need a slug or id!')
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
      < Content close={this.props.close}/>
    </Provider>
  }
}