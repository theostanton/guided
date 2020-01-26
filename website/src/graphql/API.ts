/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateGuideInput = {
  id?: string | null,
  title: string,
  slug: string,
  _version?: number | null,
};

export type ModelGuideConditionInput = {
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  and?: Array< ModelGuideConditionInput | null > | null,
  or?: Array< ModelGuideConditionInput | null > | null,
  not?: ModelGuideConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateGuideInput = {
  id: string,
  title?: string | null,
  slug?: string | null,
  _version?: number | null,
};

export type DeleteGuideInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelGuideFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  and?: Array< ModelGuideFilterInput | null > | null,
  or?: Array< ModelGuideFilterInput | null > | null,
  not?: ModelGuideFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateGuideMutationVariables = {
  input: CreateGuideInput,
  condition?: ModelGuideConditionInput | null,
};

export type CreateGuideMutation = {
  createGuide:  {
    __typename: "Guide",
    id: string,
    title: string,
    slug: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateGuideMutationVariables = {
  input: UpdateGuideInput,
  condition?: ModelGuideConditionInput | null,
};

export type UpdateGuideMutation = {
  updateGuide:  {
    __typename: "Guide",
    id: string,
    title: string,
    slug: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteGuideMutationVariables = {
  input: DeleteGuideInput,
  condition?: ModelGuideConditionInput | null,
};

export type DeleteGuideMutation = {
  deleteGuide:  {
    __typename: "Guide",
    id: string,
    title: string,
    slug: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type SyncGuidesQueryVariables = {
  filter?: ModelGuideFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGuidesQuery = {
  syncGuides:  {
    __typename: "ModelGuideConnection",
    items:  Array< {
      __typename: "Guide",
      id: string,
      title: string,
      slug: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetGuideQueryVariables = {
  id: string,
};

export type GetGuideQuery = {
  getGuide:  {
    __typename: "Guide",
    id: string,
    title: string,
    slug: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListGuidesQueryVariables = {
  filter?: ModelGuideFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGuidesQuery = {
  listGuides:  {
    __typename: "ModelGuideConnection",
    items:  Array< {
      __typename: "Guide",
      id: string,
      title: string,
      slug: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateGuideSubscription = {
  onCreateGuide:  {
    __typename: "Guide",
    id: string,
    title: string,
    slug: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateGuideSubscription = {
  onUpdateGuide:  {
    __typename: "Guide",
    id: string,
    title: string,
    slug: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteGuideSubscription = {
  onDeleteGuide:  {
    __typename: "Guide",
    id: string,
    title: string,
    slug: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};
