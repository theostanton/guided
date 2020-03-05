import { useAllGuideTitlesForUserQuery, useAllGuideTitlesForUserSubscription } from "api/generated"
import { Card, List, Message, Segment } from "semantic-ui-react"
import randomKey from "utils/randomKey"
import * as React from "react"
import { log } from "utils/logger"

type Props = {
  owner: string,
  onClick: (guideId: string) => void
}
export default function GuidesList({ owner, onClick }: Props) {

  const { data, loading, error } = useAllGuideTitlesForUserSubscription({
    variables: {
      owner,
    },
    shouldResubscribe: true,
    skip: false,
    onSubscriptionComplete: () => {
      log("onSubscriptionComplete")
      return true
    },
  })

  log("Tick")

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
        value={guide!.slug}
        key={key}>
        <Card.Content>
          <Card.Header>{guide ? guide.title : "Error"}</Card.Header>
        </Card.Content>
      </Card>
    )
  })
  return <List
    onItemClick={(_, { value: guideSlug }) => {
      onClick(guideSlug)
    }}
    items={items}
    divided
  />
}