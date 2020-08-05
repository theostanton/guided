import React from 'react';
import {StyleSheet, View} from 'react-native';
import {h4} from 'styles/text';
import {hairline, half, whole} from 'styles/dimensions';
import {border} from 'styles/colors';
import Link from 'components/Link';
import {inject, observer} from 'mobx-react';
import AuthStore from 'stores/AuthStore';
import {Route} from "utils/navigation/ParamList";

type Props = {
  authStore?: AuthStore;
};
type State = {};

@inject('authStore')
@observer
export default class Layout extends React.Component<Props, State> {
  renderHeader() {
    const isLoggedin = this.props.authStore.isLoggedIn;
    console.log('renderHeader isLoggedin=', isLoggedin);
    console.log('renderHeader user=', this.props.authStore.user);

    type Item = {
      text: string;
      onClick?: () => Promise<void>;
      href?: string;
    };
    const leftItems: Item[] = isLoggedin
      ? [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Profile',
          href: Route.user({
            username: this.props.authStore.user.username
          }),
        },
        {
          text: 'Create',
          href: '/create',
        },
      ]
      : [];
    const rightItems: Item[] = isLoggedin
      ? [
        {
          text: 'Sign out',
          onClick: async () => {
            await this.props.authStore.logOut();
          },
        },
        {
          text: 'Account',
          href: '/account',
        },
      ]
      : [
        {
          text: 'Login',
          href: '/login',
        },
        {
          text: 'Signup',
          href: '/signup',
        },
      ];

    return (
      <View style={styles.headerRoot} accessibilityRole="header">
        <View style={styles.headerLeft}>
          {leftItems.map((item) => {
            return (
              <Link
                key={item.text}
                viewStyle={styles.headerItem}
                textStyle={h4}
                href={item.href}
                onClick={item.onClick}
              >
                {item.text}
              </Link>
            );
          })}
        </View>
        <View style={styles.headerRight}>
          {rightItems.map((item) => {
            return (
              <Link
                key={item.text}
                viewStyle={styles.headerItem}
                textStyle={h4}
                href={item.href}
                onClick={item.onClick}>
                {item.text}
              </Link>
            );
          })}
        </View>
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
    width: '100%',
    flexDirection: 'column',
    maxWidth: 800,
    alignSelf: 'center',
  },
  headerRoot: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: border,
    borderBottomWidth: hairline,
  },
  headerLeft: {
    flexDirection: 'row',
    flexGrow: 0,
  },
  headerRight: {
    flexDirection: 'row-reverse',
    flexGrow: 1,
  },
  headerItem: {
    paddingTop: whole,
    paddingBottom: whole,
    paddingLeft: half,
    paddingRight: half,
  },
  content: {
    paddingTop: half,
  },
});
