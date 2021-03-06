import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {ModeProps} from "screens/Guide/GuideStore/GuideMode";
import LabelledText from "components/LabelledText";
import {roundToString} from "utils/human";
import LabelledTextInput from "components/LabelledTextInput";
import {AddSpotDocument, AddSpotMutation, GuideFragment, MutationAddSpotArgs} from "api/generated";
import client from "api/client";
import {whole} from "styles/dimensions";
import {primary} from "styles/colors";
import LabelledPicker from "components/LabelledPicker";
import Header from "components/Header";

export type Props = ModeProps<'AddSpot'> & {
  onDismiss: () => void,
  guide: Pick<GuideFragment, 'id'>
};
type State = {
  title?: string
  nights: number
  saving: boolean
  error?: string
};

export default class AddSpotContent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      saving: false,
      nights: 1
    }
  }

  renderHeader() {
    return <Header
      title={'Add spot'}
      icon={{
        name: 'place',
        color: primary
      }}
      actions={[{
        name: 'close',
        onPress: this.props.onDismiss
      }]}/>
  }

  renderLocation() {
    return <View style={styles.info}>
      <LabelledTextInput label={'Title'} onChange={(title) => {
        this.setState({title})
      }}/>
    </View>
  }

  renderInfo() {
    return <View>
      <View style={styles.location}>
        <LabelledText style={styles.locationText}
                      label={'Latitude'}>{roundToString(this.props.params.event.latitude)}</LabelledText>
        <LabelledText label={'Longitude'}>{roundToString(this.props.params.event.longitude)}</LabelledText>
      </View>
      <LabelledPicker label={'Nights'} options={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                      onValueChange={(nights) => {
                        this.setState({
                          nights: parseInt(nights)
                        })
                      }}
                      selected={this.state.nights.toString()}/>
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
        nights: this.state.nights
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
      console.log('result.data', result.data)
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
      <View style={styles.root} pointerEvents={'auto'}>
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
    flex: 0,
    padding: whole,
  },
  location: {
    flexDirection: 'row',
  },
  locationText: {
    flex: 0,
    flexGrow: 1
  },
  info: {
    flexDirection: 'column',
  }
});
