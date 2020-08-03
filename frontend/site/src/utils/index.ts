import {Guide} from "api/generated";

export function guideId(guide: Pick<Guide, 'owner' | 'slug'>): string {
  return `${guide.owner}_${guide.slug}`
}

export function extractRideId(spotOrRideId: string | undefined): string | undefined {
  if (spotOrRideId && spotOrRideId.startsWith('ride_')) {
    return spotOrRideId
  }
}

export function extractSpotId(spotOrRideId: string | undefined): string | undefined {
  if (spotOrRideId && spotOrRideId.startsWith('spot_')) {
    return spotOrRideId
  }
}

export function idType(id: string | undefined): 'ride' | 'spot' | 'guide' | undefined {
  switch (true) {
    case !id:
      return
    case id.startsWith('ride_'):
      return 'ride'
    case id.startsWith('spot_'):
      return 'spot'
    case id.startsWith('guide_'):
      return 'guide'
  }
}