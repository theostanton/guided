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
      spots {
        nextToken
        startedAt
      }
      rides {
        nextToken
        startedAt
      }
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
      spots {
        nextToken
        startedAt
      }
      rides {
        nextToken
        startedAt
      }
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
      spots {
        nextToken
        startedAt
      }
      rides {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSpot = /* GraphQL */ `
  mutation CreateSpot(
    $input: CreateSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    createSpot(input: $input, condition: $condition) {
      id
      label
      guideID
      nights
      locked
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSpot = /* GraphQL */ `
  mutation UpdateSpot(
    $input: UpdateSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    updateSpot(input: $input, condition: $condition) {
      id
      label
      guideID
      nights
      locked
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSpot = /* GraphQL */ `
  mutation DeleteSpot(
    $input: DeleteSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    deleteSpot(input: $input, condition: $condition) {
      id
      label
      guideID
      nights
      locked
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createRide = /* GraphQL */ `
  mutation CreateRide(
    $input: CreateRideInput!
    $condition: ModelRideConditionInput
  ) {
    createRide(input: $input, condition: $condition) {
      id
      guideID
      fromSpotID
      toSpotID
      locked
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateRide = /* GraphQL */ `
  mutation UpdateRide(
    $input: UpdateRideInput!
    $condition: ModelRideConditionInput
  ) {
    updateRide(input: $input, condition: $condition) {
      id
      guideID
      fromSpotID
      toSpotID
      locked
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteRide = /* GraphQL */ `
  mutation DeleteRide(
    $input: DeleteRideInput!
    $condition: ModelRideConditionInput
  ) {
    deleteRide(input: $input, condition: $condition) {
      id
      guideID
      fromSpotID
      toSpotID
      locked
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
