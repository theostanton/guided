import {
  OwnersGuideInfosSubscription, useNotOwnersGuideInfosSubscription,
  useOwnersGuideInfosSubscription,
} from "api/generated"
import { Card, List, Message, Segment, Label, Icon, Divider } from "semantic-ui-react"
import randomKey from "utils/randomKey"
import * as React from "react"
import { log } from "utils/logger"
import { subscriptionClient } from "api/client"
import { humanDate } from "../../../utils/human"

type Props = {
  owner: string,
  onClick: (guideId: string) => void
}

export function MyGuidesList({ owner, onClick }: Props) {

  const { data, loading, error } = useOwnersGuideInfosSubscription({
    // @ts-ignore
    client: subscriptionClient,
    variables: {
      owner,
    },
    onSubscriptionComplete: () => {
      log("onSubscriptionComplete")
      return true
    },
  })

  return <GuidesList isMine={true} data={data} loading={loading} error={error} onClick={onClick}/>
}

export function SharedGuidesList({ owner, onClick }: Props) {

  const { data, loading, error } = useNotOwnersGuideInfosSubscription({
    // @ts-ignore
    client: subscriptionClient,
    variables: {
      owner,
    },
    onSubscriptionComplete: () => {
      log("onSubscriptionComplete")
      return true
    },
  })

  return <GuidesList isMine={false} data={data} loading={loading} error={error} onClick={onClick}/>
}

function GuidesList({ isMine, data, loading, error, onClick }: { isMine: boolean, data: OwnersGuideInfosSubscription, loading: boolean, error: any, onClick: (guideId: string) => void }) {

  if (loading) {
    return <Segment loading/>
  }

  if (error) {
    return <Segment>
      <Message error>{error.message}</Message>
    </Segment>
  }

  let guides = data!.guides!.nodes
  if (guides.length === 0) {
    return <Segment>No guides</Segment>
  }

  const items = guides.map(guide => {
    const key = guide!.id || randomKey()

    const Extra = <><Icon name='user'/><Label>12 miles</Label></>

    return (
      <Card
        value={guide!.id}
        key={key}
        extra={Extra}>
        <Card.Content>
          <Card.Header>{guide.title}</Card.Header>
          {!isMine && <Card.Meta>by {guide.owner}</Card.Meta>}
        </Card.Content>
        <Card.Content>
          <Label color={"olive"}>Planning</Label>
          {guide.startDate && <Label>
            <Icon name='calendar'/>{`${humanDate(guide.startDate)}`}
          </Label>}
        </Card.Content>
      </Card>
    )
  })
  return <List
    onItemClick={(_, { value: guideId }) => {
      onClick(guideId)
    }}
    items={items}
    divided
  />
}