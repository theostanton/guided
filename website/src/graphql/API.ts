/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type ListMyGuidesQuery = {
  listGuides:  {
    __typename: "ModelGuideConnection",
    items:  Array< {
      __typename: "Guide",
      id: string,
      title: string,
      spots:  {
        __typename: "ModelSpotConnection",
        items:  Array< {
          __typename: "Spot",
          guideID: string,
        } | null > | null,
      } | null,
    } | null > | null,
  } | null,
};

export type ListAllMyGuideInfoQuery = {
  listGuides:  {
    __typename: "ModelGuideConnection",
    items:  Array< {
      __typename: "Guide",
      id: string,
      spots:  {
        __typename: "ModelSpotConnection",
        items:  Array< {
          __typename: "Spot",
          id: string,
          label: string | null,
          nights: number,
        } | null > | null,
      } | null,
      rides:  {
        __typename: "ModelRideConnection",
        items:  Array< {
          __typename: "Ride",
          id: string,
          fromSpotID: string,
          toSpotID: string,
        } | null > | null,
      } | null,
    } | null > | null,
  } | null,
};
