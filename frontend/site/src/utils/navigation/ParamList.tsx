import {LinkingOptions} from "@react-navigation/native/lib/typescript/src/types";
import React from "react";
import {Guide, User} from "../../api/generated";

export type TabParamList = {
  Home: {},
  Account: {},
}

export type ParamList = {
  Login: {},
  Signup: {},
  Root: {},
  Create: {},
  Profile: {
    username: string
  },
  Guide: {
    owner: string,
    slug: string
  }
}

export const linking: LinkingOptions = {
  prefixes: [],
  config: {
    screens: {
      Profile: '/:username',
      Guide: '/:owner/:slug',
      Root: '',
      Create: 'create',
      Login: 'login',
      Signup: 'signup',
    },
  },
};

export class Route {
  static guide(guide: Pick<Guide, 'slug' | 'owner'>): string {
    return `/${guide.owner}/${guide.slug}`
  }

  static user(user: Pick<User, 'username'>): string {
    return `/${user.username}`
  }
}

export function wrapParams(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props['route']}/>
    }
  }
}
