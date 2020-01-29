/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateGuideInput = {
  id?: string | null,
  title: string,
  slug: string,
  owner?: string | null,
  _version?: number | null,
};

export type AllGuideTitlesForUserQueryVariables = {
  owner: string,
};

export type AllGuideTitlesForUserQuery = {
  listGuides:  {
    __typename: "ModelGuideConnection",
    items:  Array< {
      __typename: "Guide",
      id: string,
      title: string,
      slug: string,
    } | null > | null,
  } | null,
};

export type GetGuideBySlugQueryVariables = {
  slug: string,
  owner: string,
};

export type GetGuideBySlugQuery = {
  listGuides:  {
    __typename: "ModelGuideConnection",
    items:  Array< {
      __typename: "Guide",
      id: string,
      title: string,
      slug: string,
    } | null > | null,
  } | null,
};

export type CreateGuideMutationVariables = {
  input: CreateGuideInput,
};

export type CreateGuideMutation = {
  createGuide:  {
    __typename: "Guide",
    id: string,
    title: string,
    slug: string,
  } | null,
};

export type DeleteGuideMutationVariables = {
  guideId: string,
};

export type DeleteGuideMutation = {
  deleteGuide:  {
    __typename: "Guide",
    id: string,
  } | null,
};
