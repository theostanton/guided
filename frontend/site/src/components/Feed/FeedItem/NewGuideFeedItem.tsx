import React from 'react';
import {NewGuideFeedEvent} from "../FeedEvent";
import {StyleSheet, View} from "react-native";
import GuideListItemMap from "components/Guides/GuideListItem/GuideListItemMap";
import IconMarker from "components/Map/IconMarker";
import {itemStateColor} from "styles/colors";
import {assertMaybes} from "utils";

export default function (event: NewGuideFeedEvent) {
  return <View style={styles.root}>
    <GuideListItemMap guide={event.guide}>
      {event.guide.spots.nodes.map(assertMaybes()).map(spot => {
        return <IconMarker
          id={spot.id}
          color={itemStateColor('spot', 'none')}
          position={{
            latitude: spot.lat,
            longitude: spot.long
          }}/>
      })}
    </GuideListItemMap>
  </View>
}

const styles = StyleSheet.create({
  root: {
    height: 200,
    width: '100%'
  }
})