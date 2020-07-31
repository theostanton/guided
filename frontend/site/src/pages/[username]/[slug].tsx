import {useRouter} from "next/router";
import Layout from "components/Layout";
import {View} from "react-native";
import {webRouter} from "utils/router/WebRouter";
import React from "react";
import GuideScreen from "screens/Guide";
import {Provider} from "mobx-react";
import GuideStore from "screens/Guide/store";

export default function GuidePage() {
  console.log('GuidePage()')
  const router = useRouter()
  const guideStore = new GuideStore()
  return (
    <Provider guideStore={guideStore}>
      <Layout>
        <View>
          <GuideScreen
            router={webRouter}
            params={{
              username: router.query.username as string,
              slug: router.query.slug as string
            }}/>
        </View>
      </Layout>
    </Provider>
  );
}
