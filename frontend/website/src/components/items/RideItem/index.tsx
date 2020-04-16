import { RideFragment } from "api/generated"
import * as React from "react"
import { navigate } from "@reach/router"
import {
  Card,
  Flag,
  FlagNameValues,
  Grid,
  Header,
  List,
  ListItem,
  Popup,
  Statistic,
  StatisticGroup,
} from "semantic-ui-react"
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader"
import { humanCountry, humanDate, humanDistance } from "../../../utils/human"
import { generateBounds, generateViewport } from "../../Map/viewport"
import { GuideItemRideLine } from "../../app/Guides/GuideItemRideLine"
import { CSSProperties, ReactElement } from "react"
import ReactMapGL from "react-map-gl"

type Props = {
  isOwner: boolean
  ride: RideFragment
}

type State = {
  hover: boolean
  deleting: boolean
}

const HEIGHT = 300

export default class RideItem extends React.Component<Props, State> {


  async onClick() {
    const ride = this.props.ride
    await navigate(`/${ride.guide.split("_")[0]}/${ride.guide.split("_")[1]}/ride/${ride.id.split("_")[1]}`)
  }

  renderHeader(): React.ReactElement {
    const ride = this.props.ride


    function flags(): ReactElement {
      const items = ride.countries.map(country => {
        const countryName = humanCountry(country)
        return <ListItem style={{ margin: 0, padding: 0 }}>
          <Popup content={countryName} trigger={<Flag
            name={country.toLowerCase() as FlagNameValues}/>}/>
        </ListItem>
      })
      return <List horizontal={true} floated={"right"} items={items}/>
    }


    return <Card.Content onClick={this.onClick.bind(this)}>
      <Grid columns={2} verticalAlign={"middle"}>
        <Grid.Column>
          <Header
            as={"h3"}>{ride.name}<HeaderSubHeader>Created {humanDate(ride.created, true)}</HeaderSubHeader></Header>
        </Grid.Column>
        <Grid.Column floated={"right"}>
          {flags()}
        </Grid.Column>
      </Grid>
    </Card.Content>
  }

  renderMap(): React.ReactElement {

    const ride = this.props.ride

    const bounds = generateBounds(ride)

    const viewport = generateViewport(bounds, HEIGHT, HEIGHT, {
      right: 20,
      left: 20,
      bottom: 20,
      top: 20,
    })

    const style: CSSProperties = {
      height: HEIGHT,
      padding: 0,
      margin: 0,
    }

    return <Card.Content style={style}>
      <ReactMapGL
        height={"100%"}
        width={"100%"}
        mapStyle={"mapbox://styles/theodev/ck8zy18o108v11im40uij8t14"}
        {...viewport}
        dragPan={false}
        scrollZoom={false}
        touchZoom={false}
        touchAction={"pan-y"}
        controller={null}
        doubleClickZoom={false}
        getCursor={() => {
          return "pointer"
        }}
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_TOKEN!}>
        <GuideItemRideLine ride={ride}/>
      </ReactMapGL>
    </Card.Content>
  }

  renderStats(): React.ReactElement {

    const ride = this.props.ride


    const items: { label: string, value: string | number }[] = [{
      label: "Miles",
      value: humanDistance(ride.distanceMeters, false),
    }, {
      label: "Hours",
      value: Math.ceil(ride.durationSeconds / 60 / 60),
    }]

    if (ride.date) {
      items.push({
        label: "Date",
        value: humanDate(ride.date),
      })

    }
    return <Card.Content onClick={this.onClick.bind(this)}>
      <StatisticGroup size={"tiny"} widths={"4"}>
        {items.map(stat => {
          return <Statistic label={stat.label} value={stat.value} key={stat.label}/>
        })}
      </StatisticGroup>
    </Card.Content>
  }

  render(): React.ReactElement {
    const ride = this.props.ride
    return <Card
      key={ride.id}
      onClick={this.onClick.bind(this)}
      fluid>
      {this.renderHeader()}
      {this.renderMap()}
      {this.renderStats()}
    </Card>
  }


}