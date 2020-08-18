import React from 'react';
import {CountryCode} from "utils/human";
// @ts-ignore
import {Flag as FlagKit} from 'react-native-svg-flagkit'
import {icon} from "../../styles/dimensions";


type Props = {
  size: number
  countryCode: CountryCode
};
type State = {};

export default class Flag extends React.Component<Props, State> {
  render() {
    return (
      <FlagKit id={this.props.countryCode}
               width={this.props.size || icon}
               height={this.props.size || icon}
      />
    );
  }
}
