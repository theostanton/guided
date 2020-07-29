import {useRouter} from "next/router";
import Layout from "components/Layout";
import {View} from "react-native";
import {webRouter} from "utils/router/WebRouter";
import React from "react";
import GuideScreen from "screens/Guide";

export default function GuidePage() {
  const router = useRouter()
  return (
    <Layout>
      <View>
        <GuideScreen
          params={{
            username: router.query.username as string,
            slug: router.query.slug as string
          }}
          router={webRouter}/>
      </View>
    </Layout>
  );
}
