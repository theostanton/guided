// tslint:disable
// this is an auto generated file. This will be overwritten

export const syncGuides = /* GraphQL */ `
  query SyncGuides(
    $filter: ModelGuideFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGuides(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        slug
        owner
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGuide = /* GraphQL */ `
  query GetGuide($id: ID!) {
    getGuide(id: $id) {
      id
      title
      slug
      owner
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
export const listGuides = /* GraphQL */ `
  query ListGuides(
    $filter: ModelGuideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        slug
        owner
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSpots = /* GraphQL */ `
  query SyncSpots(
    $filter: ModelSpotFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSpots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        label
        guideID
        nights
        locked
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSpot = /* GraphQL */ `
  query GetSpot($id: ID!) {
    getSpot(id: $id) {
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
export const listSpots = /* GraphQL */ `
  query ListSpots(
    $filter: ModelSpotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        guideID
        nights
        locked
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRides = /* GraphQL */ `
  query SyncRides(
    $filter: ModelRideFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRides(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        guideID
        fromSpotID
        toSpotID
        locked
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRide = /* GraphQL */ `
  query GetRide($id: ID!) {
    getRide(id: $id) {
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
export const listRides = /* GraphQL */ `
  query ListRides(
    $filter: ModelRideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        guideID
        fromSpotID
        toSpotID
        locked
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
