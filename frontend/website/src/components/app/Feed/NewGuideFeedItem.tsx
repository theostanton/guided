import React from "react"
import { Feed, Icon } from "semantic-ui-react"
import { FeedEventFragment } from "api/generated"
import { Link } from "@reach/router"
import { humanDate, humanDistance, humanDuration, humanElapsed, plural } from "../../../utils/human"
import { Icons } from "../../../utils/icons"

type NewGuideFeedEvent = Pick<FeedEventFragment, "timestamp" | "guide" | "user">

type Props = {
  event: NewGuideFeedEvent
}

export default class NewGuideFeedItem extends React.Component<Props> {

  render(): React.ReactElement {
    const guide = this.props.event.guide
    const nights = guide.spots.nodes.reduce((acc, spot) => {
      return acc + spot.nights
    }, 0)
    return <Feed.Event key={this.props.event.timestamp}>
      <Feed.Label style={{ paddingTop: "0.5em" }}
                  icon={<Icon name={Icons.Guide}
                              size={"huge"}
                              color={guide.owner.colour?.toLowerCase()}/>}/>
      <Feed.Content>
        <Feed.Summary>
          <Link to={`/${guide.owner.username}`}>{guide.owner.username}</Link> created <Link
          to={`/${guide.owner.username}/${guide.slug}`}>{guide.title}</Link>
        </Feed.Summary>
        <Feed.Meta>
          {guide.startDate && <><Icon name='calendar'/>{humanDate(guide.startDate)}</>}
          <Icon name='moon'/>{nights} {plural("night", nights)}
          <Icon name='road'/>{humanDistance(guide.distanceMeters, true, true)}
          <Icon name='clock'/>{humanDuration(guide.durationSeconds, true)}
          <Icon name='map outline'/>{guide.countries.length} {guide.countries.length === 1 ? "country" : "countries"}
        </Feed.Meta>
        <Feed.Extra>
          <Feed.Date>{humanElapsed(new Date(guide.created))}</Feed.Date>
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  }
}