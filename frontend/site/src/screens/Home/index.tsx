import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject} from 'mobx-react';
import {h4} from 'styles/text';
import {half} from "styles/dimensions";
import Map from 'components/Map'
import {SEYTHENEX} from "components/Map/consts";
import Marker from "components/Map/Marker";
import {ScreenProps} from "utils/navigation/ScreenProps";
import Link from "components/Link";

type Props = ScreenProps<'Root'>

@inject('authStore')
export default class HomeScreen extends React.Component<Props> {

  render() {
    return (
      <View style={styles.root}>
        <Text>Welcome {this.props.authStore.user?.username}</Text>
        <Link href={`/${this.props.authStore.user.username}`} textStyle={styles.button}>My profile</Link>
        <Link href={'/create'} textStyle={styles.button}>Create</Link>
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
    height: '100%',
    flexDirection: 'column'
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
    flex: 1
  }
});
