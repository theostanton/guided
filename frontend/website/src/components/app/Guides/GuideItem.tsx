import { Bound, GuideInfoFragment } from "api/generated"
import {
  Card, Flag,
  FlagNameValues,
  Grid,
  Header,
  Icon,
  Label,
  List,
  Popup,
  ListItem,
  Statistic,
  StatisticGroup,
} from "semantic-ui-react"
import { humanCountry, humanDate, humanDistance } from "utils/human"
import * as React from "react"
import randomKey from "utils/randomKey"
import ReactMapGL from "react-map-gl"
import WebMercatorViewport from "viewport-mercator-project"
import { RideLine } from "../../Map/RideLine"
import { navigate } from "@reach/router"
import { log } from "../../../utils/logger"

type Props = {
  guide: GuideInfoFragment
}


type ViewPort = {
  latitude: number,
  longitude: number,
  zoom: number
}

const HEIGHT = 300

function generateViewport(bounds: Bound): ViewPort {

  const viewport = new WebMercatorViewport({
    height: HEIGHT,
    width: HEIGHT,
  }).fitBounds(
    [
      [bounds.west!, bounds.south!], [
      bounds.east!, bounds.north!]],
    {
      padding: {
        right: 20,
        top: 20,
        bottom: 20,
        left: 20,
      },
    },
  )

  return {
    latitude: viewport.latitude,
    longitude: viewport.longitude,
    zoom: viewport.zoom,
  }
}

export default class GuideItem extends React.Component<Props> {

  ref: React.RefObject<unknown>

  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  render(): React.ReactElement {

    const guide = this.props.guide
    const key = guide!.id || randomKey()
    const Extra = <><Icon name='user'/><Label>12 miles</Label></>

    function rideLines(): React.ReactElement[] {
      return guide.rides.nodes.map(ride => {
        return <RideLine ride={ride} state={"none"}/>
      })
    }

    function stats(): { label: string, value: string | number }[] {

      const items = [{
        label: "Miles",
        value: humanDistance(guide.distanceMeters, false),
      }, {
        label: "Hours",
        value: Math.ceil(guide.durationSeconds / 60 / 60),
      }]

      if (guide.startDate) {
        items.push({
          label: "Starts",
          value: humanDate(guide.startDate),
        })

        const lastDate = guide.rides.nodes.reduce((acc, ride) => {
          if (acc < ride.date) {
            return ride.date
          } else {
            return acc
          }
        }, guide.startDate)
        items.push({
          label: "Starts",
          value: humanDate(lastDate),
        })
      }
      return items
    }

    const viewport = guide.bounds ? generateViewport(guide.bounds) : {}

    const flags = guide.countries.map(country => {
      const countryName = humanCountry(country)
      return <ListItem style={{ margin: 0, padding: 0 }}>
        <Popup content={countryName} trigger={<Flag
          name={country.toLowerCase() as FlagNameValues}/>}/>
      </ListItem>
    })

    return <Card
      value={`/${guide.owner}/${guide.slug}`}
      key={key}
      fluid
      onClick={async () => {
        await navigate(`${guide.owner}/${guide.slug}`)
      }}
      extra={Extra}>
      <Card.Content>
        <Grid columns={2}>
          <Grid.Column>
            <Header>{guide.title}</Header>
          </Grid.Column>
          <Grid.Column floated={"right"}>
            <List horizontal={true} floated={"right"} items={flags}>
            </List>
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content style={{
        height: HEIGHT,
        padding: 0,
        margin: 0,
      }}>
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
          {rideLines()}
        </ReactMapGL>
      </Card.Content>
      <Card.Content>
        <StatisticGroup size={"tiny"} widths={"4"}>
          {stats().map(stat => {
            return <Statistic label={stat.label} value={stat.value}/>
          })}
        </StatisticGroup>
      </Card.Content>
    </Card>
  }
}