import React from "react"
import FeedStore from "model/FeedStore"
import FeedList from "./FeedList"

type Props = {
  owner: string
}

export default class Feed extends React.Component<Props> {

  feedStore: FeedStore = new FeedStore()

  componentDidMount() {
    this.feedStore.subscribe(this.props.owner)
  }

  componentWillUnmount() {
    this.feedStore.unsubscribe()
  }

  render() {
    return <FeedList
      feedStore={this.feedStore}/>
  }
}

