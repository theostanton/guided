// tslint:disable
// this is an auto generated file. This will be overwritten

export const createGuide = /* GraphQL */ `
  mutation CreateGuide(
    $input: CreateGuideInput!
    $condition: ModelGuideConditionInput
  ) {
    createGuide(input: $input, condition: $condition) {
      id
      title
      slug
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateGuide = /* GraphQL */ `
  mutation UpdateGuide(
    $input: UpdateGuideInput!
    $condition: ModelGuideConditionInput
  ) {
    updateGuide(input: $input, condition: $condition) {
      id
      title
      slug
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteGuide = /* GraphQL */ `
  mutation DeleteGuide(
    $input: DeleteGuideInput!
    $condition: ModelGuideConditionInput
  ) {
    deleteGuide(input: $input, condition: $condition) {
      id
      title
      slug
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
