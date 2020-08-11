import React from 'react';
import {JoinedFeedEvent} from "../FeedEvent";
import {Text, View} from "react-native";

export default function (event: JoinedFeedEvent) {
  return <View><Text>{event.user.username} joined</Text></View>
}