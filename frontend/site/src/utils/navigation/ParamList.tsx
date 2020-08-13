import {LinkingOptions} from "@react-navigation/native/lib/typescript/src/types";
import React from "react";
import {Guide, User} from "api/generated";

export type TabParamList = {
  Feed: {},
  Profile: {
    username: string
  },
  Account: {},
}

export type ParamList = {
  Login: {},
  Signup: {},
  Root: {},
  Account: {},
  Create: {},
  Profile: {
    username: string
  },
  Guide: {
    owner: string,
    slug: string,
    itemId?: string
  }
}

export function linking(isLandscape: boolean): LinkingOptions {
  return {
    prefixes: [],
    config: {
      screens: {
        Root: isLandscape ? '' : {
          screens: {
            Feed: '',
            Profile: '',
            Account: '',
          }
        },
        Account: '/account',
        Create: '/create',
        Login: '/login',
        Signup: '/signup',
        Profile: '/:username',
        Guide: '/:owner/:slug/:itemId?',
      },
    },
  }
};

export class Route {
  static guide(guide: Pick<Guide, 'slug' | 'owner'>): string {
    return `/${guide.owner}/${guide.slug}`
  }

  static user(user: Pick<User, 'username'>): string {
    return `/${user.username}`
  }
}

// export function wrapParams(WrappedComponent:any) {
//   return class extends React.Component<NavigationProps> {
//     render() {
//       return <WrappedComponent {...this.props['route']}/>
//     }
//   }
// }
