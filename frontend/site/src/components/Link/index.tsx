import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {Link as NavigationLink} from '@react-navigation/native'

export type Props = {
  href?: string;
  onClick?: () => Promise<void>;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
  selected?: boolean;
};
type State = {
  hover: boolean;
};

export default class Link extends React.Component<Props, State> {
  state: State = {
    hover: false,
  };

  render() {
    const rootStyle: ViewStyle = {
      opacity: this.state.hover === true ? 0.5 : 1.0,
    }

    const textStyle: TextStyle = {
      fontWeight: this.props.selected ? 'bold' : undefined
    }

    const style = [rootStyle, this.props.viewStyle];
    return (
      <View
        style={style}
        // @ts-ignore
        onMouseEnter={() => {
          this.setState({
            hover: true,
          });
        }}
        onMouseLeave={() => {
          this.setState({
            hover: false,
          });
        }}>
        {this.props.href
          ?
          <NavigationLink
            style={[textStyle, this.props.textStyle]}
            to={this.props.href}>
            {this.props.children}
          </NavigationLink>
          :
          <Text
            style={this.props.textStyle}
            accessibilityRole="link"
            onPress={
              this.props.onClick &&
              (async () => {
                await this.props.onClick!();
              })
            }>
            {this.props.children}
          </Text>}
      </View>
    );
  }
}
