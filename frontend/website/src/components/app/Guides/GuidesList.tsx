import { Card, List, Message, Segment, Label, Icon, Button } from "semantic-ui-react"
import randomKey from "utils/randomKey"
import * as React from "react"
import { log } from "utils/logger"
import { subscriptionClient } from "api/client"
import { humanDate } from "utils/human"
import { navigate } from "@reach/router"
import { GuideInfosSubscription, useGuideInfosSubscription } from "api/generated"

type Props = {
  owner: string,
}

export function MyGuidesList({ owner }: Props) {

  const { data, loading, error } = useGuideInfosSubscription({
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

  return <GuidesList data={data} loading={loading} error={error}/>
}

function GuidesList({ data, loading, error }: { data: GuideInfosSubscription, loading: boolean, error: any }) {

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
        value={`/${guide.owner}/${guide.slug}`}
        key={key}
        fluid
        extra={Extra}>
        <Card.Content>
          <Card.Header>{guide.title}</Card.Header>
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
    onItemClick={async (_, { value: route }) => {
      await navigate(route)
    }}
    items={items}
    divided
  />
}