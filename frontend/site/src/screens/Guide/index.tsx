import React from 'react';
import {StyleSheet, View} from 'react-native';
import {inject, Provider} from 'mobx-react';
import {ScreenProps} from 'utils/navigation/ScreenProps';
import GuideContent from "./GuideContent";
import GuideMap from "./GuideMap";
import {fullHeight, fullWidth} from "styles/dimensions";
import GuideStore from "./GuideStore";
import {guideId, idType} from "utils";
import {subscriptionClient} from "api/client";
import {GuideDocument, GuideFragment, GuideSubscription, GuideSubscriptionVariables} from "api/generated";
import {autoPointerEvents, noPointerEvents} from "styles/touch";
import CameraStore from "components/Map/CameraStore";
import {Context} from "app/Context";

type Props = ScreenProps<'Guide'>

type State = {
  error?: string
}

@inject('authStore', 'navigation')
export default class GuideScreen extends React.Component<Props, State> {

  static contextType = Context

  guideStore: GuideStore
  cameraStore: CameraStore
  private subscription: ZenObservable.Subscription | undefined;

  constructor(props: Props) {
    super(props);
    this.guideStore = new GuideStore(() => {
      this.onModeUpdate()
    })
    this.cameraStore = new CameraStore(this.context!.window!)
    this.state = {}
  }

  updateTitle(guide: GuideFragment) {
    this.props.navigation.setOptions({
      title: `${guide.title} by ${guide.owner} | Riders Bible`
    })
  }

  updateCamera() {
    switch (this.guideStore.mode) {
      case "SelectSpot":
        const selectSpotParams = this.guideStore.getModeParams('SelectSpot')
        this.cameraStore.center({
          latitude: selectSpotParams.spot.lat,
          longitude: selectSpotParams.spot.long
        }, 13)
        break
      case "AddSpot":
        const addSpotParams = this.guideStore.getModeParams('AddSpot')
        this.cameraStore.center(addSpotParams.event, 13)
        break
      default:
        this.cameraStore.guideBounds(this.guideStore!.guide!)
    }
  }

  onModeUpdate() {
    switch (this.guideStore.mode) {
      case "SelectSpot":
        const params = this.guideStore.getModeParams('SelectSpot')
        this.props.navigation.setParams({
          itemId: params.spot.id
        })
        break;
      default:
        this.props.navigation.setParams({
          itemId: ''
        })
    }
    this.updateCamera()
  }

  renderMap() {
    return <View style={styles.map}  {...autoPointerEvents()}>
      <GuideMap guide={this.guideStore.guide}
                addSpot={(event)=>{
                  this.guideStore.updateMode('AddSpot',{
                    event
                  })
                }}
                selectSpot={(spotId) => {
                  this.guideStore.selectSpot(spotId)
                }}/>
    </View>
  }

  renderContent() {
    return <View style={styles.content}>
      <GuideContent/>
    </View>
  }

  componentDidMount() {

    const variables: GuideSubscriptionVariables = {
      id: guideId(this.props.params)
    }
    this.subscription = subscriptionClient.subscribe<GuideSubscription>({
      query: GuideDocument,
      variables
    }).subscribe(result => {
      if (result.errors) {
        this.setState({
          error: result.errors.join("/n")
        })
        return
      }
      if (result.data) {
        this.updateTitle(result.data.guide!)
        const itemId = this.props.params.itemId
        if (this.guideStore.updateGuide(result.data.guide!) && itemId) {
          switch (idType(itemId)) {
            case "spot":
              const spot = result.data.guide!.spots.nodes
                .find(spot => {
                  return spot!.id === itemId
                })
              if (spot) {
                this.guideStore.updateMode('SelectSpot', {
                  spot
                })
              }
              break
          }
        }
        this.updateCamera()
      }
    })
  }

  componentWillUnmount() {
    this.subscription?.unsubscribe()
  }

  render() {
    return (
      <Provider guideStore={this.guideStore} cameraStore={this.cameraStore}>
        <View style={styles.root} {...noPointerEvents()}>
          {this.renderMap()}
          {this.renderContent()}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    width: fullWidth(),
    height: fullHeight(),
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  map: {
    position: "absolute",
    width: '100%',
    height: '100%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    position: "absolute",
    width: '100%',
    height: '100%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  modal: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: 'yellow',
  },
  textInput: {},
  button: {},
});
