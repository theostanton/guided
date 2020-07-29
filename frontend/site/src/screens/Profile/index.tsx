import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject} from 'mobx-react';
import {ScreenProps} from 'utils/router/ScreenProps';
import {ProfileComponent} from "api/generated";
import GuidesList from "components/Guides";

type Props = ScreenProps<'Profile'>

@inject('authStore')
export default class ProfileScreen extends React.Component<Props> {
  render() {
    return (
      <ProfileComponent variables={{username: this.props.params.username}}>
        {(result) => {

          console.log('result',result)
          if (result.loading) {
            return <View style={styles.root}>
              <Text>Loading</Text>
            </View>
          }

          if(result.error){
            return <View style={styles.root}>
              <Text>Error: {result.error.message}</Text>
            </View>
          }

          const data = result.data
          console.log('data',data)



          return <View style={styles.root}>
            <Text>Profile of {data.user.username}</Text>
            <GuidesList guides={data.guides.nodes}/>
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
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  textInput: {},
  button: {},
});
