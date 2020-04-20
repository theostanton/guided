import React from "react"
import { Feed, Icon } from "semantic-ui-react"
import { FeedEventFragment } from "api/generated"
import { Link } from "@reach/router"
import { humanElapsed } from "../../../utils/human"
import { Icons } from "../../../utils/icons"

type NewFollowFeedEvent = Pick<FeedEventFragment, "timestamp" | "user">

type Props = {
  event: NewFollowFeedEvent
}

export default class NewFollowFeedItem extends React.Component<Props> {

  render(): React.ReactElement {
    const follower = this.props.event.user
    return <Feed.Event key={this.props.event.timestamp}>
      <Feed.Label style={{ paddingTop: "0.5em" }}
                  icon={<Icon name={Icons.Follow} color={follower.colour?.toLowerCase()}/>}/>
      <Feed.Content>

        <Feed.Summary>
          <Link to={`/${follower.username}`}>{follower.username}</Link> started following you
        </Feed.Summary>
        <Feed.Extra>
          <Feed.Date>{humanElapsed(new Date(this.props.event.timestamp))}</Feed.Date>
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  }
}