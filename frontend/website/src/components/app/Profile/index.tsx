import * as React from "react"

import { RouteComponentProps } from "@reach/router"
import AuthStore from "model/AuthStore"
import {
  Segment,
  Grid,
  GridColumn,
  Icon,
  Header,
  StatisticGroup,
  Statistic,
} from "semantic-ui-react"
import client from "api/client"
import {
  ProfileFragment,
  UserProfileDocument,
  UserProfileQuery,
} from "api/generated"
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader"
import { humanDate, humanDistance } from "utils/human"
import { inject, observer } from "mobx-react"
import { logObject } from "utils/logger"
import { CSSProperties } from "react"
import FollowButton from "../../FollowButton"
import GuidesList from "../Guides/GuidesList"

interface Props extends RouteComponentProps {
  owner?: string
  authStore?: AuthStore
}

type State = {
  profile: ProfileFragment | undefined
  executingFollow: boolean
  error: string | undefined
}

@inject("authStore")
@observer
export default class ProfileComponent extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      profile: undefined,
      executingFollow: false,
      error: undefined,
    }
  }

  async fetch() {
    const result = await client.query<UserProfileQuery>({
      query: UserProfileDocument,
      fetchPolicy: "network-only",
      variables: {
        username: this.props.owner,
      },
    })

    if (result.data) {
      this.setState({
        executingFollow: false,
        profile: result.data.profile,
      })
    } else {
      result.errors.forEach(error => {
        console.error(error)
      })
    }
  }

  async componentDidMount() {
    await this.fetch()
  }


  stats(profile: ProfileFragment): React.ReactElement {

    const items: { label: string, value: string | number }[] = [
      {
        label: "Following",
        value: profile.following.totalCount,
      },
      {
        label: "Followers",
        value: profile.followers.totalCount,
      },
      {
        label: "Rides",
        value: profile.rides.totalCount,
      },
      {
        label: "Countries",
        value: profile.countries.length,
      },
      {
        label: "Miles",
        value: humanDistance(profile.distanceMeters, false),
      },
      {
        label: "Hours",
        value: Math.ceil(profile.durationSeconds / 60 / 60),
      },
    ]

    return <StatisticGroup widths={4} size={"tiny"}>
      {items.map(({ label, value }) => {
        return <Statistic label={label} value={value}/>
      })}
    </StatisticGroup>

  }

  follow(): React.ReactElement | undefined {
    const { profile, executingFollow } = this.state

    const style: CSSProperties = {
      marginBottom: "1em",
    }

    logObject(profile.followingStatus, "status")

    return <GridColumn style={style}>
      <FollowButton username={profile.username} followingStatus={profile.followingStatus} onChange={async () => {
        await this.fetch()
      }}/>
    </GridColumn>
  }

  render() {

    const profile = this.state.profile

    if (profile) {
      return <Grid style={{ marginTop: 20 }}>
        <GridColumn width={6}>
          <Icon name={"user"} size={"massive"} fitted bordered color={profile.colour?.toLowerCase()}/>
          <Header>
            {profile.username}
            <HeaderSubHeader>Member since {humanDate(profile.created, true)}</HeaderSubHeader>
          </Header>
          {this.follow()}
          {this.stats(profile)}
        </GridColumn>
        <GridColumn width={10}>
          <GuidesList owner={profile.username}/>
        </GridColumn>

      </Grid>
    } else {
      return <Segment loading/>
    }
  }
}