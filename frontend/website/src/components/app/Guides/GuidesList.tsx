import { List, Message, Segment } from "semantic-ui-react"
import * as React from "react"
import client, { subscriptionClient } from "api/client"
import { navigate } from "@reach/router"
import {
  GuideIDsDocument, GuideIDsSubscription,
  GuideInfoFragment, GuideInfosDocument, GuideInfosQuery,
} from "api/generated"
import { CSSProperties } from "react"
import GuideItem from "./GuideItem"
import { log } from "../../../utils/logger"

type Props = {
  owner: string,
}

type State = {
  guides: readonly GuideInfoFragment[] | undefined
  error: {
    message: string
  } | undefined
}

export default class MyGuidesList extends React.Component<Props, State> {

  subscription: ZenObservable.Subscription | undefined

  constructor(props) {
    super(props)
    this.state = {
      guides: undefined,
      error: undefined,
    }
  }

  async subscribe() {

    this.subscription = await subscriptionClient.subscribe<GuideIDsSubscription>({
      query: GuideIDsDocument,
      variables: {
        owner: this.props.owner,
      },
    }).subscribe(async (value) => {
        if (value.data) {
          const ids = value.data.guides.nodes.map(guide => {
            return guide.id
          })

          const result = await client.query<GuideInfosQuery>({
            query: GuideInfosDocument,
            variables: {
              ids,
            },
          })

          if (result.errors && result.errors.length > 0) {
            value.errors.forEach(error => {
              console.error(error)
            })
            const message = result.errors.map(error => {
              return error.message
            }).join("\n")
            this.setState({
              error: {
                message,
              },
            })
          } else if (result.data) {
            const guides = result.data.guides.nodes
            this.setState({
              guides,
              error: undefined,
            })
          }

        } else {
          value.errors.forEach(error => {
            console.error(error)
          })
          const message = value.errors.map(error => {
            return error.message
          }).join("\n")
          this.setState({
            error: {
              message,
            },
          })
        }
      },
    )
  }

  componentDidMount(): void {
    this.subscribe()
  }

  componentWillUnmount(): void {
    this.subscription?.unsubscribe()
  }

  render(): React.ReactElement {

    const { guides, error } = this.state
    if (!guides) {
      return <Segment loading/>
    }

    if (error) {
      return <Segment>
        <Message error>{error.message}</Message>
      </Segment>
    }

    if (guides.length === 0) {
      return <Segment>No guides</Segment>
    }

    const items = guides.map(guide => {
      return (
        <GuideItem guide={guide}/>
      )
    })

    const style: CSSProperties = {
      height: "800px",
      overflowY: "scroll",
      paddingLeft: "0.1em",
      paddingRight: "0.1em",
      paddingTop: "0.3em",
    }

    return <List
      onItemClick={async (_, { value: route }) => {
        log("click")
        await navigate(route)
      }}
      link
      style={style}
      items={items}
      selection
      divided
    />
  }
}