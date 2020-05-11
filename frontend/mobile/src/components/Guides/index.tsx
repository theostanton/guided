import React from "react"
import { Provider } from "mobx-react"
import GuidesStore from "../../model/GuidesStore"
import GuidesList from "./GuidesList"

type Props = {
  owner: string
}

export default class Guides extends React.Component<Props> {

  private guidesStore: GuidesStore

  constructor(props: Props) {
    super(props)
    this.guidesStore = new GuidesStore(props.owner)
  }

  componentDidMount() {
    this.guidesStore.subscribe()
  }

  componentWillUnmount() {
    this.guidesStore.unsubscribe()
  }


  render() {
    return <Provider guidesStore={this.guidesStore}>
      <GuidesList/>
    </Provider>
  }
}