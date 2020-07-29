import {Provider} from 'mobx-react';
import AuthStore from 'stores/AuthStore';
import {webRouter} from "utils/router/WebRouter";
import {ApolloProvider} from "@apollo/client";
import client from "api/client";

const authStore = new AuthStore();

export default function App({Component, pageProps}) {
  return (
    <Provider authStore={authStore} router={webRouter}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}
