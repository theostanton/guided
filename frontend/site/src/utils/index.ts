import {Guide, Maybe} from "api/generated";

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

export function assertMaybes<T>(): (t: Maybe<T>) => T {
  return (t: Maybe<T>) => t!
}

export type PickRequired<T, K extends keyof T> = Required<{
  [P in K]: NonNullable<T[P]>;
}>;

// type NonNullable<T> = T extends null | undefined ? never : T;

export function idType(id: string | undefined): 'ride' | 'spot' | 'guide' | undefined {
  if (id === undefined) {
    return
  }
  switch (true) {
    case id.startsWith('ride_'):
      return 'ride'
    case id.startsWith('spot_'):
      return 'spot'
    case id.startsWith('guide_'):
      return 'guide'
  }
}