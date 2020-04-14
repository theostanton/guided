import { Bound, DeleteGuideDocument, DeleteGuideMutationVariables, GuideInfoFragment } from "api/generated"
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
  StatisticGroup, ButtonGroup, Button,
} from "semantic-ui-react"
import { humanCountry, humanDate, humanDistance } from "utils/human"
import * as React from "react"
import randomKey from "utils/randomKey"
import ReactMapGL from "react-map-gl"
import WebMercatorViewport from "viewport-mercator-project"
import { RideLine } from "../../Map/RideLine"
import { navigate } from "@reach/router"
import { log } from "../../../utils/logger"
import { CSSProperties, ReactElement } from "react"
import GuideHeader from "../Guide/Header"
import { client } from "../../../api"

type Props = {
  isOwner: boolean
  guide: GuideInfoFragment
}

type State = {
  hover: boolean
  deleting: boolean
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

export default class GuideItem extends React.Component<Props, State> {

  ref: React.RefObject<unknown>

  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      deleting: false,
    }
  }

  async onClick() {
    const guide = this.props.guide
    await navigate(`/${guide.owner}/${guide.slug}`)
  }

  stats(): React.ReactElement {

    const guide = this.props.guide


    const items: { label: string, value: string | number }[] = [{
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
    return <Card.Content onClick={this.onClick.bind(this)}>
      <StatisticGroup size={"tiny"} widths={"4"}>
        {items.map(stat => {
          return <Statistic label={stat.label} value={stat.value} key={stat.label}/>
        })}
      </StatisticGroup>
    </Card.Content>
  }

  header(): React.ReactElement {

    const guide = this.props.guide


    function flags(): ReactElement {
      const items = guide.countries.map(country => {
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
          <Header as={"h3"}>{guide.title}</Header>
        </Grid.Column>
        <Grid.Column floated={"right"}>
          {flags()}
        </Grid.Column>
      </Grid>
    </Card.Content>
  }

  footer(): ReactElement {

    const style: CSSProperties = {
      padding: 0,
    }
    return <Card.Content style={style} extra>
      <ButtonGroup basic attached={"bottom"} compact>
        <Button>
          Share
        </Button>
        <Button icon loading={this.state.deleting} onClick={async () => {
          this.setState({
            deleting: true,
          })
          const variables: DeleteGuideMutationVariables = {
            guideId: this.props.guide.id,
          }
          await client.mutate({
            mutation: DeleteGuideDocument,
            variables,
          })
        }
        }>
          Delete
        </Button>
      </ButtonGroup>
    </Card.Content>

    // return <ButtonGroup floated={"right"}>
    //   <Button icon='trash' loading={isDeleting} onClick={async () => {
    //     this.setState({
    //       deleting: true,
    //     })
    //     const variables: DeleteGuideMutationVariables = {
    //       guideId: this.props.guide.id,
    //     }
    //     await client.mutate({
    //       mutation: DeleteGuideDocument,
    //       variables,
    //     })
    //   }}/>
    // </ButtonGroup>
  }

  map(): React.ReactElement {

    const guide = this.props.guide

    const viewport = guide.bounds ? generateViewport(guide.bounds) : {}

    function rideLines(): React.ReactElement[] {
      return guide.rides.nodes.map(ride => {
        return <RideLine ride={ride} state={"none"}/>
      })
    }

    const style: CSSProperties = {
      height: HEIGHT,
      padding: 0,
      margin: 0,
    }

    return <Card.Content style={style} onClick={this.onClick.bind(this)}>
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
  }

  render(): React.ReactElement {

    const guide = this.props.guide
    const key = guide!.id || randomKey()

    return <Card
      key={key}
      fluid
      onMouseOver={() => {
        this.setState({
          hover: true,
        })
      }}
      onMouseOut={() => {
        this.setState({
          hover: false,
        })
      }}>
      {this.header()}
      {this.map()}
      {this.stats()}
      {this.footer()}
    </Card>
  }
}