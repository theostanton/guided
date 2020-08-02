import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject} from 'mobx-react';
import {ScreenProps} from 'utils/navigation/ScreenProps';
import {ProfileComponent} from "api/generated";
import ProfileContent from "./ProfileContent";
import client from "../../api/client";

type Props = ScreenProps<'Profile'>

@inject('authStore')
export default class ProfileScreen extends React.Component<Props> {
  render() {
    console.log('ProfileScreen.render', this.props)
    return (
      // @ts-ignore
      <ProfileComponent variables={{username: this.props.params.username}} client={client}>
        {(result) => {

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

          console.log('result.data', result.data)

          if (result.data && result.data.user) {
            return <ProfileContent user={result.data.user} guides={result.data.guides.nodes}/>
          }

          return <View style={styles.root}>
            <Text>Error: No data</Text>
          </View>

        }
        }
      </ProfileComponent>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 400,
    alignSelf: 'center',
  },
});
