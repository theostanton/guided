import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject, observer, Provider} from 'mobx-react';
import {ScreenProps} from 'utils/navigation/ScreenProps';
import {GuideComponent} from "api/generated";
import GuideContent from "./GuideContent";
import GuideMap from "./GuideMap";
import {fullHeight, fullWidth} from "styles/dimensions";
import {guideId} from "utils";
import GuideStore from "./GuideStore";

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
      <GuideComponent variables={{
        guideId: guideId(this.props.params)
      }}>
        {(result) => {
          console.log('result', result)
          if (result.loading) {
            return <View style={styles.root}>
              <Text>Loading</Text>
            </View>
          }

          if (result.error) {
            return <View style={styles.root}>
              <Text>Error: {result.error.message}</Text>
            </View>
          }

          const data = result.data
          console.log('data', data)

          this.guideStore.updateGuide(result.data.guide)

          return <Provider guideStore={this.guideStore}>
            <View style={styles.root}>
              {this.renderMap()}
              {this.renderContent()}
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
    pointerEvents: 'none',
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
