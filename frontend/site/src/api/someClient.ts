import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from 'apollo-boost';
import * as envs from '../utils/envs';

function httpLink(): ApolloLink {
  return new HttpLink({
    uri: envs.get('GUIDED_GRAPHQL'),
    // @ts-ignore
    fetch: fetch,
  });
}

export default new ApolloClient({
  connectToDevTools: true,
  link: httpLink(),
  cache: new InMemoryCache(),
});
