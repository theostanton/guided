type UnAuthParamList = {
  Login: {},
  Signup: {},
}

type TabParamList = {
  Home: {},
  Account: {},
}

type ParamList = {
  Root:{},
  Create: {},
  Profile: {
    username: string
  },
  Guide: {
    username: string,
    slug: string
  }
}