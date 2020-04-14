import React from "react"

import { Feed, Icon } from "semantic-ui-react"
import { Link } from "@reach/router"
import { FollowFeedItemFragment } from "api/generated"
import { humanElapsed } from "utils/human"

type Props = {
  self: string
  item: FollowFeedItemFragment
}

export default class NewFollowFeedItem extends React.Component<Props> {

  render(): React.ReactElement {
    const item = this.props.item

    const followerUsername = item.follower.username
    const followedUsername = item.followed.username
    return <Feed.Event key={item.created}>
      <Feed.Label icon={<Icon name={"user"} color={item.follower.colour?.toLowerCase()}/>}/>
      <Feed.Content>
        <Feed.Summary>
          <Link
            to={`/${followerUsername}`}>{this.props.self === followerUsername ? "You" : followerUsername}</Link> followed <Link
          to={`/${followedUsername}`}>{this.props.self === followedUsername ? "You" : followedUsername}</Link>
        </Feed.Summary>
        <Feed.Extra>
          <Feed.Date>{humanElapsed(new Date(item.created))}</Feed.Date>
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  }

}