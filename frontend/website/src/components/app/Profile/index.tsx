import * as React from "react"
import GuideStore from "model/GuideStore"

 import { RouteComponentProps } from "@reach/router"
import AuthStore from "model/AuthStore"
import { Segment, Grid, GridColumn, Icon, Header, GridRow } from "semantic-ui-react"
import { ZenObservable } from "zen-observable-ts/lib/types"
import { subscriptionClient } from "api/client"
import { ProfileFragment, UserProfileDocument, UserProfileSubscription } from "api/generated"

interface Props extends RouteComponentProps {
  owner?: string
  authStore?: AuthStore
}

type State = {
  profile: ProfileFragment | undefined
}

export default class ProfileComponent extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      profile: undefined,
    }
  }

  #subscription: ZenObservable.Subscription | undefined

  componentDidMount(): void {
    this.#subscription = subscriptionClient.subscribe<UserProfileSubscription>({
      query: UserProfileDocument,
      fetchPolicy: "network-only",
      variables: {
        username: this.props.owner,
      },
    }).subscribe(value => {
      if (value.data) {
        this.setState({
          profile: value.data.profile,
        })
      } else {
        value.errors.forEach(error => {
          console.error(error)
        })
      }
    })
  }

  componentWillUnmount(): void {
    this.#subscription?.unsubscribe()
  }

  render() {
    const profile = this.state.profile
    if (profile) {
      return <Grid style={{ marginTop: 20 }}>
        <GridRow>
          <GridColumn width={6}>
            <Icon name={"user"} size={"massive"} fitted bordered color={profile.colour?.toLowerCase}/>
          </GridColumn>
          <GridColumn width={10}>
            <Header>{profile.username}</Header>
          </GridColumn>
        </GridRow>

      </Grid>
    } else {
      return <Segment loading/>
    }
  }
}