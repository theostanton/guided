import { useAllGuideTitlesForUserQuery } from "@guided/types"
import { Card, List, Message, Segment } from "semantic-ui-react"
import randomKey from "../../../utils/randomKey"
import * as React from "react"
import client from "api/client"

export default function GuidesList({ owner }: { owner: string }) {

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

  if (data!.allGuides!.nodes.length === 0) {
    return <Segment>No guides</Segment>
  }

  const items = data!.allGuides!.nodes.map(guide => {
    const key = guide!.id || randomKey()
    return (
      <Card
        key={key}
        href={`/app/guides/${guide!.slug}`}>
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