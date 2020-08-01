import {ScreenProps} from "utils/navigation/ScreenProps";
import React from "react";
import {StyleSheet, View} from "react-native";
import CreateForm from "./CreateForm";
import {inject} from "mobx-react";

type Props = ScreenProps<'Create'>

@inject('authStore')
export default class CreateScreen extends React.Component<Props> {

  render() {
    return <View style={styles.root}>
      <CreateForm />
    </View>
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column'
  }
});
