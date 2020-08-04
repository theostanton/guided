import {TransportType} from "api/generated";
import {IconProps} from "react-native-vector-icons/Icon";
import React from "react";
import Icon from "./index";
import {IconName} from "./names";

type Props = Omit<IconProps, 'name'> & {
  type: TransportType
}

export default class TransportTypeIcon extends React.Component<Props> {

  name(): IconName {
    switch (this.props.type) {
      case TransportType.Bicycle:
        return 'directions-bike'
      case TransportType.Car:
        return 'directions-car'
      case TransportType.Motorcycle:
        return 'motorcycle'
    }
  }

  render() {
    return <Icon {...this.props} name={this.name()}/>
  }
}