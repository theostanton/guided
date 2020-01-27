import * as React from "react"

import * as GQL from "api"
import { Header, Segment } from "semantic-ui-react"
import { Connect } from "aws-amplify-react"
import { graphqlOperation } from "aws-amplify"

type Props = {
  user?: string
  slug?: string
}

type State = {}

export default class PublicGuideComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement {
    return <Connect query={graphqlOperation(GQL.Queries.GetGuideBySlug, { slug: this.props.slug })}>
      {({ data, loading, error }: { data: any, loading: boolean, error: any }) => {
        console.log(`data ${data!==null}`)
        console.log(`loading ${loading}`)
        console.log(`error ${error}`)
        if (error) return (<Segment>Error!</Segment>)
        if (loading || !data) return (<Segment loading/>)
        return (
          <Segment>
            <Header>Public guide</Header>
            <p>{JSON.stringify(this.props, null, 4)}</p>
            <p>{JSON.stringify(data, null, 4)}</p>
          </Segment>)
      }}


    </Connect>
  }

}