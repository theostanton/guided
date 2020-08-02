import React from 'react';
import {StyleSheet, View} from 'react-native';
import {icon} from "styles/dimensions";
import {darkIcon} from "styles/colors";
import GuideStore from "screens/Guide/GuideStore";
import {inject} from "mobx-react";
import {IconName} from "components/Icon/names";
import Icon from "components/Icon";

export type HeaderAction = {
  name: IconName
  onPress: () => Promise<void> | void
}

type Props = {
  guideStore?: GuideStore
  actions?: HeaderAction[]
};
type State = {};

@inject('guideStore')
export default class RightRailHeader extends React.Component<Props, State> {

  renderIcon() {
    return <View style={styles.icon}>
      <Icon name={'close'} size={icon} onPress={() => {
        this.props.guideStore.clearMode()
      }}/>
    </View>
  }

  renderActions() {
    return <View style={styles.actions}>
      {this.props.actions.map(action => {
        return <View key={action.name} style={styles.action}>
          <Icon name={action.name} onPress={action.onPress} size={icon}/>
        </View>
      })}
    </View>
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderIcon()}
        {this.props.actions && this.renderActions()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row'
  },
  icon: {
    width: icon,
    height: icon,
  },
  actions: {
    flex: 1,
    height: icon,
    flexDirection: 'row-reverse',
  },
  action: {
    height: icon,
    width: icon,
  }
});
