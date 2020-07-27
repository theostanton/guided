import {
  ApolloClient,
  ApolloLink,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
} from 'apollo-boost';

import {setContext} from 'apollo-link-context';
import fetch from 'node-fetch';
import {SubscriptionClient} from 'subscriptions-transport-ws';
import ws from 'ws';
import {WebSocketLink} from 'apollo-link-ws';
import {User} from 'stores/AuthStore';
import * as storage from 'utils/storage';
import * as envs from 'utils/envs';

export const USER_KEY = 'guidedUser';

function httpLink(): ApolloLink {
  return new HttpLink({
    uri: envs.get('GUIDED_GRAPHQL'),
    // @ts-ignore
    fetch: fetch,
  });
}

function authLink(): ApolloLink {
  return setContext(async (_, {headers}) => {
    try {
      const user = await storage.getObject<User>(USER_KEY);
      if (user !== null) {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${user.bearerToken}`,
          },
        };
      }
    } catch (e) {
      console.error(e);
    }
    return {
      headers,
    };
  });
}

function subscriptionLink(): ApolloLink {
  const wsForNode = typeof window === 'undefined' ? ws : null;
  const wsClient = new SubscriptionClient(
    envs.get('GUIDED_WEBSOCKET'),
    {
      reconnect: true,
    },
    wsForNode,
  );

  return new WebSocketLink(wsClient);
}

if (!envs.exists('GUIDED_GRAPHQL')) {
  throw new Error(`Requires GUIDED_GRAPHQL`);
}

if (!envs.exists('GUIDED_WEBSOCKET')) {
  throw new Error(`Requires GUIDED_WEBSOCKET`);
}

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

export const subscriptionClient = new ApolloClient({
  connectToDevTools: true,
  //TODO can't send custom headers on websocket, so cant auth via postgraphile expected method
  link: subscriptionLink(),
  cache: new InMemoryCache(),
  defaultOptions,
});

export default new ApolloClient({
  connectToDevTools: true,
  link: authLink().concat(httpLink()),
  cache: new InMemoryCache(),
  defaultOptions,
});
