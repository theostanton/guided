import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Link as NavigationLink} from '@react-navigation/native'

type Props = {
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
    const styles = StyleSheet.create({
      root: {
        opacity: this.state.hover === true ? 0.5 : 1.0,
      },
    });

    const style = [styles.root, this.props.viewStyle];
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
            style={this.props.textStyle}
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
                await this.props.onClick();
              })
            }>
            {this.props.children}
          </Text>}
      </View>
    );
  }
}
