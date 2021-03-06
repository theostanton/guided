import React from "react";
import {StyleSheet, Text, View, ViewStyle} from "react-native";
import {h3, h5} from "../../styles/text";
import {IconName} from "../Icon/names";
import Icon from "../Icon";
import {Color} from "styles/colors";
import {half, icon, quarter} from "styles/dimensions";

export type Props = {
  style?: ViewStyle
  title?: string
  subtitle?: string
  icon?: {
    name: IconName,
    color?: Color
  },
  actions?: HeaderAction[],
  leftAction?: HeaderAction
};
type State = {};

export type HeaderAction = {
  name: IconName
  onPress: () => Promise<void> | void
}

export default class Header extends React.Component<Props, State> {

  renderLeftAction() {
    const action = this.props.leftAction!
    return <View style={styles.leftAction}>
      <View key={action.name} style={styles.action}>
        <Icon name={action.name} onPress={action.onPress} size={icon}/>
      </View>
    </View>

  }

  renderActions() {
    return <View style={styles.actions}>
      {this.props.actions!.map(action => {
        return <View key={action.name} style={styles.action}>
          <Icon name={action.name} onPress={action.onPress} size={icon}/>
        </View>
      })}
    </View>
  }

  render() {
    return <View style={[styles.root, this.props.style]}>
      {this.props.leftAction && this.renderLeftAction()}
      {this.props.icon && <View style={styles.icon}>
        <Icon name={this.props.icon.name} color={this.props.icon.color} size={icon}/>
      </View>}
      <View style={styles.text}>
        {this.props.title && <Text style={styles.title}>{this.props.title}</Text>}
        {this.props.subtitle && <Text style={styles.subtitle}>{this.props.subtitle}</Text>}
      </View>
      {this.props.actions && this.renderActions()}
    </View>

  }

}


const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: half
  },
  leftAction: {
    flexShrink: 1,
    alignItems: 'center',
  },
  icon: {
    flex: 0,
    justifyContent: 'center',
    paddingRight: quarter
  },
  text: {
    flex: 1,
    flexGrow: 1,
    paddingRight: quarter,
    paddingLeft: quarter,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  title: {
    ...h3,
    flex: 1
  },
  subtitle: {
    ...h5,
    flex: 1
  },
  actions: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  action: {
    height: icon,
    width: icon,
  }
})