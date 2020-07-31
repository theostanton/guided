import {action, observable, runInAction} from 'mobx';
import client, {USER_KEY} from 'api/client';
import * as storage from 'utils/storage';
import {
  GetUsernameDocument,
  GetUsernameQuery,
  GetUsernameQueryVariables,
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
  SignUpDocument,
  SignUpMutation,
  SignUpMutationVariables,
} from 'api/generated';

export type User = {
  bearerToken: string;
  username?: string;
  email: string;
};

export default class AuthStore {

  value: number = new Date().getTime()

  static async init(): Promise<AuthStore> {
    if (typeof window !== 'undefined') {
      const user = await storage.getObject<User>(USER_KEY)
      if (user) {
        return new AuthStore(user)
      }
    }
    return new AuthStore(undefined)
  }

  @observable
  user: User | undefined;

  constructor(user: User | undefined) {
    this.user = user
  }

  async setUser(user: User | undefined) {
    console.log('setUser', user)
    if (user) {
      await storage.setObject(USER_KEY, user);
    } else {
      await storage.remove(USER_KEY);
    }
    runInAction(() => {
      this.user = user
    })
  }

  async login(
    email: string,
    password: string,
  ): Promise<{
    success: boolean;
    message?: string;
  }> {
    const variables: LoginMutationVariables = {
      email,
      password,
    };
    const result = await client.mutate<LoginMutation>({
      mutation: LoginDocument,
      variables,
    });

    if (result.errors && result.errors.length > 0) {
      // logError('LoginMutation error');
      result.errors.forEach((error) => {
        // logError(error.message);
      });
      return {
        success: false,
        message: result.errors
          .map((error) => {
            return error.message;
          })
          .join('\n'),
      };
    }

    if (!result.data.authenticate?.jwtToken) {
      return {
        success: false,
        message: 'Failed to login',
      };
    }

    const bearerToken = result.data!.authenticate!.jwtToken;

    this.setUser({
      email,
      bearerToken,
    });

    const usernameResult = await client.query<GetUsernameQuery>({
      query: GetUsernameDocument,
      variables: {
        email,
      } as GetUsernameQueryVariables,
    });

    if (usernameResult.errors && usernameResult.errors.length > 0) {
      usernameResult.errors.forEach((error) => {
      });

      this.setUser(undefined);
      return {
        success: false,
        message: result.errors
          .map((error) => {
            return error.message;
          })
          .join('\n'),
      };
    }

    const {colour, username} = usernameResult.data!.users!.nodes[0]!;

    this.setUser({
      username,
      email,
      bearerToken,
    });

    return {
      success: true,
    };
  }

  async signUp(
    username: string,
    email: string,
    password: string,
  ): Promise<{ success: boolean; message?: string }> {
    const variables: SignUpMutationVariables = {
      username,
      email,
      password,
    };
    const result = await client.mutate<SignUpMutation>({
      mutation: SignUpDocument,
      variables,
    });

    if (result.errors && result.errors.length > 0) {
      return {
        success: false,
        message: result.errors
          .map((error) => {
            return error.message;
          })
          .join('\n'),
      };
    }

    return this.login(email, password);
  }

  @action
  logOut() {
    this.setUser(undefined);
    console.log('logOUt this.user=', this.user);
  }
}

