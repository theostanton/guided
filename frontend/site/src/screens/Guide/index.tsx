import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject, observer, Provider} from 'mobx-react';
import {ScreenProps} from 'utils/navigation/ScreenProps';
import {GuideComponent} from "api/generated";
import GuideContent from "./GuideContent";
import GuideStore from "./store";

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
              <GuideContent/>
            </View>
          </Provider>
        }}
      </GuideComponent>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  textInput: {},
  button: {},
});
