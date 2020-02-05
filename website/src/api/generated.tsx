// tslint:disable
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519) which securely represents claims between two parties. */
  JwtToken: any,
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any,
  /** The day, does not include a time. */
  Date: any,
};

/** All input for the `authenticate` mutation. */
export type AuthenticateInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  password: Scalars['String'],
};

/** The output of our `authenticate` mutation. */
export type AuthenticatePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  jwtToken?: Maybe<Scalars['JwtToken']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
};

/** All input for the create `Guide` mutation. */
export type CreateGuideInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Guide` to be created by this mutation. */
  guide: GuideInput,
};

/** The output of our create `Guide` mutation. */
export type CreateGuidePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Guide` that was created by this mutation. */
  guide?: Maybe<Guide>,
  /** An edge for our `Guide`. May be used by Relay 1. */
  guideEdge?: Maybe<GuidesEdge>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `User` that is related to this `Guide`. */
  userByOwner?: Maybe<User>,
};


/** The output of our create `Guide` mutation. */
export type CreateGuidePayloadGuideEdgeArgs = {
  orderBy?: Maybe<Array<GuidesOrderBy>>
};

/** All input for the create `Ride` mutation. */
export type CreateRideInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Ride` to be created by this mutation. */
  ride: RideInput,
};

/** The output of our create `Ride` mutation. */
export type CreateRidePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** Reads a single `Guide` that is related to this `Ride`. */
  guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** The `Ride` that was created by this mutation. */
  ride?: Maybe<Ride>,
  /** An edge for our `Ride`. May be used by Relay 1. */
  rideEdge?: Maybe<RidesEdge>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  spotByToSpot?: Maybe<Spot>,
};


/** The output of our create `Ride` mutation. */
export type CreateRidePayloadRideEdgeArgs = {
  orderBy?: Maybe<Array<RidesOrderBy>>
};

/** All input for the create `Spot` mutation. */
export type CreateSpotInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Spot` to be created by this mutation. */
  spot: SpotInput,
};

/** The output of our create `Spot` mutation. */
export type CreateSpotPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** Reads a single `Guide` that is related to this `Spot`. */
  guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** The `Spot` that was created by this mutation. */
  spot?: Maybe<Spot>,
  /** An edge for our `Spot`. May be used by Relay 1. */
  spotEdge?: Maybe<SpotsEdge>,
};


/** The output of our create `Spot` mutation. */
export type CreateSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<Array<SpotsOrderBy>>
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `User` to be created by this mutation. */
  user: UserInput,
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>,
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>,
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};



/** All input for the `deleteGuideByNodeId` mutation. */
export type DeleteGuideByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Guide` to be deleted. */
  nodeId: Scalars['ID'],
};

/** All input for the `deleteGuide` mutation. */
export type DeleteGuideInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

/** The output of our delete `Guide` mutation. */
export type DeleteGuidePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  deletedGuideNodeId?: Maybe<Scalars['ID']>,
  /** The `Guide` that was deleted by this mutation. */
  guide?: Maybe<Guide>,
  /** An edge for our `Guide`. May be used by Relay 1. */
  guideEdge?: Maybe<GuidesEdge>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `User` that is related to this `Guide`. */
  userByOwner?: Maybe<User>,
};


/** The output of our delete `Guide` mutation. */
export type DeleteGuidePayloadGuideEdgeArgs = {
  orderBy?: Maybe<Array<GuidesOrderBy>>
};

/** All input for the `deleteRideByNodeId` mutation. */
export type DeleteRideByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Ride` to be deleted. */
  nodeId: Scalars['ID'],
};

/** All input for the `deleteRide` mutation. */
export type DeleteRideInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

/** The output of our delete `Ride` mutation. */
export type DeleteRidePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  deletedRideNodeId?: Maybe<Scalars['ID']>,
  /** Reads a single `Guide` that is related to this `Ride`. */
  guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** The `Ride` that was deleted by this mutation. */
  ride?: Maybe<Ride>,
  /** An edge for our `Ride`. May be used by Relay 1. */
  rideEdge?: Maybe<RidesEdge>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  spotByToSpot?: Maybe<Spot>,
};


/** The output of our delete `Ride` mutation. */
export type DeleteRidePayloadRideEdgeArgs = {
  orderBy?: Maybe<Array<RidesOrderBy>>
};

/** All input for the `deleteSpotByNodeId` mutation. */
export type DeleteSpotByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Spot` to be deleted. */
  nodeId: Scalars['ID'],
};

/** All input for the `deleteSpot` mutation. */
export type DeleteSpotInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

/** The output of our delete `Spot` mutation. */
export type DeleteSpotPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  deletedSpotNodeId?: Maybe<Scalars['ID']>,
  /** Reads a single `Guide` that is related to this `Spot`. */
  guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** The `Spot` that was deleted by this mutation. */
  spot?: Maybe<Spot>,
  /** An edge for our `Spot`. May be used by Relay 1. */
  spotEdge?: Maybe<SpotsEdge>,
};


/** The output of our delete `Spot` mutation. */
export type DeleteSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<Array<SpotsOrderBy>>
};

/** All input for the `deleteUserByNodeId` mutation. */
export type DeleteUserByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID'],
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  username: Scalars['String'],
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  deletedUserNodeId?: Maybe<Scalars['ID']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>,
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>,
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};

export type Guide = Node & {
  id: Scalars['String'],
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  owner: Scalars['String'],
  /** Reads and enables pagination through a set of `Ride`. */
  ridesByGuide: RidesConnection,
  slug: Scalars['String'],
  /** Reads and enables pagination through a set of `Spot`. */
  spotsByGuide: SpotsConnection,
  startDate?: Maybe<Scalars['Date']>,
  title: Scalars['String'],
  /** Reads a single `User` that is related to this `Guide`. */
  userByOwner?: Maybe<User>,
};


export type GuideRidesByGuideArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<RideCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Array<RidesOrderBy>>
};


export type GuideSpotsByGuideArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<SpotCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Array<SpotsOrderBy>>
};

/** A condition to be used against `Guide` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GuideCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `owner` field. */
  owner?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `startDate` field. */
  startDate?: Maybe<Scalars['Date']>,
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `Guide` */
export type GuideInput = {
  id: Scalars['String'],
  owner: Scalars['String'],
  slug: Scalars['String'],
  startDate?: Maybe<Scalars['Date']>,
  title: Scalars['String'],
};

/** Represents an update to a `Guide`. Fields that are set will be updated. */
export type GuidePatch = {
  id?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['Date']>,
  title?: Maybe<Scalars['String']>,
};

/** A connection to a list of `Guide` values. */
export type GuidesConnection = {
  /** A list of edges which contains the `Guide` and cursor to aid in pagination. */
  edges: Array<GuidesEdge>,
  /** A list of `Guide` objects. */
  nodes: Array<Maybe<Guide>>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Guide` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Guide` edge in the connection. */
export type GuidesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Guide` at the end of the edge. */
  node?: Maybe<Guide>,
};

/** Methods to use when ordering `Guide`. */
export enum GuidesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OwnerAsc = 'OWNER_ASC',
  OwnerDesc = 'OWNER_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  StartDateAsc = 'START_DATE_ASC',
  StartDateDesc = 'START_DATE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}


/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  /** Creates a JWT token that will securely identify a person and give them certain permissions. This token expires in 2 days. */
  authenticate?: Maybe<AuthenticatePayload>,
  /** Creates a single `Guide`. */
  createGuide?: Maybe<CreateGuidePayload>,
  /** Creates a single `Ride`. */
  createRide?: Maybe<CreateRidePayload>,
  /** Creates a single `Spot`. */
  createSpot?: Maybe<CreateSpotPayload>,
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>,
  /** Deletes a single `Guide` using a unique key. */
  deleteGuide?: Maybe<DeleteGuidePayload>,
  /** Deletes a single `Guide` using its globally unique id. */
  deleteGuideByNodeId?: Maybe<DeleteGuidePayload>,
  /** Deletes a single `Ride` using a unique key. */
  deleteRide?: Maybe<DeleteRidePayload>,
  /** Deletes a single `Ride` using its globally unique id. */
  deleteRideByNodeId?: Maybe<DeleteRidePayload>,
  /** Deletes a single `Spot` using a unique key. */
  deleteSpot?: Maybe<DeleteSpotPayload>,
  /** Deletes a single `Spot` using its globally unique id. */
  deleteSpotByNodeId?: Maybe<DeleteSpotPayload>,
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<DeleteUserPayload>,
  /** Deletes a single `User` using its globally unique id. */
  deleteUserByNodeId?: Maybe<DeleteUserPayload>,
  /** Registers a single user */
  register?: Maybe<RegisterPayload>,
  /** Updates a single `Guide` using a unique key and a patch. */
  updateGuide?: Maybe<UpdateGuidePayload>,
  /** Updates a single `Guide` using its globally unique id and a patch. */
  updateGuideByNodeId?: Maybe<UpdateGuidePayload>,
  /** Updates a single `Ride` using a unique key and a patch. */
  updateRide?: Maybe<UpdateRidePayload>,
  /** Updates a single `Ride` using its globally unique id and a patch. */
  updateRideByNodeId?: Maybe<UpdateRidePayload>,
  /** Updates a single `Spot` using a unique key and a patch. */
  updateSpot?: Maybe<UpdateSpotPayload>,
  /** Updates a single `Spot` using its globally unique id and a patch. */
  updateSpotByNodeId?: Maybe<UpdateSpotPayload>,
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>,
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUserByNodeId?: Maybe<UpdateUserPayload>,
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateArgs = {
  input: AuthenticateInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGuideArgs = {
  input: CreateGuideInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRideArgs = {
  input: CreateRideInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSpotArgs = {
  input: CreateSpotInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGuideArgs = {
  input: DeleteGuideInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGuideByNodeIdArgs = {
  input: DeleteGuideByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRideArgs = {
  input: DeleteRideInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRideByNodeIdArgs = {
  input: DeleteRideByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSpotArgs = {
  input: DeleteSpotInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSpotByNodeIdArgs = {
  input: DeleteSpotByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByNodeIdArgs = {
  input: DeleteUserByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterArgs = {
  input: RegisterInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGuideArgs = {
  input: UpdateGuideInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGuideByNodeIdArgs = {
  input: UpdateGuideByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRideArgs = {
  input: UpdateRideInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRideByNodeIdArgs = {
  input: UpdateRideByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSpotArgs = {
  input: UpdateSpotInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSpotByNodeIdArgs = {
  input: UpdateSpotByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByNodeIdArgs = {
  input: UpdateUserByNodeIdInput
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>,
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>,
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  currentUser?: Maybe<Scalars['JwtToken']>,
  guide?: Maybe<Guide>,
  /** Reads a single `Guide` using its globally unique `ID`. */
  guideByNodeId?: Maybe<Guide>,
  /** Reads and enables pagination through a set of `Guide`. */
  guides?: Maybe<GuidesConnection>,
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>,
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'],
  /** 
 * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
 */
  query: Query,
  ride?: Maybe<Ride>,
  /** Reads a single `Ride` using its globally unique `ID`. */
  rideByNodeId?: Maybe<Ride>,
  /** Reads and enables pagination through a set of `Ride`. */
  rides?: Maybe<RidesConnection>,
  spot?: Maybe<Spot>,
  /** Reads a single `Spot` using its globally unique `ID`. */
  spotByNodeId?: Maybe<Spot>,
  /** Reads and enables pagination through a set of `Spot`. */
  spots?: Maybe<SpotsConnection>,
  user?: Maybe<User>,
  /** Reads a single `User` using its globally unique `ID`. */
  userByNodeId?: Maybe<User>,
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>,
};


/** The root query type which gives access points into the data universe. */
export type QueryGuideArgs = {
  id: Scalars['String']
};


/** The root query type which gives access points into the data universe. */
export type QueryGuideByNodeIdArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryGuidesArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<GuideCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Array<GuidesOrderBy>>
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryRideArgs = {
  id: Scalars['String']
};


/** The root query type which gives access points into the data universe. */
export type QueryRideByNodeIdArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryRidesArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<RideCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Array<RidesOrderBy>>
};


/** The root query type which gives access points into the data universe. */
export type QuerySpotArgs = {
  id: Scalars['String']
};


/** The root query type which gives access points into the data universe. */
export type QuerySpotByNodeIdArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QuerySpotsArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<SpotCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Array<SpotsOrderBy>>
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  username: Scalars['String']
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByNodeIdArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<UserCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Array<UsersOrderBy>>
};

/** All input for the `register` mutation. */
export type RegisterInput = {
  _email: Scalars['String'],
  _password: Scalars['String'],
  _username: Scalars['String'],
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
};

/** The output of our `register` mutation. */
export type RegisterPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  user?: Maybe<User>,
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>,
};


/** The output of our `register` mutation. */
export type RegisterPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};

export type Ride = Node & {
  fromSpot: Scalars['String'],
  guide: Scalars['String'],
  /** Reads a single `Guide` that is related to this `Ride`. */
  guideByGuide?: Maybe<Guide>,
  id: Scalars['String'],
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  /** Reads a single `Spot` that is related to this `Ride`. */
  spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  spotByToSpot?: Maybe<Spot>,
  toSpot: Scalars['String'],
};

/** A condition to be used against `Ride` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RideCondition = {
  /** Checks for equality with the object’s `fromSpot` field. */
  fromSpot?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `guide` field. */
  guide?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `toSpot` field. */
  toSpot?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `Ride` */
export type RideInput = {
  fromSpot: Scalars['String'],
  guide: Scalars['String'],
  id: Scalars['String'],
  toSpot: Scalars['String'],
};

/** Represents an update to a `Ride`. Fields that are set will be updated. */
export type RidePatch = {
  fromSpot?: Maybe<Scalars['String']>,
  guide?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  toSpot?: Maybe<Scalars['String']>,
};

/** A connection to a list of `Ride` values. */
export type RidesConnection = {
  /** A list of edges which contains the `Ride` and cursor to aid in pagination. */
  edges: Array<RidesEdge>,
  /** A list of `Ride` objects. */
  nodes: Array<Maybe<Ride>>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Ride` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Ride` edge in the connection. */
export type RidesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Ride` at the end of the edge. */
  node?: Maybe<Ride>,
};

/** Methods to use when ordering `Ride`. */
export enum RidesOrderBy {
  FromSpotAsc = 'FROM_SPOT_ASC',
  FromSpotDesc = 'FROM_SPOT_DESC',
  GuideAsc = 'GUIDE_ASC',
  GuideDesc = 'GUIDE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ToSpotAsc = 'TO_SPOT_ASC',
  ToSpotDesc = 'TO_SPOT_DESC'
}

export type Spot = Node & {
  guide: Scalars['String'],
  /** Reads a single `Guide` that is related to this `Spot`. */
  guideByGuide?: Maybe<Guide>,
  id: Scalars['String'],
  label?: Maybe<Scalars['String']>,
  locked?: Maybe<Scalars['Boolean']>,
  nights?: Maybe<Scalars['Int']>,
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  /** Reads and enables pagination through a set of `Ride`. */
  ridesByFromSpot: RidesConnection,
  /** Reads and enables pagination through a set of `Ride`. */
  ridesByToSpot: RidesConnection,
};


export type SpotRidesByFromSpotArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<RideCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Array<RidesOrderBy>>
};


export type SpotRidesByToSpotArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<RideCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Array<RidesOrderBy>>
};

/** A condition to be used against `Spot` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SpotCondition = {
  /** Checks for equality with the object’s `guide` field. */
  guide?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `label` field. */
  label?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `locked` field. */
  locked?: Maybe<Scalars['Boolean']>,
  /** Checks for equality with the object’s `nights` field. */
  nights?: Maybe<Scalars['Int']>,
};

/** An input for mutations affecting `Spot` */
export type SpotInput = {
  guide: Scalars['String'],
  id: Scalars['String'],
  label?: Maybe<Scalars['String']>,
  locked?: Maybe<Scalars['Boolean']>,
  nights?: Maybe<Scalars['Int']>,
};

/** Represents an update to a `Spot`. Fields that are set will be updated. */
export type SpotPatch = {
  guide?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  locked?: Maybe<Scalars['Boolean']>,
  nights?: Maybe<Scalars['Int']>,
};

/** A connection to a list of `Spot` values. */
export type SpotsConnection = {
  /** A list of edges which contains the `Spot` and cursor to aid in pagination. */
  edges: Array<SpotsEdge>,
  /** A list of `Spot` objects. */
  nodes: Array<Maybe<Spot>>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Spot` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Spot` edge in the connection. */
export type SpotsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Spot` at the end of the edge. */
  node?: Maybe<Spot>,
};

/** Methods to use when ordering `Spot`. */
export enum SpotsOrderBy {
  GuideAsc = 'GUIDE_ASC',
  GuideDesc = 'GUIDE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LabelAsc = 'LABEL_ASC',
  LabelDesc = 'LABEL_DESC',
  LockedAsc = 'LOCKED_ASC',
  LockedDesc = 'LOCKED_DESC',
  Natural = 'NATURAL',
  NightsAsc = 'NIGHTS_ASC',
  NightsDesc = 'NIGHTS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updateGuideByNodeId` mutation. */
export type UpdateGuideByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Guide` to be updated. */
  nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `Guide` being updated. */
  patch: GuidePatch,
};

/** All input for the `updateGuide` mutation. */
export type UpdateGuideInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['String'],
  /** An object where the defined keys will be set on the `Guide` being updated. */
  patch: GuidePatch,
};

/** The output of our update `Guide` mutation. */
export type UpdateGuidePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Guide` that was updated by this mutation. */
  guide?: Maybe<Guide>,
  /** An edge for our `Guide`. May be used by Relay 1. */
  guideEdge?: Maybe<GuidesEdge>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `User` that is related to this `Guide`. */
  userByOwner?: Maybe<User>,
};


/** The output of our update `Guide` mutation. */
export type UpdateGuidePayloadGuideEdgeArgs = {
  orderBy?: Maybe<Array<GuidesOrderBy>>
};

/** All input for the `updateRideByNodeId` mutation. */
export type UpdateRideByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Ride` to be updated. */
  nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `Ride` being updated. */
  patch: RidePatch,
};

/** All input for the `updateRide` mutation. */
export type UpdateRideInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['String'],
  /** An object where the defined keys will be set on the `Ride` being updated. */
  patch: RidePatch,
};

/** The output of our update `Ride` mutation. */
export type UpdateRidePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** Reads a single `Guide` that is related to this `Ride`. */
  guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** The `Ride` that was updated by this mutation. */
  ride?: Maybe<Ride>,
  /** An edge for our `Ride`. May be used by Relay 1. */
  rideEdge?: Maybe<RidesEdge>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  spotByToSpot?: Maybe<Spot>,
};


/** The output of our update `Ride` mutation. */
export type UpdateRidePayloadRideEdgeArgs = {
  orderBy?: Maybe<Array<RidesOrderBy>>
};

/** All input for the `updateSpotByNodeId` mutation. */
export type UpdateSpotByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Spot` to be updated. */
  nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `Spot` being updated. */
  patch: SpotPatch,
};

/** All input for the `updateSpot` mutation. */
export type UpdateSpotInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['String'],
  /** An object where the defined keys will be set on the `Spot` being updated. */
  patch: SpotPatch,
};

/** The output of our update `Spot` mutation. */
export type UpdateSpotPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** Reads a single `Guide` that is related to this `Spot`. */
  guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** The `Spot` that was updated by this mutation. */
  spot?: Maybe<Spot>,
  /** An edge for our `Spot`. May be used by Relay 1. */
  spotEdge?: Maybe<SpotsEdge>,
};


/** The output of our update `Spot` mutation. */
export type UpdateSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<Array<SpotsOrderBy>>
};

/** All input for the `updateUserByNodeId` mutation. */
export type UpdateUserByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch,
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch,
  username: Scalars['String'],
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>,
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>,
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};

export type User = Node & {
  email: Scalars['String'],
  /** Reads and enables pagination through a set of `Guide`. */
  guidesByOwner: GuidesConnection,
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  passwordHash: Scalars['String'],
  username: Scalars['String'],
};


export type UserGuidesByOwnerArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<GuideCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Array<GuidesOrderBy>>
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `passwordHash` field. */
  passwordHash?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `User` */
export type UserInput = {
  email: Scalars['String'],
  passwordHash: Scalars['String'],
  username: Scalars['String'],
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  email?: Maybe<Scalars['String']>,
  passwordHash?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>,
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `User` at the end of the edge. */
  node?: Maybe<User>,
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  Natural = 'NATURAL',
  PasswordHashAsc = 'PASSWORD_HASH_ASC',
  PasswordHashDesc = 'PASSWORD_HASH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC'
}

export type SomeQueryQueryVariables = {};


export type SomeQueryQuery = { users: Maybe<(
    Pick<UsersConnection, 'totalCount'>
    & { nodes: Array<Maybe<Pick<User, 'email' | 'username'>>> }
  )> };

export type CreateGuideMutationVariables = {
  guide: GuideInput
};


export type CreateGuideMutation = { createGuide: Maybe<{ guide: Maybe<Pick<Guide, 'id'>> }> };

export type DeleteGuideMutationVariables = {
  guideId: Scalars['String']
};


export type DeleteGuideMutation = { deleteGuide: Maybe<{ guide: Maybe<Pick<Guide, 'id'>> }> };

export type AllGuideTitlesForUserQueryVariables = {
  owner: Scalars['String']
};


export type AllGuideTitlesForUserQuery = { guides: Maybe<{ nodes: Array<Maybe<Pick<Guide, 'id' | 'title' | 'slug' | 'owner'>>> }> };

export type GetGuideBySlugQueryVariables = {
  slug: Scalars['String'],
  owner: Scalars['String']
};


export type GetGuideBySlugQuery = { guides: Maybe<{ nodes: Array<Maybe<(
      Pick<Guide, 'id' | 'title' | 'slug' | 'owner' | 'startDate'>
      & { ridesByGuide: Pick<RidesConnection, 'totalCount'>, spotsByGuide: Pick<SpotsConnection, 'totalCount'> }
    )>> }> };

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = { authenticate: Maybe<Pick<AuthenticatePayload, 'jwtToken'>> };

export type SignUpMutationVariables = {
  username: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type SignUpMutation = { register: Maybe<{ user: Maybe<Pick<User, 'username' | 'email'>> }> };


export const SomeQueryDocument = gql`
    query SomeQuery {
  users {
    totalCount
    nodes {
      email
      username
    }
  }
}
    `;
export type SomeQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SomeQueryQuery, SomeQueryQueryVariables>, 'query'>;

    export const SomeQueryComponent = (props: SomeQueryComponentProps) => (
      <ApolloReactComponents.Query<SomeQueryQuery, SomeQueryQueryVariables> query={SomeQueryDocument} {...props} />
    );
    

/**
 * __useSomeQueryQuery__
 *
 * To run a query within a React component, call `useSomeQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSomeQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSomeQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useSomeQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SomeQueryQuery, SomeQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<SomeQueryQuery, SomeQueryQueryVariables>(SomeQueryDocument, baseOptions);
      }
export function useSomeQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SomeQueryQuery, SomeQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SomeQueryQuery, SomeQueryQueryVariables>(SomeQueryDocument, baseOptions);
        }
export type SomeQueryQueryHookResult = ReturnType<typeof useSomeQueryQuery>;
export type SomeQueryLazyQueryHookResult = ReturnType<typeof useSomeQueryLazyQuery>;
export type SomeQueryQueryResult = ApolloReactCommon.QueryResult<SomeQueryQuery, SomeQueryQueryVariables>;
export const CreateGuideDocument = gql`
    mutation CreateGuide($guide: GuideInput!) {
  createGuide(input: {guide: $guide}) {
    guide {
      id
    }
  }
}
    `;
export type CreateGuideMutationFn = ApolloReactCommon.MutationFunction<CreateGuideMutation, CreateGuideMutationVariables>;
export type CreateGuideComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateGuideMutation, CreateGuideMutationVariables>, 'mutation'>;

    export const CreateGuideComponent = (props: CreateGuideComponentProps) => (
      <ApolloReactComponents.Mutation<CreateGuideMutation, CreateGuideMutationVariables> mutation={CreateGuideDocument} {...props} />
    );
    

/**
 * __useCreateGuideMutation__
 *
 * To run a mutation, you first call `useCreateGuideMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGuideMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGuideMutation, { data, loading, error }] = useCreateGuideMutation({
 *   variables: {
 *      guide: // value for 'guide'
 *   },
 * });
 */
export function useCreateGuideMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateGuideMutation, CreateGuideMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateGuideMutation, CreateGuideMutationVariables>(CreateGuideDocument, baseOptions);
      }
export type CreateGuideMutationHookResult = ReturnType<typeof useCreateGuideMutation>;
export type CreateGuideMutationResult = ApolloReactCommon.MutationResult<CreateGuideMutation>;
export type CreateGuideMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateGuideMutation, CreateGuideMutationVariables>;
export const DeleteGuideDocument = gql`
    mutation DeleteGuide($guideId: String!) {
  deleteGuide(input: {id: $guideId}) {
    guide {
      id
    }
  }
}
    `;
export type DeleteGuideMutationFn = ApolloReactCommon.MutationFunction<DeleteGuideMutation, DeleteGuideMutationVariables>;
export type DeleteGuideComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteGuideMutation, DeleteGuideMutationVariables>, 'mutation'>;

    export const DeleteGuideComponent = (props: DeleteGuideComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteGuideMutation, DeleteGuideMutationVariables> mutation={DeleteGuideDocument} {...props} />
    );
    

/**
 * __useDeleteGuideMutation__
 *
 * To run a mutation, you first call `useDeleteGuideMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGuideMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGuideMutation, { data, loading, error }] = useDeleteGuideMutation({
 *   variables: {
 *      guideId: // value for 'guideId'
 *   },
 * });
 */
export function useDeleteGuideMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteGuideMutation, DeleteGuideMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteGuideMutation, DeleteGuideMutationVariables>(DeleteGuideDocument, baseOptions);
      }
export type DeleteGuideMutationHookResult = ReturnType<typeof useDeleteGuideMutation>;
export type DeleteGuideMutationResult = ApolloReactCommon.MutationResult<DeleteGuideMutation>;
export type DeleteGuideMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteGuideMutation, DeleteGuideMutationVariables>;
export const AllGuideTitlesForUserDocument = gql`
    query AllGuideTitlesForUser($owner: String!) {
  guides(condition: {owner: $owner}) {
    nodes {
      id
      title
      slug
      owner
    }
  }
}
    `;
export type AllGuideTitlesForUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>, 'query'> & ({ variables: AllGuideTitlesForUserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AllGuideTitlesForUserComponent = (props: AllGuideTitlesForUserComponentProps) => (
      <ApolloReactComponents.Query<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables> query={AllGuideTitlesForUserDocument} {...props} />
    );
    

/**
 * __useAllGuideTitlesForUserQuery__
 *
 * To run a query within a React component, call `useAllGuideTitlesForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGuideTitlesForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGuideTitlesForUserQuery({
 *   variables: {
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useAllGuideTitlesForUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>) {
        return ApolloReactHooks.useQuery<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>(AllGuideTitlesForUserDocument, baseOptions);
      }
export function useAllGuideTitlesForUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>(AllGuideTitlesForUserDocument, baseOptions);
        }
export type AllGuideTitlesForUserQueryHookResult = ReturnType<typeof useAllGuideTitlesForUserQuery>;
export type AllGuideTitlesForUserLazyQueryHookResult = ReturnType<typeof useAllGuideTitlesForUserLazyQuery>;
export type AllGuideTitlesForUserQueryResult = ApolloReactCommon.QueryResult<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>;
export const GetGuideBySlugDocument = gql`
    query GetGuideBySlug($slug: String!, $owner: String!) {
  guides(condition: {owner: $owner, slug: $slug}) {
    nodes {
      id
      title
      slug
      owner
      startDate
      ridesByGuide {
        totalCount
      }
      spotsByGuide {
        totalCount
      }
    }
  }
}
    `;
export type GetGuideBySlugComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>, 'query'> & ({ variables: GetGuideBySlugQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetGuideBySlugComponent = (props: GetGuideBySlugComponentProps) => (
      <ApolloReactComponents.Query<GetGuideBySlugQuery, GetGuideBySlugQueryVariables> query={GetGuideBySlugDocument} {...props} />
    );
    

/**
 * __useGetGuideBySlugQuery__
 *
 * To run a query within a React component, call `useGetGuideBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGuideBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGuideBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useGetGuideBySlugQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>) {
        return ApolloReactHooks.useQuery<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>(GetGuideBySlugDocument, baseOptions);
      }
export function useGetGuideBySlugLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>(GetGuideBySlugDocument, baseOptions);
        }
export type GetGuideBySlugQueryHookResult = ReturnType<typeof useGetGuideBySlugQuery>;
export type GetGuideBySlugLazyQueryHookResult = ReturnType<typeof useGetGuideBySlugLazyQuery>;
export type GetGuideBySlugQueryResult = ApolloReactCommon.QueryResult<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  authenticate(input: {email: $email, password: $password}) {
    jwtToken
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($username: String!, $email: String!, $password: String!) {
  register(input: {_email: $email, _username: $username, _password: $password}) {
    user {
      username
      email
    }
  }
}
    `;
export type SignUpMutationFn = ApolloReactCommon.MutationFunction<SignUpMutation, SignUpMutationVariables>;
export type SignUpComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignUpMutation, SignUpMutationVariables>, 'mutation'>;

    export const SignUpComponent = (props: SignUpComponentProps) => (
      <ApolloReactComponents.Mutation<SignUpMutation, SignUpMutationVariables> mutation={SignUpDocument} {...props} />
    );
    

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = ApolloReactCommon.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;