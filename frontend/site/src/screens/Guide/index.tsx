import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {inject, Provider} from 'mobx-react';
import {ScreenProps} from 'utils/navigation/ScreenProps';
import GuideContent from "./GuideContent";
import GuideMap from "./GuideMap";
import {fullHeight, fullWidth} from "styles/dimensions";
import GuideStore from "./GuideStore";
import {guideId, idType} from "utils";
import {subscriptionClient} from "api/client";
import {GuideComponent, GuideFragment} from "api/generated";
import Device from "stores/Device";

type Props = ScreenProps<'Guide'> & {
  device?: Device
}

type State = {}

@inject('authStore', 'device', 'navigation')
export default class GuideScreen extends React.Component<Props, State> {

  guideStore: GuideStore

  constructor(props: Props) {
    super(props);
    this.guideStore = new GuideStore(() => {
      this.onModeUpdate()
    })
  }

  updateTitle(guide: GuideFragment) {
    this.props.navigation.setOptions({
      title: `${guide.title} by ${guide.owner} - Guided`
    })
  }

  onModeUpdate() {
    this.updateTitle(this.guideStore.guide)
    switch (this.guideStore.mode) {
      case "SelectSpot":
        const params = this.guideStore.getModeParams('SelectSpot')
        this.props.navigation.setParams({
          itemId: params.spot.id
        })
        break
      default:
        this.props.navigation.setParams({
          itemId: ''
        })
    }
  }

  renderMap() {
    return <View style={styles.map}>
      <GuideMap/>
    </View>
  }

  renderContent() {
    return <View style={styles.content}>
      <GuideContent/>
    </View>
  }

  render() {
    return (
      <GuideComponent
        // @ts-ignore
        client={subscriptionClient}
        shouldResubscribe={true}
        variables={{
          id: guideId(this.props.params)
        }}>
        {(result) => {


          if (result.error) {
            console.log('result.error', result.error)
            return <View style={styles.root}>
              <Text>Error: {result.error.message}</Text>
            </View>
          }

          if (result.data) {
            this.updateTitle(result.data.guide)
            const itemId = this.props.params.itemId
            if (this.guideStore.updateGuide(result.data.guide) && itemId) {
              switch (idType(itemId)) {
                case "spot":
                  const spot = result.data.guide.spots.nodes.find(spot => {
                    return spot.id === itemId
                  })
                  if (spot) {
                    this.guideStore.updateMode('SelectSpot', {
                      spot
                    })
                  }
                  break
              }
            }
          }

          //TODO do this smarter
          return <Provider guideStore={this.guideStore}>
            <View style={styles.root}>
              {this.renderMap()}
              {result.loading === false && this.renderContent()}
            </View>
          </Provider>
        }}
      </GuideComponent>
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
    ...Platform.select({
      web: {
        pointerEvents: 'none'
      },
    }),
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
