import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {CountryCode} from "utils/human";
import Flag from "./Flag";
import {quarter} from "styles/dimensions";

export type Props = {
  countries: CountryCode[]
  size?: number
};

export default class Flags extends React.Component<Props> {
  render() {
    return (
      <View style={styles.root}>
        {this.props.countries.map((country, index) => {
          const style: ViewStyle = index > 0 ? {marginLeft: quarter} : {}
          return <View style={style}>
            <Flag
              countryCode={country}
              size={this.props.size || 24}/>
          </View>
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
