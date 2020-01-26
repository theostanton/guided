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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
