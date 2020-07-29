import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import LabelledTextInput from "components/LabelledTextInput";
import {h1, h5} from "styles/text";
import {CreateDocument, CreateGuideInput, CreateMutation, MutationCreateGuideArgs, TransportType} from "api/generated";
import LabelledCheckBox from "components/LabelledCheckBox";
import LabelledText from "components/LabelledText";
import client from "api/client";
import {inject} from "mobx-react";
import Router from "utils/router";

type Props = {
  router?: Router
};

type State = {
  creating: boolean
  input: Partial<CreateGuideInput>
  error: string | undefined
}

@inject("router")
export default class CreateForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      input: {
        isCircular: false,
        maxHoursPerRide: 6,
        startDate: null,
        type: TransportType.Motorcycle
      },
      creating: false,
      error: undefined
    }

  }

  updateInput(patch: Partial<CreateGuideInput>) {
    this.setState({
      input: {
        ...this.state.input,
        ...patch
      }
    })
  }


  isValid(): boolean {
    if (this.state.input.title === undefined || this.state.input.title.length === 0) {
      return false
    }
    return true
  }

  async create(): Promise<void> {
    this.setState({
      creating: true
    })
    const variables: MutationCreateGuideArgs = {
      input: this.state.input as CreateGuideInput
    }


    const result = await client.mutate<CreateMutation>({
      mutation: CreateDocument,
      variables
    })

    if (result.errors) {
      this.setState({
        creating: false,
        error: result.errors.join(',')
      })
      return
    }

    if (result.data) {
      if (result.data.createGuide.success) {
        console.log('success')
        await this.props.router.goToProfile('1')
        return
      } else {
        this.setState({
          creating: false,
          error: `No success message:${result.data.createGuide.message}`
        })
        return
      }
    } else {


      if (result.errors) {
        this.setState({
          creating: false,
          error: 'No data'
        })
        return
      }
    }

  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.header}>Create guide</Text>
        <LabelledTextInput label={'Title'} onChange={(title) => {
          this.updateInput({
            title
          })
        }}/>
        <LabelledCheckBox
          selected={this.state.input.isCircular}
          label={'Is circular'}
          onChange={(async isCircular => {
            this.updateInput({isCircular})
          })}/>
        <LabelledText label={'Max hours'}>{this.state.input.maxHoursPerRide}</LabelledText>
        <LabelledText label={'Type'}>{this.state.input.type}</LabelledText>
        <LabelledText label={'Start date'}>{this.state.input.startDate}</LabelledText>


        {this.state.error && <Text style={styles.error}>{this.state.error}</Text>}
        <Button title={'Create'}
                onPress={async () => {
                  await this.create()
                }}
                disabled={!this.isValid() || this.state.creating}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  header: {
    ...h1
  },
  updatedAt: {
    ...h5
  },
  error: {
    ...h5,
    color: 'red'
  }
})

