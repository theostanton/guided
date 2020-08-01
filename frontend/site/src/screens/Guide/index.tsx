import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject, observer, Provider} from 'mobx-react';
import {ScreenProps} from 'utils/navigation/ScreenProps';
import {GuideComponent} from "api/generated";
import GuideContent from "./GuideContent";
import GuideStore from "./store";
import GuideMap from "./GuideMap";

type Props = ScreenProps<'Guide'>

@inject('authStore')
@observer
export default class GuideScreen extends React.Component<Props> {

  guideStore: GuideStore = new GuideStore()

  render() {
    const guideId = `${this.props.params.username}_${this.props.params.slug}`
    return (
      <GuideComponent variables={{guideId}}>
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
              <View style={styles.map}>
                <GuideMap/>
              </View>
              <View style={styles.content}>
                <GuideContent/>
              </View>
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
    width: '100vh',
    height: '100vh',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor:'red'
  },
  map: {
    position: "absolute",
    width: '100vh',
    height: '100vh',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor:'green'
  },
  content: {
    position: "absolute",
    width: '100vh',
    height: '100vh',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  textInput: {},
  button: {},
});
