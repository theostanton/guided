// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateGuide = /* GraphQL */ `
  subscription OnCreateGuide {
    onCreateGuide {
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
export const onUpdateGuide = /* GraphQL */ `
  subscription OnUpdateGuide {
    onUpdateGuide {
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
export const onDeleteGuide = /* GraphQL */ `
  subscription OnDeleteGuide {
    onDeleteGuide {
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
export const onCreateSpot = /* GraphQL */ `
  subscription OnCreateSpot {
    onCreateSpot {
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
export const onUpdateSpot = /* GraphQL */ `
  subscription OnUpdateSpot {
    onUpdateSpot {
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
export const onDeleteSpot = /* GraphQL */ `
  subscription OnDeleteSpot {
    onDeleteSpot {
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
export const onCreateRide = /* GraphQL */ `
  subscription OnCreateRide {
    onCreateRide {
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
export const onUpdateRide = /* GraphQL */ `
  subscription OnUpdateRide {
    onUpdateRide {
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
export const onDeleteRide = /* GraphQL */ `
  subscription OnDeleteRide {
    onDeleteRide {
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
