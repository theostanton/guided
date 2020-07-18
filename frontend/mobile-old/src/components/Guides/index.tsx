import React from "react"
import { observer, Provider } from "mobx-react"
import GuidesStore from "model/GuidesStore"
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

  async componentDidMount() {
    await this.guidesStore.fetch()
  }


  render() {
    return <Provider guidesStore={this.guidesStore}>
      <GuidesList fetch={this.guidesStore.fetch}/>
    </Provider>
  }
}