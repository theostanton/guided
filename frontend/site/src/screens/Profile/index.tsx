import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject} from 'mobx-react';
import {ScreenProps} from 'utils/navigation/ScreenProps';
import {ProfileComponent} from "api/generated";
import ProfileContent from "./ProfileContent";
import client from "api/client";
import {assertMaybes, isWeb} from "../../utils";
import Activity from "components/Activity";

type Props = ScreenProps<'Profile'>

@inject('authStore', 'navigation')
export default class ProfileScreen extends React.Component<Props> {
  render() {
    return (
      // @ts-ignore
      <ProfileComponent variables={{username: this.props.params.username}} client={client}>
        {(result) => {
          if (result.loading) {
            return <Activity/>
          }

          if (result.error) {
            return <View style={styles.root}>
              <Text>Error: {result.error.message}</Text>
            </View>
          }

          console.log('result.data', result.data)

          if (result.data && result.data.user) {
            if (isWeb()) {
              this.props.navigation.setOptions({
                title: `${result.data.user.username} - Riders Bible`,
              })
            }
            return <ProfileContent
              isSelf={this.props.authStore!.user!.username === this.props.params.username}
              user={result.data.user}
              guides={result.data!.guides!.nodes.map(assertMaybes())}/>
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
    height: 100,
    alignSelf: 'center',
  },
});
