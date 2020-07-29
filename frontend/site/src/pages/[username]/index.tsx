import {StyleSheet, View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import {webRouter} from 'utils/router/WebRouter';
import ProfileScreen from 'screens/Profile';
import { useRouter } from 'next/router'

type Props = {
  username: string;
};

export default function ProfilePage(props: Props) {
  const router = useRouter()
  return (
    <Layout>
      <View>
        <ProfileScreen
          params={{
            username: router.query.username as string,
          }}
          router={webRouter}/>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
  },
});
