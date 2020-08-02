import React from 'react';
import {IconMarkerProps} from "./types";
import Icon from "components/Icon";
import Marker from "../Marker";

export default class IconMarker extends React.Component<IconMarkerProps> {
  render() {
    const size = this.props.size | 32
    return (
      <Marker {...this.props} offsetLeft={-size / 2} offsetTop={-size}>
        <Icon name={'place'} size={size} color={this.props.color} onPress={this.props.onPress}/>
      </Marker>
    );
  }
}
