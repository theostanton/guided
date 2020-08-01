import {NavigationProp, useNavigation} from "@react-navigation/core";
import React from "react";
import {ParamList} from "./ParamList";

export type WithNavigationProps = {
  navigation?: NavigationProp<ParamList>
}

//TODO as pretty as this is, it throws an 'incorrect hook usage' err at runtime
export function withNavigation<Props extends WithNavigationProps>(Component: React.ComponentType<Props>): React.ComponentType<Omit<Props, 'navigation'>> {
  const navigation = useNavigation<NavigationProp<ParamList>>();
  return class extends React.Component<Omit<Props, 'navigation'>> {
    render() {
      return <Component {...this.props as Props} navigation={navigation}/>
    }
  };
}