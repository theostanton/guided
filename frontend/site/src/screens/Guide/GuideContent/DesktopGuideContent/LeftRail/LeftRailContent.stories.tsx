import React from 'react'
import LeftRailContent, {Props} from "./LeftRailContent";
import {Story} from "@storybook/react";
import {COUNTRIES} from "utils/human";
import {RideFragment, SpotFragment} from "api/generated";
import {SEYTHENEX} from "components/Map/consts";


export default {
  title: 'Guide/Desktop/Left Rail',
  argTypes: {
    title: {
      control: 'text'
    },
    owner: {
      control: 'text'
    },
    spots: {
      control: 'array',
    },
    selectedSpot: {
      control: 'boolean',
    },
    rides: {
      control: 'array',
    },
    countries: {
      control: {
        type: 'inline-check',
        options: Object.keys(COUNTRIES)
      }
    },
    durationSeconds: {
      control: 'number'
    },
    distanceMeters: {
      control: 'number'
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'rail'
    }
  }
}

type Args = {
  title: string,
  owner: string,
  selectedSpot: boolean,
  spots: SpotFragment[],
  rides: RideFragment[],
  countries: string[],
  distanceMeters: number,
  durationSeconds: number
}

const Template: Story<Args> = (args: Args) => {
  const guide: Props['guide'] = {
    durationSeconds: args.durationSeconds,
    distanceMeters: args.distanceMeters,
    countries: args.countries,
    title: args.title,
    rides: {
      nodes: args.rides,
      totalCount: args.rides.length
    },
    spots: {
      nodes: args.spots,
      totalCount: args.spots.length
    },
    owner: args.owner
  }
  const selectedSpotId = args.selectedSpot && args.spots.length > 0 ? args.spots[0].id : undefined
  return <LeftRailContent
    guide={guide}
    selectedSpotId={selectedSpotId}
    goBack={() => {
    }
    }
    selectSpot={() => {
    }
    }
  />
}

function generate(args: Args): Story<Args> {
  const story = Template.bind({})
  story.args = args
  return story
}

function spot(label: string, location: string): SpotFragment {
  return {
    long: SEYTHENEX.longitude,
    lat: SEYTHENEX.latitude,
    created: new Date().toISOString(),
    id: label,
    location,
    label,
    country: 'FR',
    nights: 1
  }
}

function ride(): RideFragment {
  return {} as RideFragment
}

export const Empty = generate({
  owner: 'theo',
  spots: [],
  rides: [],
  selectedSpot: false,
  title: 'Some empty guide',
  countries: [],
  distanceMeters: 0,
  durationSeconds: 0
})

export const Single = generate({
  owner: 'theo',
  selectedSpot: false,
  spots: [spot('Somewhere', 'Seythenex')],
  rides: [],
  title: 'Some single spot guide',
  countries: ['FR'],
  distanceMeters: 123,
  durationSeconds: 456
})


export const Multiple = generate({
  owner: 'theo',
  selectedSpot: true,
  spots: [
    spot('Somewhere', 'Seythenex'),
    spot('Somewhere else', 'Annecy'),
    spot('Somewhere new', 'Chambery'),
  ],
  rides: [],
  title: 'Some multiple spot guide',
  countries: ['FR'],
  distanceMeters: 50102,
  durationSeconds: 60 * 60 * 5
})

