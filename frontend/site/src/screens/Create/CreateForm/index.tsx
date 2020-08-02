import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import LabelledTextInput from "components/LabelledTextInput";
import {h1, h5} from "styles/text";
import {CreateDocument, CreateGuideInput, CreateMutation, MutationCreateGuideArgs, TransportType} from "api/generated";
import LabelledCheckBox from "components/LabelledCheckBox";
import LabelledText from "components/LabelledText";
import client from "api/client";
import {WithNavigationProps} from "utils/navigation";
import {NavigationProp, useNavigation} from "@react-navigation/core";
import {ParamList} from "utils/navigation/ParamList";

type Props = WithNavigationProps;

type State = {
  creating: boolean
  input: Partial<CreateGuideInput>
  error: string | undefined
}

class CreateForm extends React.Component<Props, State> {

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
        const {slug, owner} = result.data.createGuide
        this.props.navigation.navigate('Guide', {
          owner,
          slug,
        })
      } else {
        this.setState({
          creating: false,
          error: `No success message:${result.data.createGuide.message}`
        })
      }
    } else {
      this.setState({
        creating: false,
        error: 'No data'
      })
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


export default function () {
  const navigation = useNavigation<NavigationProp<ParamList>>();
  return <CreateForm navigation={navigation}/>
}
