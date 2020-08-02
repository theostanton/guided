import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GuideStore from "screens/Guide/GuideStore";
import {ModeProps} from "screens/Guide/GuideStore/GuideMode";
import {h1} from "styles/text";
import {inject} from "mobx-react";
import LabelledText from "components/LabelledText";
import RightRailHeader, {HeaderAction} from "../RightRailHeader";
import Button from "components/Button";
import client from "api/client";
import {RemoveSpotDocument, RemoveSpotMutation, RemoveSpotMutationVariables} from "api/generated";

type Props = ModeProps<'SelectSpot'> & {
  guideStore?: GuideStore
};
type State = {
  edit: boolean
};

@inject('guideStore')
export default class SelectSpotContent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      edit: false
    }
  }

  renderHeader() {
    const actions: HeaderAction[] = [
      {
        name: 'delete',
        onPress: async () => {
          await this.removeSpot()
        }
      },
      {
        name: 'edit',
        onPress: () => {
          this.setState({
            edit: !this.state.edit
          })
        }
      },
    ]
    return <RightRailHeader actions={actions}/>
  }

  renderTitle() {
    return <Text style={styles.title}>
      {this.props.params.spot.name}
    </Text>
  }

  renderInfo() {
    const spot = this.props.params.spot
    return <>
      <LabelledText label={'Location'}>{spot.location}</LabelledText>
      <LabelledText label={'Country'}>{spot.country}</LabelledText>
      <LabelledText label={'Nights'}>{spot.nights}</LabelledText>
    </>
  }

  renderButton() {
    return <Button label={'Save'} onPress={async () => {

    }
    }/>
  }

  updateSpot() {

  }

  async removeSpot() {
    const variables: RemoveSpotMutationVariables = {
      id: this.props.params.spot.id
    }
    const result = await client.mutate<RemoveSpotMutation>({
      mutation: RemoveSpotDocument,
      variables
    })

    if (result.errors) {
      console.log('result.errors', result.errors)
      return
    }

    if (result.data.removeSpot.success) {
      this.props.guideStore.clearMode()
    } else {
      console.log('failed', result.data.removeSpot.message)
    }
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderHeader()}
        {this.renderTitle()}
        {this.renderInfo()}
        {this.state.edit && this.renderButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
  title: {
    ...h1,
    flex: 1
  }
});
