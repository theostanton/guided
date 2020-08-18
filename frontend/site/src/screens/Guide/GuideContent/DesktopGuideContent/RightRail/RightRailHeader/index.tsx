import React from 'react';
import {StyleSheet} from 'react-native';
import {hairline, icon, whole} from "styles/dimensions";
import {IconName} from "components/Icon/names";
import {border} from "../../../../../../styles/colors";
import Header from "../../../../../../components/Header";

export type HeaderAction = {
  name: IconName
  onPress: () => Promise<void> | void
}

type Props = {
  title?: string
  actions?: HeaderAction[]
  onDismiss: () => void
};
type State = {};

export default class RightRailHeader extends React.Component<Props, State> {

  render() {
    return <Header
      style={styles.root}
      title={this.props.title}
      leftAction={{
        name: 'close', onPress: () => {
          this.props.onDismiss()
        }
      }
      }
      actions={this.props.actions}/>
  }
}

const styles = StyleSheet.create({
  root: {
    borderBottomColor: border,
    borderBottomWidth: hairline
  },
});
