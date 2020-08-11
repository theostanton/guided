import React from 'react';
import {SelfCreatedFeedEvent} from "../FeedEvent";
import {Text, View} from "react-native";

export default function (event: SelfCreatedFeedEvent) {
  return <View><Text>You joined</Text></View>
}