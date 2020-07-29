import Router from '.';
import {NavigationProp} from '@react-navigation/core';


export default class AppRouter implements Router {

  static create(navigation: NavigationProp<ParamList>): AppRouter {
    return new AppRouter(navigation)
  }

  private navigation: NavigationProp<ParamList>;

  constructor(navigation: NavigationProp<ParamList>) {
    this.navigation = navigation
  }

  async goToLogin() {
    this.navigation.navigate("Login")
  }

  async goToSignup() {
    this.navigation.navigate("Signup")
  }

  async goHome() {
    this.navigation.navigate("Home")
  }

  async goToProfile(username: string) {
    this.navigation.navigate("Profile", {
      username
    })
  }

  async goToGuide(username: string, slug: string) {
    this.navigation.navigate("Guide", {
      username,
      slug
    })
  }

}