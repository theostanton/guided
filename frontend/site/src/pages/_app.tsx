import {Provider} from 'mobx-react';
import AuthStore from 'stores/AuthStore';
import {AppRegistry} from 'react-native';

const authStore = new AuthStore();

export default function App({Component, pageProps}) {
  return (
    <Provider authStore={authStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
