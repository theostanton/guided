import React from 'react';
import {StyleSheet} from 'react-native';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {IconProps} from "react-native-vector-icons/Icon";
import {IconName} from "./names";
import Pressable from "../Pressable";
import {darkIcon} from "../../styles/colors";

type Props = {
  name: IconName
} & IconProps;
type State = {};

export default class Icon extends React.Component<Props, State> {
  render() {
    return (
      <Pressable>
        <MaterialIcon color={darkIcon} {...this.props}/>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
