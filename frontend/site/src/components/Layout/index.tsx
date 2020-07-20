import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {h4} from 'styles/text';
import {hairline, half, whole} from 'styles/dimensions';
import {border} from 'styles/colors';
import Link from 'components/Link';

type Props = {};
type State = {};

export default class Layout extends React.Component<Props, State> {
  renderHeader() {
    type Item = {
      text: string;
      link: string;
    };
    const items: Item[] = [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Account',
        link: '/account',
      },
    ];

    return (
      <View style={styles.headerRoot} accessibilityRole="header">
        {items.map((item) => {
          return (
            <Link
              key={item.text}
              viewStyle={styles.headerItem}
              textStyle={h4}
              href={item.link}>
              {item.text}
            </Link>
          );
        })}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderHeader()}
        <View style={styles.content}>{this.props.children}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    width: 800,
    alignSelf: 'center',
    height: '100%',
  },
  headerRoot: {
    flexDirection: 'row',
    flexGrow: 0,
    borderBottomColor: border,
    borderBottomWidth: hairline,
  },
  headerItem: {
    paddingTop: whole,
    paddingBottom: whole,
    paddingLeft: half,
    paddingRight: half,
  },
  content: {
    flexGrow: 1,
    marginTop: half,
  },
});
