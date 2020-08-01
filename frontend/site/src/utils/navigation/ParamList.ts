import {LinkingOptions} from "@react-navigation/native/lib/typescript/src/types";

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