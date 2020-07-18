import { ReactElement } from "react"
import { UserInfoFragment } from "api/generated"
import * as React from "react"
import {
  Card,
  Flag,
  FlagNameValues,
  Grid, Header,
  Icon,
  List,
  ListItem,
  Popup,
  Statistic,
  StatisticGroup,
} from "semantic-ui-react"
import { navigate } from "@reach/router"
import { humanCountry, humanDate } from "../../../utils/human"
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader"

type Props = {
  user: UserInfoFragment
}

type State = {}

export default class UserItem extends React.Component<Props, State> {

  renderHeader(): React.ReactElement {
    const user = this.props.user

    function flags(): ReactElement {
      const items = user.countries.map(country => {
        const countryName = humanCountry(country)
        return <ListItem style={{ margin: 0, padding: 0 }}>
          <Popup content={countryName} trigger={<Flag
            name={country.toLowerCase() as FlagNameValues}/>}/>
        </ListItem>
      })
      return <List horizontal={true} floated={"right"} items={items}/>
    }

    return <Card.Content>
      <Grid columns={2} verticalAlign={"bottom"}>
        <Grid.Column verticalAlign={"bottom"}>
          <Header>
            <Icon
              name={"user"}
              color={user.colour?.toLowerCase()}
              floated='right'
            />{user.username}</Header>
        </Grid.Column>
        <Grid.Column floated={"right"} verticalAlign={"bottom"}>
          {flags()}
        </Grid.Column>
      </Grid>
    </Card.Content>
  }

  renderStats(user: UserInfoFragment): React.ReactElement {
    const items: { label: string, value: string | number }[] = [
      {
        label: "Following",
        value: user.following.totalCount,
      },
      {
        label: "Followers",
        value: user.followers.totalCount,
      },
      {
        label: "Rides",
        value: user.rides.totalCount,
      },
    ]
    return <Card.Content><StatisticGroup size={"mini"} widths={3}>
      {items.map(item => {
        return <Statistic label={item.label} value={item.value}/>
      })}
    </StatisticGroup>
    </Card.Content>
  }

  render(): ReactElement {
    const user = this.props.user
    return <Card fluid onClick={async () => {
      await navigate(`/${user.username}`)
    }}>
      {this.renderHeader()}
      {this.renderStats(user)}
    </Card>
  }
}