import { DeleteGuideDocument, DeleteGuideMutationVariables, GuideInfoFragment, TransportType } from "api/generated"
import {
  Button,
  ButtonGroup,
  Card,
  Flag,
  FlagNameValues,
  Grid,
  Header,
  Icon,
  List,
  ListItem,
  Popup,
  SemanticICONS,
  Statistic,
  StatisticGroup,
} from "semantic-ui-react"
import { humanCountry, humanDate, humanDistance } from "utils/human"
import * as React from "react"
import { CSSProperties, ReactElement } from "react"
import randomKey from "utils/randomKey"
import ReactMapGL from "react-map-gl"
import { navigate } from "@reach/router"
import { client } from "../../../api"
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader"
import { GuideItemRideLine } from "./GuideItemRideLine"
import { generateViewport } from "../../Map/viewport"
import { Icons } from "../../../utils/icons"

type Props = {
  isOwner: boolean
  guide: GuideInfoFragment
}

type State = {
  hover: boolean
  deleting: boolean
}

const HEIGHT = 300


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
        label: "Ends",
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

  icon(): SemanticICONS {
    switch (this.props.guide.transportType) {
      case TransportType.Bicycle:
        return Icons.Bicycle
      case TransportType.Car:
        return Icons.Car
      case TransportType.Motorcycle:
        return Icons.Motorcycle
    }
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
      <Grid columns={3} verticalAlign={"middle"}>
        <Grid.Column width={1}>
          <Icon name={this.icon()} size={"large"}/>
        </Grid.Column>
        <Grid.Column>
          <Header
            as={"h3"}>{guide.title}<HeaderSubHeader>Created {humanDate(guide.created, true)}</HeaderSubHeader></Header>
        </Grid.Column>
        <Grid.Column floated={"right"}>
          {flags()}
        </Grid.Column>
      </Grid>
    </Card.Content>
  }

  footer(): ReactElement {

    if (this.props.isOwner) {
      const style: CSSProperties = {
        padding: 0,
      }
      return <Card.Content style={style} extra>
        <ButtonGroup attached={"bottom"} compact>
          <Button color={"green"}>
            Share
          </Button>
          <Button color={"orange"} icon loading={this.state.deleting} onClick={async () => {
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
    }
  }

  map(): React.ReactElement {

    const guide = this.props.guide

    const viewport = guide.bounds ? generateViewport(guide.bounds, HEIGHT, HEIGHT, {
      top: 20,
      left: 20,
      bottom: 20,
      right: 20,
    }) : {}

    function rideLines(): React.ReactElement[] {
      return guide.rides.nodes.map(ride => {
        return <GuideItemRideLine ride={ride} state={"none"}/>
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