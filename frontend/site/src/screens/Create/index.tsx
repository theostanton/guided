import {ScreenProps} from "utils/router/ScreenProps";
import React from "react";
import {StyleSheet} from "react-native";
import CreateForm from "./CreateForm";
import {inject} from "mobx-react";

type Props = ScreenProps<'Create'>


@inject('authStore','router')
export default class CreateScreen extends React.Component<Props> {

  render() {
    return <CreateForm/>
  }
}

const styles = StyleSheet.create({});
