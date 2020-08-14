import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {ModeProps} from "screens/Guide/GuideStore/GuideMode";
import {h1} from "styles/text";
import LabelledText from "components/LabelledText";
import {roundToString} from "utils/human";
import LabelledTextInput from "components/LabelledTextInput";
import {AddSpotDocument, AddSpotMutation, GuideFragment, MutationAddSpotArgs} from "api/generated";
import client from "api/client";

export type Props = ModeProps<'AddSpot'> & {
  guide: Pick<GuideFragment, 'id'>
  onDismiss: () => void
};
type State = {
  title?: string
  saving: boolean
  error?: string
};

export default class AddSpotContent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      saving: false
    }
  }

  renderHeader() {
    return <Text style={styles.title}>
      Add spot
    </Text>
  }

  renderLocation() {
    return <View style={styles.info}>
      <LabelledTextInput label={'Title'} onChange={(title) => {
        this.setState({title})
      }}/>
    </View>
  }

  renderInfo() {
    return <View style={styles.location}>
      <LabelledText style={styles.locationText}
                    label={'Latitude'}>{roundToString(this.props.params.event.latitude)}</LabelledText>
      <LabelledText label={'Longitude'}>{roundToString(this.props.params.event.longitude)}</LabelledText>
    </View>
  }

  async save() {
    console.log('save()')

    this.setState({
      saving: true
    })

    const variables: MutationAddSpotArgs = {
      input: {
        lat: this.props.params.event.latitude,
        long: this.props.params.event.longitude,
        guideId: this.props.guide.id,
        nights: 1
      }
    }

    const result = await client.mutate<AddSpotMutation>({
      mutation: AddSpotDocument,
      variables
    })

    if (result.errors) {
      this.setState({
        saving: false,
        error: result.errors.join(',')
      })
      return
    }

    if (result.data) {
      if (result.data.addSpot.success) {
        this.props.onDismiss()
      } else {
        this.setState({
          saving: false,
          error: `No success message:${result.data.addSpot.messaage}`
        })
      }
    } else {
      this.setState({
        saving: false,
        error: 'No data'
      })
    }


  }

  isValid() {
    return this.state.title !== undefined && this.state.title.length > 0
  }

  renderButton() {
    return <Button title={'Save'}
                   onPress={async () => {
                     await this.save()
                   }}
                   disabled={!this.isValid() || this.state.saving}
    />
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderHeader()}
        {this.renderLocation()}
        {this.renderInfo()}
        {this.renderButton()}
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
  },
  location: {
    flexDirection: 'row',
    flex: 1
  },
  locationText: {
    flex: 0,
    flexGrow: 1
  },
  info: {
    flexDirection: 'column',
  }
});
