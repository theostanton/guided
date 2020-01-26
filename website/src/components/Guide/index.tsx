import * as React from "react"
import { Button, Container, Header, List, Segment } from "semantic-ui-react"

import { API, graphqlOperation } from "aws-amplify"
import * as queries from "gql/queries"
import { ListGuidesQuery, ListGuidesQueryVariables } from "../../graphql/API"
import { Guide } from "../../types"
import { onUpdateGuide } from "../../graphql/subscriptions"

type Props = {
  slug: string
}

type State = {
  guide: Guide | undefined
}

export default class GuideComponent extends React.Component<Props, State> {

  state: State = {
    guide: undefined,
  }
  private subscription: any | undefined

  async fetchGuide(): Promise<void> {

    console.log("props")
    console.log(this.props)

    try {
      const variables: ListGuidesQueryVariables = {
        filter: {
          slug: {
            eq: this.props.slug,
          },
        },
      }
      const response: { data: ListGuidesQuery } = await API.graphql(graphqlOperation(queries.listGuides, variables))
      console.log(response)
      const guide: Guide = response.data.listGuides!.items![0]!
      this.setState({ guide })
    } catch (response) {
      console.error("Error!?")
      console.error(response)
    }
  }

  componentDidMount(): void {

    this.subscription = API.graphql(
      graphqlOperation(onUpdateGuide),
    ).subscribe({
      next: async (data: any) => {
        console.log("onUpdateGuide")
        console.log(data)
      },
    })

    this.fetchGuide().then()
  }

  componentWillUnmount(): void {
    this.subscription?.unsubscribe()
  }

  render(): React.ReactElement | undefined {
    const guide = this.state.guide

    if (!guide) {
      return <Segment loading/>
    }

    return <Container>

      <Header>{guide!.title}</Header>

    </Container>
  }

}