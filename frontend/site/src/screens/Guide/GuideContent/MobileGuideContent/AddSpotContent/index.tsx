import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import GuideStore from "screens/Guide/GuideStore";
import {ModeProps} from "screens/Guide/GuideStore/GuideMode";
import {h1} from "styles/text";
import LabelledText from "components/LabelledText";
import {roundToString} from "utils/human";
import LabelledTextInput from "components/LabelledTextInput";
import {AddSpotDocument, AddSpotMutation, MutationAddSpotArgs} from "api/generated";
import client from "api/client";
import {inject} from "mobx-react";
import Icon from "components/Icon";
import {icon, quarter, whole} from "styles/dimensions";
import {darkIcon} from "styles/colors";
import LabelledPicker from "components/LabelledPicker";

type Props = ModeProps<'AddSpot'> & {
  guideStore?: GuideStore
};
type State = {
  title?: string
  nights: number
  saving: boolean
  error?: string
};

@inject('guideStore')
export default class AddSpotContent extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = {
      saving: false,
      nights: 1
    }
  }

  renderHeader() {
    return <View style={styles.header}>
      <View style={styles.headerIcon}>
        <Icon name={'place'} color={'#ff00ff'} size={icon}/>
      </View>
      <Text style={styles.headerTitle}>
        Add spot
      </Text>
      <View style={styles.headerButton}>
        <Icon name={'close'} color={darkIcon} size={icon} onPress={() => {
          console.log('close')
          this.props.guideStore!.clearMode()
        }}/>
      </View>
    </View>
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
                      }} selected={this.state.nights.toString()}/>
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
        guideId: this.props.guideStore!.guide!.id,
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
        this.props.guideStore!.clearMode()
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
  header: {
    flexDirection: 'row'
  },
  headerTitle: {
    ...h1,
    flex: 1,
    marginLeft: quarter
  },
  headerIcon: {},
  headerButton: {},
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
