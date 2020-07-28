import Router from '.';

export default class WebRouter implements Router{
  async goToLogin(): Promise<void> {
    window.location.href = 'login';
  }

  async goToSignup(): Promise<void> {
    window.location.href = 'signup';
  }

  async goHome(): Promise<void> {
    window.location.href = '/';
  }

  async goToProfile(username: string): Promise<void> {
    window.location.href = username
  }

}

const webRouter=new WebRouter();

export {webRouter}