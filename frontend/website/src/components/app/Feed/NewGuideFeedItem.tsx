import React from "react"

import { Feed, Header, Icon } from "semantic-ui-react"
import { GuideFeedItemFragment } from "api/generated"
import { humanDistance, humanDuration, humanElapsed, plural } from "utils/human"
import { Link } from "gatsby"

type Props = {
  item: GuideFeedItemFragment
}

export default class NewGuideFeedItem extends React.Component<Props> {

  render(): React.ReactElement {
    const item = this.props.item

    const distanceMeters = item.rides.nodes.reduce((acc, ride) => {
      return acc + ride.distanceMeters || 0
    }, 0)

    const durationSeconds = item.rides.nodes.reduce((acc, ride) => {
      return acc + ride.durationSeconds || 0
    }, 0)

    const nights = item.spots.nodes.reduce((acc, ride) => {
      return acc + ride.nights
    }, 0)

    return <Feed.Event key={item.id}>
      <Feed.Label icon={<Icon name={"user"} color={item.owner.colour?.toLowerCase()}/>}/>
      <Feed.Content>
        <Feed.Summary>
          <Link to={`/${item.owner.username}`}>{item.owner.username}</Link> created <Link
          to={`/${item.owner.username}/${item.slug}`}>{item.title}</Link>
        </Feed.Summary>
        <Feed.Meta>
          <Icon name='road'/>{humanDistance(distanceMeters, true, true)}
          <Icon name='clock'/>{humanDuration(durationSeconds, true)}
          <Icon name='moon'/>{nights} {plural("night", nights)}
        </Feed.Meta>
        <Feed.Extra>
          <Feed.Date>{humanElapsed(new Date(item.created))}</Feed.Date>
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  }

}