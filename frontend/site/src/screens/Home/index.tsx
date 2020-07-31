import React from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {inject} from 'mobx-react';
import {h4} from 'styles/text';
import AuthStore from "stores/AuthStore";
import Router from "utils/router";
import {half} from "styles/dimensions";
import Map from 'components/Map'
import {SEYTHENEX} from "components/Map/consts";
import Marker from "components/Map/Marker";

type Props = {
  authStore?: AuthStore
  router?: Router
}

@inject('authStore', 'router')
export default class HomeScreen extends React.Component<Props> {

  render() {
    return (
      <View style={styles.root}>
        <Text>Welcome {this.props.authStore.user.username}</Text>
        <View style={styles.button}>
          <Button title={'My Profile'} onPress={async () => {
            await this.props.router.goToProfile(this.props.authStore.user.username)
          }}/>
        </View>
        <View style={styles.button}>
          <Button title={'Create'} onPress={async () => {
            await this.props.router.goToCreate()
          }}/>
        </View>
        <View style={styles.map}>
          <Map latitude={SEYTHENEX.latitude} longitude={SEYTHENEX.longitude} zoom={10}>
            <Marker id={'id1'} position={SEYTHENEX}>
              <View style={{
                width: 100,
                height: 100,
                display: 'flex'
              }}>
                <Text style={{flex: 1}}>Hello</Text>
              </View>
            </Marker>
          </Map>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: Platform.OS === 'web' ? '100vh' : '100%',
    flexDirection: 'column',
    backgroundColor: 'pink'
  },
  textInput: {},
  error: {
    ...h4,
    color: 'red'
  },
  button: {
    marginBottom: half
  },
  already: {
    ...h4
  },
  map: {
    width: '100%',
    flex: 1,
    backgroundColor: 'green'
  }
});
