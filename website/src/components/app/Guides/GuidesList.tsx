import { useAllGuideTitlesForUserQuery } from "api/generated"
import { Card, List, Message, Segment } from "semantic-ui-react"
import randomKey from "utils/randomKey"
import * as React from "react"
import client from "api/client"

export default function GuidesList({ owner }: { owner: string, inc: number }) {

  const { data, loading, error } = useAllGuideTitlesForUserQuery({
    client,
    variables: {
      owner,
    },
  })

  if (loading) {
    return <Segment loading/>
  }

  if (error) {
    return <Segment>
      <Message error>{error.message}</Message>
    </Segment>
  }

  let guides = data!.allGuides!.nodes
  if (guides.length === 0) {
    return <Segment>No guides</Segment>
  }

  const items = guides.map(guide => {
    const key = guide!.id || randomKey()
    return (
      <Card
        key={key}
        href={`/app/guides/${guide?.slug}`}>
        <Card.Content>
          <Card.Header>{guide ? guide.title : "Error"}</Card.Header>
        </Card.Content>
      </Card>
    )
  })
  return <List
    items={items}
    divided
  />
}