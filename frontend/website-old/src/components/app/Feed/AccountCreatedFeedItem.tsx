import React from "react"
import { Feed, Icon } from "semantic-ui-react"
import { FeedEventFragment } from "api/generated"
import { Link } from "@reach/router"
import { humanElapsed } from "utils/human"

type NewGuideFeedEvent = Pick<FeedEventFragment, "timestamp" | "user">

type Props = {
  event: NewGuideFeedEvent
}

export default class AccountCreatedFeedItem extends React.Component<Props> {

  render(): React.ReactElement {
    const user = this.props.event.user
    return <Feed.Event key={this.props.event.timestamp}>
      <Feed.Label style={{ paddingTop: "0.5em" }}
                  icon={<Icon name={"child"} color={user.colour?.toLowerCase()}/>}/>
      <Feed.Content>
        <Feed.Summary>
          <Link to={`/${user.username}`}>You</Link> joined Riders Bible
        </Feed.Summary>
        <Feed.Extra>
          <Feed.Date>{humanElapsed(new Date(this.props.event.timestamp))}</Feed.Date>
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  }
}