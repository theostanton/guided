import {LinkingOptions} from "@react-navigation/native/lib/typescript/src/types";
import React from "react";

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
    username: string,
    slug: string
  }
}

export const linking: LinkingOptions = {
  prefixes: [],
  config: {
    screens: {
      Root: '',
      Create: '/create',
      Login: '/login',
      Signup: '/signup',
      Profile: '/:username',
      Guide: '/:username/:slug'
    },
  },
};

export function wrapParams(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props['route']}/>
    }
  }
}
