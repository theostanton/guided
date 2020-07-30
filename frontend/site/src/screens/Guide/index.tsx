import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject} from 'mobx-react';
import {ScreenProps} from 'utils/router/ScreenProps';
import {GuideComponent} from "../../api/generated";
import GuideContent from "./GuideContent";

type Props = ScreenProps<'Guide'>

@inject('authStore')
export default class GuideScreen extends React.Component<Props> {
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


          return <View style={styles.root}>
            <GuideContent guide={result.data.guide}/>
          </View>
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
