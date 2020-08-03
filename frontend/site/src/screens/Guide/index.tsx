import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {inject, observer, Provider} from 'mobx-react';
import {ScreenProps} from 'utils/navigation/ScreenProps';
import GuideContent from "./GuideContent";
import GuideMap from "./GuideMap";
import {fullHeight, fullWidth} from "styles/dimensions";
import GuideStore from "./GuideStore";
import {guideId} from "../../utils";
import {subscriptionClient} from "../../api/client";
import {GuideComponent} from "../../api/generated";

type Props = ScreenProps<'Guide'>

type State = {}

@inject('authStore')
@observer
export default class GuideScreen extends React.Component<Props, State> {

  guideStore: GuideStore = new GuideStore()

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
        }}
        onSubscriptionComplete={() => {
          console.log('onSubscriptionComplete')
        }}>
        {(result) => {


          if (result.error) {
            console.log('result.error', result.error)
            return <View style={styles.root}>
              <Text>Error: {result.error.message}</Text>
            </View>
          }

          if (result.data) {
            this.guideStore.updateGuide(result.data.guide)
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
