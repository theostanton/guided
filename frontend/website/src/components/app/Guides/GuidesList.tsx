import {
  OwnersGuideInfosSubscription, useNotOwnersGuideInfosSubscription,
  useOwnersGuideInfosSubscription,
} from "api/generated"
import { Card, List, Message, Segment } from "semantic-ui-react"
import randomKey from "utils/randomKey"
import * as React from "react"
import { log } from "utils/logger"
import { subscriptionClient } from "api/client"

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
    return (
      <Card
        value={guide!.id}
        key={key}>
        <Card.Content>
          <Card.Header>{guide ? guide.title : "Error"}</Card.Header>
          {guide && !isMine && <Card.Meta>by {guide.owner}</Card.Meta>}
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