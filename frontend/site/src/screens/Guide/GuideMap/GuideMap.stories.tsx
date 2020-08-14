import React from 'react'

import GuideMap, {Props} from "./index";
import {Story} from '@storybook/react'
import {ANNECY, SEYTHENEX} from "../../../components/Map/consts";
import {View} from "react-native";
import {Provider} from "mobx-react";
import CameraStore from "components/Map/CameraStore";
import {SpotFragment} from "../../../api/generated";

export default {
  title: 'Guide/Map',
  component: GuideMap
}

type Args = Pick<Props, 'guide' | 'addSpotParams' | 'selectedRideId' | 'selectedSpotId'> & {
  cameraStore: CameraStore
}

const Template: Story<Args> = (args: Args) =>
  <Provider cameraStore={args.cameraStore}>
    <View style={{
      width: '100%',
      height: '500px',
    }}>
      <GuideMap guide={args.guide}
                addSpotParams={args.addSpotParams}
                selectedRideId={args.selectedRideId}
                selectedSpotId={args.selectedSpotId}
                selectSpot={() => {
                }}
                addSpot={() => {
                }}/>
    </View>
  </Provider>


function generate(spots: Pick<SpotFragment, 'long' | 'lat'>[]): Story<Args> {

  let cameraStore = new CameraStore({width: 200, height: 200});
  const story = Template.bind({})
  let guideSpots = {
    nodes: spots.map((spot, index) => {
      return {
        ...spot,
        created: new Date().toISOString(),
        name: `Spot ${index}`,
        id: `spot_${index}`
      }
    }),
    totalCount: spots.length
  };
  let guide = {
    spots: guideSpots,
    rides: {
      nodes: [],
      totalCount: 0
    }
  };
  cameraStore.guideBounds(guide)
  story.args = {
    cameraStore,
    guide: guide
  }
  return story
}

export const Empty = generate([])

export const Single_Spot = generate([{
  long: SEYTHENEX.longitude,
  lat: SEYTHENEX.latitude
}])

export const Double_Spot = generate([
  {
    lat: SEYTHENEX.latitude,
    long: SEYTHENEX.longitude
  },
  {
    lat: ANNECY.latitude,
    long: ANNECY.longitude
  },
])

