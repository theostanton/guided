import Router from '.';
import {NavigationProp} from '@react-navigation/core';


export default class AppRouter implements Router {

  private navigation: NavigationProp<ParamList>;

  updateNavigation(navigation: NavigationProp<ParamList>) {
    this.navigation = navigation
  }

  async goToLogin() {
    throw new Error(`App handles this differently`)
  }

  async goToSignup() {
    throw new Error(`App handles this differently`)
  }

  async goHome() {
    this.navigation.navigate("Root")
  }

  async goToCreate() {
    this.navigation.navigate('Create')
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