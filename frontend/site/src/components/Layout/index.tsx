import React from 'react';
import {StyleSheet, View} from 'react-native';
import {h4} from 'styles/text';
import {hairline, half, whole} from 'styles/dimensions';
import {border} from 'styles/colors';
import Link from 'components/Link';
import {inject, observer} from 'mobx-react';
import AuthStore from 'stores/AuthStore';

type Props = {
  authStore?: AuthStore;
};
type State = {};

@inject('authStore')
@observer
export default class Layout extends React.Component<Props, State> {
  renderHeader() {
    const isLoggedin = this.props.authStore.user!==undefined;
    console.log('renderHeader isLoggedIn=', isLoggedin);

    type Item = {
      text: string;
      onClick?: () => Promise<void>;
    };
    const leftItems: Item[] = isLoggedin
      ? [
          {
            text: 'Home',
            onClick: async () => {
              // await webRouter.goHome();
            },
          },
          {
            text: 'Profile',
            onClick: async () => {
              // await webRouter.goToProfile(this.props.authStore.user.username);
            },
          },
          {
            text: 'Create',
            onClick: async () => {
              // await webRouter.goToCreate();
            },
          },
        ]
      : [];
    const rightItems: Item[] = isLoggedin
      ? [
          {
            text: 'Sign out',
            onClick: async () => {
              await this.props.authStore.logOut();
              // await webRouter.goHome();
            },
          },
          {
            text: 'Account',
            onClick: async () => {
              // await webRouter.goHome();
            },
          },
        ]
      : [
          {
            text: 'Login',
            onClick: async () => {
              // await webRouter.goToLogin();
            },
          },
          {
            text: 'Signup',
            onClick: async () => {
              // await webRouter.goToSignup();
            },
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
    flexGrow: 1,
    marginTop: half,
  },
});
