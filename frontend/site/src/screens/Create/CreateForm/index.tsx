import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from 'components/Button'
import LabelledTextInput from "components/LabelledTextInput";
import {h1, h5} from "styles/text";
import {CreateDocument, CreateGuideInput, CreateMutation, MutationCreateGuideArgs, TransportType} from "api/generated";
import LabelledCheckBox from "components/LabelledCheckBox";
import LabelledText from "components/LabelledText";
import client from "api/client";
import {WithNavigationProps} from "utils/navigation";
import {NavigationProp, useNavigation} from "@react-navigation/core";
import {ParamList} from "utils/navigation/ParamList";
import LabelledPicker from "components/LabelledPicker";

type Props = WithNavigationProps;

type State = {
  creating: boolean
  input: Partial<CreateGuideInput> & Pick<CreateGuideInput, 'startDate' | 'maxHoursPerRide'>
  error: string | undefined
}

class CreateForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      input: {
        isCircular: false,
        maxHoursPerRide: 6,
        startDate: null
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

    const input = this.state.input
    const variables: MutationCreateGuideArgs = {
      input: {
        //TODO believes values are actually correct here but incorrect somewhere
        // @ts-ignore
        type: TransportType[input.type],
        title: input.title!,
        startDate: input.startDate,
        maxHoursPerRide: input.maxHoursPerRide
      }
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
        this.props.navigation!.navigate('Guide', {
          owner: owner!,
          slug: slug!,
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
        <View style={styles.content}>
          <Text style={styles.header}>Create guide</Text>
          <LabelledTextInput label={'Title'} onChange={(title) => {
            this.updateInput({
              title
            })
          }}/>
          <LabelledCheckBox
            selected={this.state.input.isCircular || true}
            label={'Is circular'}
            onChange={(async isCircular => {
              this.updateInput({isCircular})
            })}/>
          <LabelledText label={'Max hours'}>{this.state.input.maxHoursPerRide}</LabelledText>
          <LabelledPicker label={'Type'}
                          options={Object.keys(TransportType)}
                          selected={this.state.input.type}
                          onValueChange={(type) => {
                            console.log('type->', type)
                            this.updateInput({
                              type: type as TransportType
                            })
                          }}/>
          <LabelledText label={'Start date'}>{this.state.input.startDate}</LabelledText>


          {this.state.error && <Text style={styles.error}>{this.state.error}</Text>}
        </View>
        <View style={styles.content}>
          <Button label={'Create'}
                  onPress={async () => {
                    await this.create()
                  }}
                  disabled={!this.isValid() || this.state.creating}
          />
        </View>
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
  content: {
    flexDirection: 'column',
    overflow: 'scroll'
  },
  button: {
    flex: 1
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
