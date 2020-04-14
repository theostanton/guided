import * as React from "react"
import GuideStore from "model/GuideStore"

import { RouteComponentProps } from "@reach/router"
import AuthStore from "model/AuthStore"
import { Segment, Grid, GridColumn, Icon, Header, GridRow, Divider, StatisticGroup, Statistic } from "semantic-ui-react"
import { ZenObservable } from "zen-observable-ts/lib/types"
import client, { subscriptionClient } from "api/client"
import { ProfileFragment, UserProfileDocument, UserProfileQuery, UserProfileSubscription } from "api/generated"
import MyGuidesList from "../Guides/GuidesList"
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader"
import { humanDate } from "../../../utils/human"

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

  async componentDidMount() {
    const result = await client.query<UserProfileQuery>({
      query: UserProfileDocument,
      fetchPolicy: "network-only",
      variables: {
        username: this.props.owner,
      },
    })

    if (result.data) {
      this.setState({
        profile: result.data.profile,
      })
    } else {
      result.errors.forEach(error => {
        console.error(error)
      })
    }
  }

  render() {

    const profile = this.state.profile

    function stats(): React.ReactElement {

      const items: { label: string, value: string | number }[] = [
        {
          label: "Rides",
          value: profile.rides.totalCount,
        },
        {
          label: "Countries",
          value: profile.countries.length,
        },
      ]

      return <StatisticGroup>
        {items.map(({ label, value }) => {
          return <Statistic label={label} value={value}/>
        })}
      </StatisticGroup>

    }

    if (profile) {
      return <Grid style={{ marginTop: 20 }}>
        <GridColumn width={6}>
          <Icon name={"user"} size={"massive"} fitted bordered color={profile.colour?.toLowerCase}/>
          <Header>
            {profile.username}
            <HeaderSubHeader>Member since {humanDate(profile.created)}</HeaderSubHeader>
          </Header>
          {stats()}
        </GridColumn>
        <GridColumn width={10}>
          <MyGuidesList owner={profile.username}/>
        </GridColumn>

      </Grid>
    } else {
      return <Segment loading/>
    }
  }
}