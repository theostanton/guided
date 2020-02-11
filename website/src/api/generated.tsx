import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519)
   * which securely represents claims between two parties.
 */
  JwtToken: any,
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: any },
  /** The day, does not include a time. */
  Date: any,
};

/** All input for the `authenticate` mutation. */
export type AuthenticateInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly email: Scalars['String'],
  readonly password: Scalars['String'],
};

/** The output of our `authenticate` mutation. */
export type AuthenticatePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly jwtToken?: Maybe<Scalars['JwtToken']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
};

/** All input for the create `Guide` mutation. */
export type CreateGuideInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The `Guide` to be created by this mutation. */
  readonly guide: GuideInput,
};

/** The output of our create `Guide` mutation. */
export type CreateGuidePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The `Guide` that was created by this mutation. */
  readonly guide?: Maybe<Guide>,
  /** An edge for our `Guide`. May be used by Relay 1. */
  readonly guideEdge?: Maybe<GuidesEdge>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `User` that is related to this `Guide`. */
  readonly userByOwner?: Maybe<User>,
};


/** The output of our create `Guide` mutation. */
export type CreateGuidePayloadGuideEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>
};

/** All input for the create `Ride` mutation. */
export type CreateRideInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The `Ride` to be created by this mutation. */
  readonly ride: RideInput,
};

/** The output of our create `Ride` mutation. */
export type CreateRidePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** The `Ride` that was created by this mutation. */
  readonly ride?: Maybe<Ride>,
  /** An edge for our `Ride`. May be used by Relay 1. */
  readonly rideEdge?: Maybe<RidesEdge>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByToSpot?: Maybe<Spot>,
  /** Reads a single `User` that is related to this `Ride`. */
  readonly userByOwner?: Maybe<User>,
};


/** The output of our create `Ride` mutation. */
export type CreateRidePayloadRideEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>
};

/** All input for the create `Spot` mutation. */
export type CreateSpotInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The `Spot` to be created by this mutation. */
  readonly spot: SpotInput,
};

/** The output of our create `Spot` mutation. */
export type CreateSpotPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** Reads a single `Guide` that is related to this `Spot`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** The `Spot` that was created by this mutation. */
  readonly spot?: Maybe<Spot>,
  /** An edge for our `Spot`. May be used by Relay 1. */
  readonly spotEdge?: Maybe<SpotsEdge>,
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>,
};


/** The output of our create `Spot` mutation. */
export type CreateSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The `User` to be created by this mutation. */
  readonly user: UserInput,
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** The `User` that was created by this mutation. */
  readonly user?: Maybe<User>,
  /** An edge for our `User`. May be used by Relay 1. */
  readonly userEdge?: Maybe<UsersEdge>,
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>
};



/** All input for the `deleteGuideByNodeId` mutation. */
export type DeleteGuideByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Guide` to be deleted. */
  readonly nodeId: Scalars['ID'],
};

/** All input for the `deleteGuide` mutation. */
export type DeleteGuideInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly id: Scalars['String'],
};

/** The output of our delete `Guide` mutation. */
export type DeleteGuidePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly deletedGuideNodeId?: Maybe<Scalars['ID']>,
  /** The `Guide` that was deleted by this mutation. */
  readonly guide?: Maybe<Guide>,
  /** An edge for our `Guide`. May be used by Relay 1. */
  readonly guideEdge?: Maybe<GuidesEdge>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `User` that is related to this `Guide`. */
  readonly userByOwner?: Maybe<User>,
};


/** The output of our delete `Guide` mutation. */
export type DeleteGuidePayloadGuideEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>
};

/** All input for the `deleteRideByNodeId` mutation. */
export type DeleteRideByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Ride` to be deleted. */
  readonly nodeId: Scalars['ID'],
};

/** All input for the `deleteRide` mutation. */
export type DeleteRideInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly id: Scalars['String'],
};

/** The output of our delete `Ride` mutation. */
export type DeleteRidePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly deletedRideNodeId?: Maybe<Scalars['ID']>,
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** The `Ride` that was deleted by this mutation. */
  readonly ride?: Maybe<Ride>,
  /** An edge for our `Ride`. May be used by Relay 1. */
  readonly rideEdge?: Maybe<RidesEdge>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByToSpot?: Maybe<Spot>,
  /** Reads a single `User` that is related to this `Ride`. */
  readonly userByOwner?: Maybe<User>,
};


/** The output of our delete `Ride` mutation. */
export type DeleteRidePayloadRideEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>
};

/** All input for the `deleteSpotByNodeId` mutation. */
export type DeleteSpotByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Spot` to be deleted. */
  readonly nodeId: Scalars['ID'],
};

/** All input for the `deleteSpot` mutation. */
export type DeleteSpotInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly id: Scalars['String'],
};

/** The output of our delete `Spot` mutation. */
export type DeleteSpotPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly deletedSpotNodeId?: Maybe<Scalars['ID']>,
  /** Reads a single `Guide` that is related to this `Spot`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** The `Spot` that was deleted by this mutation. */
  readonly spot?: Maybe<Spot>,
  /** An edge for our `Spot`. May be used by Relay 1. */
  readonly spotEdge?: Maybe<SpotsEdge>,
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>,
};


/** The output of our delete `Spot` mutation. */
export type DeleteSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>
};

/** All input for the `deleteUserByNodeId` mutation. */
export type DeleteUserByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  readonly nodeId: Scalars['ID'],
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly username: Scalars['String'],
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly deletedUserNodeId?: Maybe<Scalars['ID']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** The `User` that was deleted by this mutation. */
  readonly user?: Maybe<User>,
  /** An edge for our `User`. May be used by Relay 1. */
  readonly userEdge?: Maybe<UsersEdge>,
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>
};

export type Guide = Node & {
  readonly id: Scalars['String'],
  readonly maxHoursPerRide: Scalars['Int'],
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'],
  readonly owner: Scalars['String'],
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByGuide: RidesConnection,
  readonly slug: Scalars['String'],
  /** Reads and enables pagination through a set of `Spot`. */
  readonly spotsByGuide: SpotsConnection,
  readonly startDate?: Maybe<Scalars['Date']>,
  readonly title: Scalars['String'],
  /** Reads a single `User` that is related to this `Guide`. */
  readonly userByOwner?: Maybe<User>,
};


export type GuideRidesByGuideArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<RideCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>
};


export type GuideSpotsByGuideArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<SpotCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>
};

/** A condition to be used against `Guide` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GuideCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `maxHoursPerRide` field. */
  readonly maxHoursPerRide?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `owner` field. */
  readonly owner?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `slug` field. */
  readonly slug?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `startDate` field. */
  readonly startDate?: Maybe<Scalars['Date']>,
  /** Checks for equality with the object’s `title` field. */
  readonly title?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `Guide` */
export type GuideInput = {
  readonly id: Scalars['String'],
  readonly maxHoursPerRide?: Maybe<Scalars['Int']>,
  readonly owner: Scalars['String'],
  readonly slug: Scalars['String'],
  readonly startDate?: Maybe<Scalars['Date']>,
  readonly title: Scalars['String'],
};

/** Represents an update to a `Guide`. Fields that are set will be updated. */
export type GuidePatch = {
  readonly id?: Maybe<Scalars['String']>,
  readonly maxHoursPerRide?: Maybe<Scalars['Int']>,
  readonly owner?: Maybe<Scalars['String']>,
  readonly slug?: Maybe<Scalars['String']>,
  readonly startDate?: Maybe<Scalars['Date']>,
  readonly title?: Maybe<Scalars['String']>,
};

/** A connection to a list of `Guide` values. */
export type GuidesConnection = {
  /** A list of edges which contains the `Guide` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<GuidesEdge>,
  /** A list of `Guide` objects. */
  readonly nodes: ReadonlyArray<Maybe<Guide>>,
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo,
  /** The count of *all* `Guide` you could get from the connection. */
  readonly totalCount: Scalars['Int'],
};

/** A `Guide` edge in the connection. */
export type GuidesEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>,
  /** The `Guide` at the end of the edge. */
  readonly node?: Maybe<Guide>,
};

/** Methods to use when ordering `Guide`. */
export enum GuidesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MaxHoursPerRideAsc = 'MAX_HOURS_PER_RIDE_ASC',
  MaxHoursPerRideDesc = 'MAX_HOURS_PER_RIDE_DESC',
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
  readonly addSpotFromLatLng: Spot,
  /** Creates a JWT token that will securely identify a person and give them certain permissions. This token expires in 2 days. */
  readonly authenticate?: Maybe<AuthenticatePayload>,
  readonly computeRides: Scalars['String'],
  /** Creates a single `Guide`. */
  readonly createGuide?: Maybe<CreateGuidePayload>,
  /** Creates a single `Ride`. */
  readonly createRide?: Maybe<CreateRidePayload>,
  /** Creates a single `Spot`. */
  readonly createSpot?: Maybe<CreateSpotPayload>,
  /** Creates a single `User`. */
  readonly createUser?: Maybe<CreateUserPayload>,
  /** Deletes a single `Guide` using a unique key. */
  readonly deleteGuide?: Maybe<DeleteGuidePayload>,
  /** Deletes a single `Guide` using its globally unique id. */
  readonly deleteGuideByNodeId?: Maybe<DeleteGuidePayload>,
  /** Deletes a single `Ride` using a unique key. */
  readonly deleteRide?: Maybe<DeleteRidePayload>,
  /** Deletes a single `Ride` using its globally unique id. */
  readonly deleteRideByNodeId?: Maybe<DeleteRidePayload>,
  /** Deletes a single `Spot` using a unique key. */
  readonly deleteSpot?: Maybe<DeleteSpotPayload>,
  /** Deletes a single `Spot` using its globally unique id. */
  readonly deleteSpotByNodeId?: Maybe<DeleteSpotPayload>,
  /** Deletes a single `User` using a unique key. */
  readonly deleteUser?: Maybe<DeleteUserPayload>,
  /** Deletes a single `User` using its globally unique id. */
  readonly deleteUserByNodeId?: Maybe<DeleteUserPayload>,
  readonly moveSpot: Spot,
  /** Registers a single user */
  readonly register?: Maybe<RegisterPayload>,
  readonly removeSpot: Spot,
  /** Updates a single `Guide` using a unique key and a patch. */
  readonly updateGuide?: Maybe<UpdateGuidePayload>,
  /** Updates a single `Guide` using its globally unique id and a patch. */
  readonly updateGuideByNodeId?: Maybe<UpdateGuidePayload>,
  /** Updates a single `Ride` using a unique key and a patch. */
  readonly updateRide?: Maybe<UpdateRidePayload>,
  /** Updates a single `Ride` using its globally unique id and a patch. */
  readonly updateRideByNodeId?: Maybe<UpdateRidePayload>,
  /** Updates a single `Spot` using a unique key and a patch. */
  readonly updateSpot?: Maybe<UpdateSpotPayload>,
  /** Updates a single `Spot` using its globally unique id and a patch. */
  readonly updateSpotByNodeId?: Maybe<UpdateSpotPayload>,
  /** Updates a single `User` using a unique key and a patch. */
  readonly updateUser?: Maybe<UpdateUserPayload>,
  /** Updates a single `User` using its globally unique id and a patch. */
  readonly updateUserByNodeId?: Maybe<UpdateUserPayload>,
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAddSpotFromLatLngArgs = {
  guideId: Scalars['String'],
  label?: Maybe<Scalars['String']>,
  lat: Scalars['Float'],
  long: Scalars['Float']
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateArgs = {
  input: AuthenticateInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationComputeRidesArgs = {
  guideId: Scalars['String']
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
export type MutationMoveSpotArgs = {
  lat: Scalars['Float'],
  long: Scalars['Float'],
  spotId: Scalars['String']
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterArgs = {
  input: RegisterInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRemoveSpotArgs = {
  spotId: Scalars['String']
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
  readonly nodeId: Scalars['ID'],
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['Cursor']>,
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars['Cursor']>,
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  readonly getCurrentUser?: Maybe<Scalars['JwtToken']>,
  readonly guide?: Maybe<Guide>,
  /** Reads a single `Guide` using its globally unique `ID`. */
  readonly guideByNodeId?: Maybe<Guide>,
  /** Reads and enables pagination through a set of `Guide`. */
  readonly guides?: Maybe<GuidesConnection>,
  /** Fetches an object given its globally unique `ID`. */
  readonly node?: Maybe<Node>,
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  readonly nodeId: Scalars['ID'],
  /** 
 * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
 */
  readonly query: Query,
  readonly ride?: Maybe<Ride>,
  /** Reads a single `Ride` using its globally unique `ID`. */
  readonly rideByNodeId?: Maybe<Ride>,
  /** Reads and enables pagination through a set of `Ride`. */
  readonly rides?: Maybe<RidesConnection>,
  readonly spot?: Maybe<Spot>,
  /** Reads a single `Spot` using its globally unique `ID`. */
  readonly spotByNodeId?: Maybe<Spot>,
  /** Reads and enables pagination through a set of `Spot`. */
  readonly spots?: Maybe<SpotsConnection>,
  readonly user?: Maybe<User>,
  /** Reads a single `User` using its globally unique `ID`. */
  readonly userByNodeId?: Maybe<User>,
  /** Reads and enables pagination through a set of `User`. */
  readonly users?: Maybe<UsersConnection>,
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
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>
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
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>
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
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>
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
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>
};

/** All input for the `register` mutation. */
export type RegisterInput = {
  readonly _email: Scalars['String'],
  readonly _password: Scalars['String'],
  readonly _username: Scalars['String'],
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
};

/** The output of our `register` mutation. */
export type RegisterPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  readonly user?: Maybe<User>,
  /** An edge for our `User`. May be used by Relay 1. */
  readonly userEdge?: Maybe<UsersEdge>,
};


/** The output of our `register` mutation. */
export type RegisterPayloadUserEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>
};

export type Ride = Node & {
  readonly durationSeconds?: Maybe<Scalars['Int']>,
  readonly fromSpot: Scalars['String'],
  readonly guide: Scalars['String'],
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>,
  readonly id: Scalars['String'],
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'],
  readonly owner: Scalars['String'],
  readonly path?: Maybe<Scalars['JSON']>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByToSpot?: Maybe<Spot>,
  readonly toSpot: Scalars['String'],
  /** Reads a single `User` that is related to this `Ride`. */
  readonly userByOwner?: Maybe<User>,
};

/** A condition to be used against `Ride` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RideCondition = {
  /** Checks for equality with the object’s `durationSeconds` field. */
  readonly durationSeconds?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `fromSpot` field. */
  readonly fromSpot?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `guide` field. */
  readonly guide?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `owner` field. */
  readonly owner?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `path` field. */
  readonly path?: Maybe<Scalars['JSON']>,
  /** Checks for equality with the object’s `toSpot` field. */
  readonly toSpot?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `Ride` */
export type RideInput = {
  readonly durationSeconds?: Maybe<Scalars['Int']>,
  readonly fromSpot: Scalars['String'],
  readonly guide: Scalars['String'],
  readonly id: Scalars['String'],
  readonly owner: Scalars['String'],
  readonly path?: Maybe<Scalars['JSON']>,
  readonly toSpot: Scalars['String'],
};

/** Represents an update to a `Ride`. Fields that are set will be updated. */
export type RidePatch = {
  readonly durationSeconds?: Maybe<Scalars['Int']>,
  readonly fromSpot?: Maybe<Scalars['String']>,
  readonly guide?: Maybe<Scalars['String']>,
  readonly id?: Maybe<Scalars['String']>,
  readonly owner?: Maybe<Scalars['String']>,
  readonly path?: Maybe<Scalars['JSON']>,
  readonly toSpot?: Maybe<Scalars['String']>,
};

/** A connection to a list of `Ride` values. */
export type RidesConnection = {
  /** A list of edges which contains the `Ride` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<RidesEdge>,
  /** A list of `Ride` objects. */
  readonly nodes: ReadonlyArray<Maybe<Ride>>,
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo,
  /** The count of *all* `Ride` you could get from the connection. */
  readonly totalCount: Scalars['Int'],
};

/** A `Ride` edge in the connection. */
export type RidesEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>,
  /** The `Ride` at the end of the edge. */
  readonly node?: Maybe<Ride>,
};

/** Methods to use when ordering `Ride`. */
export enum RidesOrderBy {
  DurationSecondsAsc = 'DURATION_SECONDS_ASC',
  DurationSecondsDesc = 'DURATION_SECONDS_DESC',
  FromSpotAsc = 'FROM_SPOT_ASC',
  FromSpotDesc = 'FROM_SPOT_DESC',
  GuideAsc = 'GUIDE_ASC',
  GuideDesc = 'GUIDE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OwnerAsc = 'OWNER_ASC',
  OwnerDesc = 'OWNER_DESC',
  PathAsc = 'PATH_ASC',
  PathDesc = 'PATH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ToSpotAsc = 'TO_SPOT_ASC',
  ToSpotDesc = 'TO_SPOT_DESC'
}

export type Spot = Node & {
  readonly guide: Scalars['String'],
  /** Reads a single `Guide` that is related to this `Spot`. */
  readonly guideByGuide?: Maybe<Guide>,
  readonly id: Scalars['String'],
  readonly label?: Maybe<Scalars['String']>,
  readonly lat: Scalars['Float'],
  readonly location?: Maybe<Scalars['String']>,
  readonly locked: Scalars['Boolean'],
  readonly long: Scalars['Float'],
  readonly nights?: Maybe<Scalars['Int']>,
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'],
  readonly owner: Scalars['String'],
  readonly position?: Maybe<Scalars['String']>,
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByFromSpot: RidesConnection,
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByToSpot: RidesConnection,
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>,
};


export type SpotRidesByFromSpotArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<RideCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>
};


export type SpotRidesByToSpotArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<RideCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>
};

/** A condition to be used against `Spot` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SpotCondition = {
  /** Checks for equality with the object’s `guide` field. */
  readonly guide?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `label` field. */
  readonly label?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `lat` field. */
  readonly lat?: Maybe<Scalars['Float']>,
  /** Checks for equality with the object’s `location` field. */
  readonly location?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `locked` field. */
  readonly locked?: Maybe<Scalars['Boolean']>,
  /** Checks for equality with the object’s `long` field. */
  readonly long?: Maybe<Scalars['Float']>,
  /** Checks for equality with the object’s `nights` field. */
  readonly nights?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `owner` field. */
  readonly owner?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `position` field. */
  readonly position?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `Spot` */
export type SpotInput = {
  readonly guide: Scalars['String'],
  readonly id: Scalars['String'],
  readonly label?: Maybe<Scalars['String']>,
  readonly lat: Scalars['Float'],
  readonly location?: Maybe<Scalars['String']>,
  readonly locked: Scalars['Boolean'],
  readonly long: Scalars['Float'],
  readonly nights?: Maybe<Scalars['Int']>,
  readonly owner: Scalars['String'],
  readonly position?: Maybe<Scalars['String']>,
};

/** Represents an update to a `Spot`. Fields that are set will be updated. */
export type SpotPatch = {
  readonly guide?: Maybe<Scalars['String']>,
  readonly id?: Maybe<Scalars['String']>,
  readonly label?: Maybe<Scalars['String']>,
  readonly lat?: Maybe<Scalars['Float']>,
  readonly location?: Maybe<Scalars['String']>,
  readonly locked?: Maybe<Scalars['Boolean']>,
  readonly long?: Maybe<Scalars['Float']>,
  readonly nights?: Maybe<Scalars['Int']>,
  readonly owner?: Maybe<Scalars['String']>,
  readonly position?: Maybe<Scalars['String']>,
};

/** A connection to a list of `Spot` values. */
export type SpotsConnection = {
  /** A list of edges which contains the `Spot` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<SpotsEdge>,
  /** A list of `Spot` objects. */
  readonly nodes: ReadonlyArray<Maybe<Spot>>,
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo,
  /** The count of *all* `Spot` you could get from the connection. */
  readonly totalCount: Scalars['Int'],
};

/** A `Spot` edge in the connection. */
export type SpotsEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>,
  /** The `Spot` at the end of the edge. */
  readonly node?: Maybe<Spot>,
};

/** Methods to use when ordering `Spot`. */
export enum SpotsOrderBy {
  GuideAsc = 'GUIDE_ASC',
  GuideDesc = 'GUIDE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LabelAsc = 'LABEL_ASC',
  LabelDesc = 'LABEL_DESC',
  LatAsc = 'LAT_ASC',
  LatDesc = 'LAT_DESC',
  LocationAsc = 'LOCATION_ASC',
  LocationDesc = 'LOCATION_DESC',
  LockedAsc = 'LOCKED_ASC',
  LockedDesc = 'LOCKED_DESC',
  LongAsc = 'LONG_ASC',
  LongDesc = 'LONG_DESC',
  Natural = 'NATURAL',
  NightsAsc = 'NIGHTS_ASC',
  NightsDesc = 'NIGHTS_DESC',
  OwnerAsc = 'OWNER_ASC',
  OwnerDesc = 'OWNER_DESC',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updateGuideByNodeId` mutation. */
export type UpdateGuideByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Guide` to be updated. */
  readonly nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `Guide` being updated. */
  readonly patch: GuidePatch,
};

/** All input for the `updateGuide` mutation. */
export type UpdateGuideInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly id: Scalars['String'],
  /** An object where the defined keys will be set on the `Guide` being updated. */
  readonly patch: GuidePatch,
};

/** The output of our update `Guide` mutation. */
export type UpdateGuidePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The `Guide` that was updated by this mutation. */
  readonly guide?: Maybe<Guide>,
  /** An edge for our `Guide`. May be used by Relay 1. */
  readonly guideEdge?: Maybe<GuidesEdge>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `User` that is related to this `Guide`. */
  readonly userByOwner?: Maybe<User>,
};


/** The output of our update `Guide` mutation. */
export type UpdateGuidePayloadGuideEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>
};

/** All input for the `updateRideByNodeId` mutation. */
export type UpdateRideByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Ride` to be updated. */
  readonly nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `Ride` being updated. */
  readonly patch: RidePatch,
};

/** All input for the `updateRide` mutation. */
export type UpdateRideInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly id: Scalars['String'],
  /** An object where the defined keys will be set on the `Ride` being updated. */
  readonly patch: RidePatch,
};

/** The output of our update `Ride` mutation. */
export type UpdateRidePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** The `Ride` that was updated by this mutation. */
  readonly ride?: Maybe<Ride>,
  /** An edge for our `Ride`. May be used by Relay 1. */
  readonly rideEdge?: Maybe<RidesEdge>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByToSpot?: Maybe<Spot>,
  /** Reads a single `User` that is related to this `Ride`. */
  readonly userByOwner?: Maybe<User>,
};


/** The output of our update `Ride` mutation. */
export type UpdateRidePayloadRideEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>
};

/** All input for the `updateSpotByNodeId` mutation. */
export type UpdateSpotByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Spot` to be updated. */
  readonly nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `Spot` being updated. */
  readonly patch: SpotPatch,
};

/** All input for the `updateSpot` mutation. */
export type UpdateSpotInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly id: Scalars['String'],
  /** An object where the defined keys will be set on the `Spot` being updated. */
  readonly patch: SpotPatch,
};

/** The output of our update `Spot` mutation. */
export type UpdateSpotPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** Reads a single `Guide` that is related to this `Spot`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** The `Spot` that was updated by this mutation. */
  readonly spot?: Maybe<Spot>,
  /** An edge for our `Spot`. May be used by Relay 1. */
  readonly spotEdge?: Maybe<SpotsEdge>,
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>,
};


/** The output of our update `Spot` mutation. */
export type UpdateSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>
};

/** All input for the `updateUserByNodeId` mutation. */
export type UpdateUserByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  readonly nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `User` being updated. */
  readonly patch: UserPatch,
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `User` being updated. */
  readonly patch: UserPatch,
  readonly username: Scalars['String'],
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** The `User` that was updated by this mutation. */
  readonly user?: Maybe<User>,
  /** An edge for our `User`. May be used by Relay 1. */
  readonly userEdge?: Maybe<UsersEdge>,
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>
};

export type User = Node & {
  readonly email: Scalars['String'],
  /** Reads and enables pagination through a set of `Guide`. */
  readonly guidesByOwner: GuidesConnection,
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'],
  readonly passwordHash: Scalars['String'],
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByOwner: RidesConnection,
  /** Reads and enables pagination through a set of `Spot`. */
  readonly spotsByOwner: SpotsConnection,
  readonly username: Scalars['String'],
};


export type UserGuidesByOwnerArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<GuideCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>
};


export type UserRidesByOwnerArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<RideCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>
};


export type UserSpotsByOwnerArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<SpotCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `email` field. */
  readonly email?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `passwordHash` field. */
  readonly passwordHash?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `username` field. */
  readonly username?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `User` */
export type UserInput = {
  readonly email: Scalars['String'],
  readonly passwordHash: Scalars['String'],
  readonly username: Scalars['String'],
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  readonly email?: Maybe<Scalars['String']>,
  readonly passwordHash?: Maybe<Scalars['String']>,
  readonly username?: Maybe<Scalars['String']>,
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<UsersEdge>,
  /** A list of `User` objects. */
  readonly nodes: ReadonlyArray<Maybe<User>>,
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo,
  /** The count of *all* `User` you could get from the connection. */
  readonly totalCount: Scalars['Int'],
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>,
  /** The `User` at the end of the edge. */
  readonly node?: Maybe<User>,
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



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Node: ResolverTypeWrapper<Node>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  JwtToken: ResolverTypeWrapper<Scalars['JwtToken']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Guide: ResolverTypeWrapper<Guide>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>,
  RideCondition: RideCondition,
  JSON: ResolverTypeWrapper<Scalars['JSON']>,
  RidesOrderBy: RidesOrderBy,
  RidesConnection: ResolverTypeWrapper<RidesConnection>,
  RidesEdge: ResolverTypeWrapper<RidesEdge>,
  Ride: ResolverTypeWrapper<Ride>,
  Spot: ResolverTypeWrapper<Spot>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  User: ResolverTypeWrapper<User>,
  GuideCondition: GuideCondition,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  GuidesOrderBy: GuidesOrderBy,
  GuidesConnection: ResolverTypeWrapper<GuidesConnection>,
  GuidesEdge: ResolverTypeWrapper<GuidesEdge>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  SpotCondition: SpotCondition,
  SpotsOrderBy: SpotsOrderBy,
  SpotsConnection: ResolverTypeWrapper<SpotsConnection>,
  SpotsEdge: ResolverTypeWrapper<SpotsEdge>,
  UserCondition: UserCondition,
  UsersOrderBy: UsersOrderBy,
  UsersConnection: ResolverTypeWrapper<UsersConnection>,
  UsersEdge: ResolverTypeWrapper<UsersEdge>,
  Mutation: ResolverTypeWrapper<{}>,
  AuthenticateInput: AuthenticateInput,
  AuthenticatePayload: ResolverTypeWrapper<AuthenticatePayload>,
  CreateGuideInput: CreateGuideInput,
  GuideInput: GuideInput,
  CreateGuidePayload: ResolverTypeWrapper<CreateGuidePayload>,
  CreateRideInput: CreateRideInput,
  RideInput: RideInput,
  CreateRidePayload: ResolverTypeWrapper<CreateRidePayload>,
  CreateSpotInput: CreateSpotInput,
  SpotInput: SpotInput,
  CreateSpotPayload: ResolverTypeWrapper<CreateSpotPayload>,
  CreateUserInput: CreateUserInput,
  UserInput: UserInput,
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>,
  DeleteGuideInput: DeleteGuideInput,
  DeleteGuidePayload: ResolverTypeWrapper<DeleteGuidePayload>,
  DeleteGuideByNodeIdInput: DeleteGuideByNodeIdInput,
  DeleteRideInput: DeleteRideInput,
  DeleteRidePayload: ResolverTypeWrapper<DeleteRidePayload>,
  DeleteRideByNodeIdInput: DeleteRideByNodeIdInput,
  DeleteSpotInput: DeleteSpotInput,
  DeleteSpotPayload: ResolverTypeWrapper<DeleteSpotPayload>,
  DeleteSpotByNodeIdInput: DeleteSpotByNodeIdInput,
  DeleteUserInput: DeleteUserInput,
  DeleteUserPayload: ResolverTypeWrapper<DeleteUserPayload>,
  DeleteUserByNodeIdInput: DeleteUserByNodeIdInput,
  RegisterInput: RegisterInput,
  RegisterPayload: ResolverTypeWrapper<RegisterPayload>,
  UpdateGuideInput: UpdateGuideInput,
  GuidePatch: GuidePatch,
  UpdateGuidePayload: ResolverTypeWrapper<UpdateGuidePayload>,
  UpdateGuideByNodeIdInput: UpdateGuideByNodeIdInput,
  UpdateRideInput: UpdateRideInput,
  RidePatch: RidePatch,
  UpdateRidePayload: ResolverTypeWrapper<UpdateRidePayload>,
  UpdateRideByNodeIdInput: UpdateRideByNodeIdInput,
  UpdateSpotInput: UpdateSpotInput,
  SpotPatch: SpotPatch,
  UpdateSpotPayload: ResolverTypeWrapper<UpdateSpotPayload>,
  UpdateSpotByNodeIdInput: UpdateSpotByNodeIdInput,
  UpdateUserInput: UpdateUserInput,
  UserPatch: UserPatch,
  UpdateUserPayload: ResolverTypeWrapper<UpdateUserPayload>,
  UpdateUserByNodeIdInput: UpdateUserByNodeIdInput,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Node: Node,
  ID: Scalars['ID'],
  JwtToken: Scalars['JwtToken'],
  String: Scalars['String'],
  Guide: Guide,
  Int: Scalars['Int'],
  Cursor: Scalars['Cursor'],
  RideCondition: RideCondition,
  JSON: Scalars['JSON'],
  RidesOrderBy: RidesOrderBy,
  RidesConnection: RidesConnection,
  RidesEdge: RidesEdge,
  Ride: Ride,
  Spot: Spot,
  Float: Scalars['Float'],
  Boolean: Scalars['Boolean'],
  User: User,
  GuideCondition: GuideCondition,
  Date: Scalars['Date'],
  GuidesOrderBy: GuidesOrderBy,
  GuidesConnection: GuidesConnection,
  GuidesEdge: GuidesEdge,
  PageInfo: PageInfo,
  SpotCondition: SpotCondition,
  SpotsOrderBy: SpotsOrderBy,
  SpotsConnection: SpotsConnection,
  SpotsEdge: SpotsEdge,
  UserCondition: UserCondition,
  UsersOrderBy: UsersOrderBy,
  UsersConnection: UsersConnection,
  UsersEdge: UsersEdge,
  Mutation: {},
  AuthenticateInput: AuthenticateInput,
  AuthenticatePayload: AuthenticatePayload,
  CreateGuideInput: CreateGuideInput,
  GuideInput: GuideInput,
  CreateGuidePayload: CreateGuidePayload,
  CreateRideInput: CreateRideInput,
  RideInput: RideInput,
  CreateRidePayload: CreateRidePayload,
  CreateSpotInput: CreateSpotInput,
  SpotInput: SpotInput,
  CreateSpotPayload: CreateSpotPayload,
  CreateUserInput: CreateUserInput,
  UserInput: UserInput,
  CreateUserPayload: CreateUserPayload,
  DeleteGuideInput: DeleteGuideInput,
  DeleteGuidePayload: DeleteGuidePayload,
  DeleteGuideByNodeIdInput: DeleteGuideByNodeIdInput,
  DeleteRideInput: DeleteRideInput,
  DeleteRidePayload: DeleteRidePayload,
  DeleteRideByNodeIdInput: DeleteRideByNodeIdInput,
  DeleteSpotInput: DeleteSpotInput,
  DeleteSpotPayload: DeleteSpotPayload,
  DeleteSpotByNodeIdInput: DeleteSpotByNodeIdInput,
  DeleteUserInput: DeleteUserInput,
  DeleteUserPayload: DeleteUserPayload,
  DeleteUserByNodeIdInput: DeleteUserByNodeIdInput,
  RegisterInput: RegisterInput,
  RegisterPayload: RegisterPayload,
  UpdateGuideInput: UpdateGuideInput,
  GuidePatch: GuidePatch,
  UpdateGuidePayload: UpdateGuidePayload,
  UpdateGuideByNodeIdInput: UpdateGuideByNodeIdInput,
  UpdateRideInput: UpdateRideInput,
  RidePatch: RidePatch,
  UpdateRidePayload: UpdateRidePayload,
  UpdateRideByNodeIdInput: UpdateRideByNodeIdInput,
  UpdateSpotInput: UpdateSpotInput,
  SpotPatch: SpotPatch,
  UpdateSpotPayload: UpdateSpotPayload,
  UpdateSpotByNodeIdInput: UpdateSpotByNodeIdInput,
  UpdateUserInput: UpdateUserInput,
  UserPatch: UserPatch,
  UpdateUserPayload: UpdateUserPayload,
  UpdateUserByNodeIdInput: UpdateUserByNodeIdInput,
};

export type AuthenticatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticatePayload'] = ResolversParentTypes['AuthenticatePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  jwtToken?: Resolver<Maybe<ResolversTypes['JwtToken']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateGuidePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateGuidePayload'] = ResolversParentTypes['CreateGuidePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  guideEdge?: Resolver<Maybe<ResolversTypes['GuidesEdge']>, ParentType, ContextType, RequireFields<CreateGuidePayloadGuideEdgeArgs, 'orderBy'>>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateRidePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateRidePayload'] = ResolversParentTypes['CreateRidePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  ride?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>,
  rideEdge?: Resolver<Maybe<ResolversTypes['RidesEdge']>, ParentType, ContextType, RequireFields<CreateRidePayloadRideEdgeArgs, 'orderBy'>>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateSpotPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateSpotPayload'] = ResolversParentTypes['CreateSpotPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  spot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotEdge?: Resolver<Maybe<ResolversTypes['SpotsEdge']>, ParentType, ContextType, RequireFields<CreateSpotPayloadSpotEdgeArgs, 'orderBy'>>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<CreateUserPayloadUserEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor'
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type DeleteGuidePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteGuidePayload'] = ResolversParentTypes['DeleteGuidePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  deletedGuideNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  guide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  guideEdge?: Resolver<Maybe<ResolversTypes['GuidesEdge']>, ParentType, ContextType, RequireFields<DeleteGuidePayloadGuideEdgeArgs, 'orderBy'>>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteRidePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteRidePayload'] = ResolversParentTypes['DeleteRidePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  deletedRideNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  ride?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>,
  rideEdge?: Resolver<Maybe<ResolversTypes['RidesEdge']>, ParentType, ContextType, RequireFields<DeleteRidePayloadRideEdgeArgs, 'orderBy'>>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteSpotPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteSpotPayload'] = ResolversParentTypes['DeleteSpotPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  deletedSpotNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  spot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotEdge?: Resolver<Maybe<ResolversTypes['SpotsEdge']>, ParentType, ContextType, RequireFields<DeleteSpotPayloadSpotEdgeArgs, 'orderBy'>>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserPayload'] = ResolversParentTypes['DeleteUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  deletedUserNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<DeleteUserPayloadUserEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GuideResolvers<ContextType = any, ParentType extends ResolversParentTypes['Guide'] = ResolversParentTypes['Guide']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  maxHoursPerRide?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  ridesByGuide?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<GuideRidesByGuideArgs, 'orderBy'>>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  spotsByGuide?: Resolver<ResolversTypes['SpotsConnection'], ParentType, ContextType, RequireFields<GuideSpotsByGuideArgs, 'orderBy'>>,
  startDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GuidesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuidesConnection'] = ResolversParentTypes['GuidesConnection']> = {
  edges?: Resolver<ReadonlyArray<ResolversTypes['GuidesEdge']>, ParentType, ContextType>,
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Guide']>>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GuidesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuidesEdge'] = ResolversParentTypes['GuidesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export interface JwtTokenScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JwtToken'], any> {
  name: 'JwtToken'
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addSpotFromLatLng?: Resolver<ResolversTypes['Spot'], ParentType, ContextType, RequireFields<MutationAddSpotFromLatLngArgs, 'guideId' | 'lat' | 'long'>>,
  authenticate?: Resolver<Maybe<ResolversTypes['AuthenticatePayload']>, ParentType, ContextType, RequireFields<MutationAuthenticateArgs, 'input'>>,
  computeRides?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationComputeRidesArgs, 'guideId'>>,
  createGuide?: Resolver<Maybe<ResolversTypes['CreateGuidePayload']>, ParentType, ContextType, RequireFields<MutationCreateGuideArgs, 'input'>>,
  createRide?: Resolver<Maybe<ResolversTypes['CreateRidePayload']>, ParentType, ContextType, RequireFields<MutationCreateRideArgs, 'input'>>,
  createSpot?: Resolver<Maybe<ResolversTypes['CreateSpotPayload']>, ParentType, ContextType, RequireFields<MutationCreateSpotArgs, 'input'>>,
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>,
  deleteGuide?: Resolver<Maybe<ResolversTypes['DeleteGuidePayload']>, ParentType, ContextType, RequireFields<MutationDeleteGuideArgs, 'input'>>,
  deleteGuideByNodeId?: Resolver<Maybe<ResolversTypes['DeleteGuidePayload']>, ParentType, ContextType, RequireFields<MutationDeleteGuideByNodeIdArgs, 'input'>>,
  deleteRide?: Resolver<Maybe<ResolversTypes['DeleteRidePayload']>, ParentType, ContextType, RequireFields<MutationDeleteRideArgs, 'input'>>,
  deleteRideByNodeId?: Resolver<Maybe<ResolversTypes['DeleteRidePayload']>, ParentType, ContextType, RequireFields<MutationDeleteRideByNodeIdArgs, 'input'>>,
  deleteSpot?: Resolver<Maybe<ResolversTypes['DeleteSpotPayload']>, ParentType, ContextType, RequireFields<MutationDeleteSpotArgs, 'input'>>,
  deleteSpotByNodeId?: Resolver<Maybe<ResolversTypes['DeleteSpotPayload']>, ParentType, ContextType, RequireFields<MutationDeleteSpotByNodeIdArgs, 'input'>>,
  deleteUser?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'input'>>,
  deleteUserByNodeId?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserByNodeIdArgs, 'input'>>,
  moveSpot?: Resolver<ResolversTypes['Spot'], ParentType, ContextType, RequireFields<MutationMoveSpotArgs, 'lat' | 'long' | 'spotId'>>,
  register?: Resolver<Maybe<ResolversTypes['RegisterPayload']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>,
  removeSpot?: Resolver<ResolversTypes['Spot'], ParentType, ContextType, RequireFields<MutationRemoveSpotArgs, 'spotId'>>,
  updateGuide?: Resolver<Maybe<ResolversTypes['UpdateGuidePayload']>, ParentType, ContextType, RequireFields<MutationUpdateGuideArgs, 'input'>>,
  updateGuideByNodeId?: Resolver<Maybe<ResolversTypes['UpdateGuidePayload']>, ParentType, ContextType, RequireFields<MutationUpdateGuideByNodeIdArgs, 'input'>>,
  updateRide?: Resolver<Maybe<ResolversTypes['UpdateRidePayload']>, ParentType, ContextType, RequireFields<MutationUpdateRideArgs, 'input'>>,
  updateRideByNodeId?: Resolver<Maybe<ResolversTypes['UpdateRidePayload']>, ParentType, ContextType, RequireFields<MutationUpdateRideByNodeIdArgs, 'input'>>,
  updateSpot?: Resolver<Maybe<ResolversTypes['UpdateSpotPayload']>, ParentType, ContextType, RequireFields<MutationUpdateSpotArgs, 'input'>>,
  updateSpotByNodeId?: Resolver<Maybe<ResolversTypes['UpdateSpotPayload']>, ParentType, ContextType, RequireFields<MutationUpdateSpotByNodeIdArgs, 'input'>>,
  updateUser?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>,
  updateUserByNodeId?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserByNodeIdArgs, 'input'>>,
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Query' | 'Guide' | 'Ride' | 'Spot' | 'User', ParentType, ContextType>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>,
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCurrentUser?: Resolver<Maybe<ResolversTypes['JwtToken']>, ParentType, ContextType>,
  guide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType, RequireFields<QueryGuideArgs, 'id'>>,
  guideByNodeId?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType, RequireFields<QueryGuideByNodeIdArgs, 'nodeId'>>,
  guides?: Resolver<Maybe<ResolversTypes['GuidesConnection']>, ParentType, ContextType, RequireFields<QueryGuidesArgs, 'orderBy'>>,
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>,
  ride?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType, RequireFields<QueryRideArgs, 'id'>>,
  rideByNodeId?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType, RequireFields<QueryRideByNodeIdArgs, 'nodeId'>>,
  rides?: Resolver<Maybe<ResolversTypes['RidesConnection']>, ParentType, ContextType, RequireFields<QueryRidesArgs, 'orderBy'>>,
  spot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType, RequireFields<QuerySpotArgs, 'id'>>,
  spotByNodeId?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType, RequireFields<QuerySpotByNodeIdArgs, 'nodeId'>>,
  spots?: Resolver<Maybe<ResolversTypes['SpotsConnection']>, ParentType, ContextType, RequireFields<QuerySpotsArgs, 'orderBy'>>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'username'>>,
  userByNodeId?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByNodeIdArgs, 'nodeId'>>,
  users?: Resolver<Maybe<ResolversTypes['UsersConnection']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'orderBy'>>,
};

export type RegisterPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterPayload'] = ResolversParentTypes['RegisterPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<RegisterPayloadUserEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RideResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ride'] = ResolversParentTypes['Ride']> = {
  durationSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  fromSpot?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  guide?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  path?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  toSpot?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RidesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RidesConnection'] = ResolversParentTypes['RidesConnection']> = {
  edges?: Resolver<ReadonlyArray<ResolversTypes['RidesEdge']>, ParentType, ContextType>,
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Ride']>>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RidesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RidesEdge'] = ResolversParentTypes['RidesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SpotResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spot'] = ResolversParentTypes['Spot']> = {
  guide?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  locked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  long?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  nights?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  ridesByFromSpot?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<SpotRidesByFromSpotArgs, 'orderBy'>>,
  ridesByToSpot?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<SpotRidesByToSpotArgs, 'orderBy'>>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SpotsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpotsConnection'] = ResolversParentTypes['SpotsConnection']> = {
  edges?: Resolver<ReadonlyArray<ResolversTypes['SpotsEdge']>, ParentType, ContextType>,
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Spot']>>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SpotsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpotsEdge'] = ResolversParentTypes['SpotsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateGuidePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateGuidePayload'] = ResolversParentTypes['UpdateGuidePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  guideEdge?: Resolver<Maybe<ResolversTypes['GuidesEdge']>, ParentType, ContextType, RequireFields<UpdateGuidePayloadGuideEdgeArgs, 'orderBy'>>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateRidePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateRidePayload'] = ResolversParentTypes['UpdateRidePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  ride?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>,
  rideEdge?: Resolver<Maybe<ResolversTypes['RidesEdge']>, ParentType, ContextType, RequireFields<UpdateRidePayloadRideEdgeArgs, 'orderBy'>>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateSpotPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateSpotPayload'] = ResolversParentTypes['UpdateSpotPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  spot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotEdge?: Resolver<Maybe<ResolversTypes['SpotsEdge']>, ParentType, ContextType, RequireFields<UpdateSpotPayloadSpotEdgeArgs, 'orderBy'>>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserPayload'] = ResolversParentTypes['UpdateUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<UpdateUserPayloadUserEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  guidesByOwner?: Resolver<ResolversTypes['GuidesConnection'], ParentType, ContextType, RequireFields<UserGuidesByOwnerArgs, 'orderBy'>>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  passwordHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  ridesByOwner?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<UserRidesByOwnerArgs, 'orderBy'>>,
  spotsByOwner?: Resolver<ResolversTypes['SpotsConnection'], ParentType, ContextType, RequireFields<UserSpotsByOwnerArgs, 'orderBy'>>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UsersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersConnection'] = ResolversParentTypes['UsersConnection']> = {
  edges?: Resolver<ReadonlyArray<ResolversTypes['UsersEdge']>, ParentType, ContextType>,
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['User']>>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UsersEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersEdge'] = ResolversParentTypes['UsersEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  AuthenticatePayload?: AuthenticatePayloadResolvers<ContextType>,
  CreateGuidePayload?: CreateGuidePayloadResolvers<ContextType>,
  CreateRidePayload?: CreateRidePayloadResolvers<ContextType>,
  CreateSpotPayload?: CreateSpotPayloadResolvers<ContextType>,
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>,
  Cursor?: GraphQLScalarType,
  Date?: GraphQLScalarType,
  DeleteGuidePayload?: DeleteGuidePayloadResolvers<ContextType>,
  DeleteRidePayload?: DeleteRidePayloadResolvers<ContextType>,
  DeleteSpotPayload?: DeleteSpotPayloadResolvers<ContextType>,
  DeleteUserPayload?: DeleteUserPayloadResolvers<ContextType>,
  Guide?: GuideResolvers<ContextType>,
  GuidesConnection?: GuidesConnectionResolvers<ContextType>,
  GuidesEdge?: GuidesEdgeResolvers<ContextType>,
  JSON?: GraphQLScalarType,
  JwtToken?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  Node?: NodeResolvers,
  PageInfo?: PageInfoResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  RegisterPayload?: RegisterPayloadResolvers<ContextType>,
  Ride?: RideResolvers<ContextType>,
  RidesConnection?: RidesConnectionResolvers<ContextType>,
  RidesEdge?: RidesEdgeResolvers<ContextType>,
  Spot?: SpotResolvers<ContextType>,
  SpotsConnection?: SpotsConnectionResolvers<ContextType>,
  SpotsEdge?: SpotsEdgeResolvers<ContextType>,
  UpdateGuidePayload?: UpdateGuidePayloadResolvers<ContextType>,
  UpdateRidePayload?: UpdateRidePayloadResolvers<ContextType>,
  UpdateSpotPayload?: UpdateSpotPayloadResolvers<ContextType>,
  UpdateUserPayload?: UpdateUserPayloadResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  UsersConnection?: UsersConnectionResolvers<ContextType>,
  UsersEdge?: UsersEdgeResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export type SomeQueryQueryVariables = {};


export type SomeQueryQuery = { readonly users: Maybe<(
    Pick<UsersConnection, 'totalCount'>
    & { readonly nodes: ReadonlyArray<Maybe<Pick<User, 'email' | 'username'>>> }
  )> };

export type CreateGuideMutationVariables = {
  guide: GuideInput
};


export type CreateGuideMutation = { readonly createGuide: Maybe<{ readonly guide: Maybe<Pick<Guide, 'id'>> }> };

export type AddStayFromLatLongMutationVariables = {
  guideId: Scalars['String'],
  lat: Scalars['Float'],
  long: Scalars['Float']
};


export type AddStayFromLatLongMutation = { readonly addSpotFromLatLng: Pick<Spot, 'id'> };

export type DeleteGuideMutationVariables = {
  guideId: Scalars['String']
};


export type DeleteGuideMutation = { readonly deleteGuide: Maybe<{ readonly guide: Maybe<Pick<Guide, 'id'>> }> };

export type RemoveSpotMutationVariables = {
  spotId: Scalars['String']
};


export type RemoveSpotMutation = { readonly removeSpot: Pick<Spot, 'id'> };

export type MoveSpotMutationVariables = {
  spotId: Scalars['String'],
  lat: Scalars['Float'],
  long: Scalars['Float']
};


export type MoveSpotMutation = { readonly moveSpot: Pick<Spot, 'id'> };

export type AllGuideTitlesForUserQueryVariables = {
  owner: Scalars['String']
};


export type AllGuideTitlesForUserQuery = { readonly guides: Maybe<{ readonly nodes: ReadonlyArray<Maybe<Pick<Guide, 'id' | 'title' | 'slug' | 'owner'>>> }> };

export type SpotByGuideFragment = Pick<Spot, 'id' | 'label' | 'lat' | 'long' | 'locked' | 'nights'>;

export type SomeFragFragment = { readonly node: Maybe<Pick<Guide, 'owner'>> };

export type RideByGuideFragment = (
  Pick<Ride, 'id' | 'path' | 'durationSeconds'>
  & { readonly toSpot: Maybe<SpotByGuideFragment>, readonly fromSpot: Maybe<SpotByGuideFragment> }
);

export type GuideBySlugFragment = (
  Pick<Guide, 'id' | 'title' | 'slug' | 'owner' | 'startDate'>
  & { readonly ridesByGuide: (
    Pick<RidesConnection, 'totalCount'>
    & { readonly nodes: ReadonlyArray<Maybe<RideByGuideFragment>> }
  ), readonly spotsByGuide: (
    Pick<SpotsConnection, 'totalCount'>
    & { readonly nodes: ReadonlyArray<Maybe<SpotByGuideFragment>> }
  ) }
);

export type GetGuideBySlugQueryVariables = {
  slug: Scalars['String'],
  owner: Scalars['String']
};


export type GetGuideBySlugQuery = { readonly guides: Maybe<{ readonly nodes: ReadonlyArray<Maybe<GuideBySlugFragment>> }> };

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = { readonly authenticate: Maybe<Pick<AuthenticatePayload, 'jwtToken'>> };

export type SignUpMutationVariables = {
  username: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type SignUpMutation = { readonly register: Maybe<{ readonly user: Maybe<Pick<User, 'username' | 'email'>> }> };

export type GetUsernameQueryVariables = {
  email: Scalars['String']
};


export type GetUsernameQuery = { readonly users: Maybe<{ readonly nodes: ReadonlyArray<Maybe<Pick<User, 'username'>>> }> };

export const SomeFragFragmentDoc = gql`
    fragment SomeFrag on GuidesEdge {
  node {
    owner
  }
}
    `;
export const SpotByGuideFragmentDoc = gql`
    fragment SpotByGuide on Spot {
  id
  label
  lat
  long
  locked
  nights
}
    `;
export const RideByGuideFragmentDoc = gql`
    fragment RideByGuide on Ride {
  id
  toSpot: spotByToSpot {
    ...SpotByGuide
  }
  fromSpot: spotByFromSpot {
    ...SpotByGuide
  }
  path
  durationSeconds
}
    ${SpotByGuideFragmentDoc}`;
export const GuideBySlugFragmentDoc = gql`
    fragment GuideBySlug on Guide {
  id
  title
  slug
  owner
  startDate
  ridesByGuide {
    totalCount
    nodes {
      ...RideByGuide
    }
  }
  spotsByGuide(orderBy: [POSITION_ASC]) {
    totalCount
    nodes {
      ...SpotByGuide
    }
  }
}
    ${RideByGuideFragmentDoc}
${SpotByGuideFragmentDoc}`;
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
export const AddStayFromLatLongDocument = gql`
    mutation AddStayFromLatLong($guideId: String!, $lat: Float!, $long: Float!) {
  addSpotFromLatLng(guideId: $guideId, lat: $lat, long: $long) {
    id
  }
}
    `;
export type AddStayFromLatLongMutationFn = ApolloReactCommon.MutationFunction<AddStayFromLatLongMutation, AddStayFromLatLongMutationVariables>;
export type AddStayFromLatLongComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddStayFromLatLongMutation, AddStayFromLatLongMutationVariables>, 'mutation'>;

    export const AddStayFromLatLongComponent = (props: AddStayFromLatLongComponentProps) => (
      <ApolloReactComponents.Mutation<AddStayFromLatLongMutation, AddStayFromLatLongMutationVariables> mutation={AddStayFromLatLongDocument} {...props} />
    );
    

/**
 * __useAddStayFromLatLongMutation__
 *
 * To run a mutation, you first call `useAddStayFromLatLongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStayFromLatLongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStayFromLatLongMutation, { data, loading, error }] = useAddStayFromLatLongMutation({
 *   variables: {
 *      guideId: // value for 'guideId'
 *      lat: // value for 'lat'
 *      long: // value for 'long'
 *   },
 * });
 */
export function useAddStayFromLatLongMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddStayFromLatLongMutation, AddStayFromLatLongMutationVariables>) {
        return ApolloReactHooks.useMutation<AddStayFromLatLongMutation, AddStayFromLatLongMutationVariables>(AddStayFromLatLongDocument, baseOptions);
      }
export type AddStayFromLatLongMutationHookResult = ReturnType<typeof useAddStayFromLatLongMutation>;
export type AddStayFromLatLongMutationResult = ApolloReactCommon.MutationResult<AddStayFromLatLongMutation>;
export type AddStayFromLatLongMutationOptions = ApolloReactCommon.BaseMutationOptions<AddStayFromLatLongMutation, AddStayFromLatLongMutationVariables>;
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
export const RemoveSpotDocument = gql`
    mutation RemoveSpot($spotId: String!) {
  removeSpot(spotId: $spotId) {
    id
  }
}
    `;
export type RemoveSpotMutationFn = ApolloReactCommon.MutationFunction<RemoveSpotMutation, RemoveSpotMutationVariables>;
export type RemoveSpotComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveSpotMutation, RemoveSpotMutationVariables>, 'mutation'>;

    export const RemoveSpotComponent = (props: RemoveSpotComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveSpotMutation, RemoveSpotMutationVariables> mutation={RemoveSpotDocument} {...props} />
    );
    

/**
 * __useRemoveSpotMutation__
 *
 * To run a mutation, you first call `useRemoveSpotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSpotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSpotMutation, { data, loading, error }] = useRemoveSpotMutation({
 *   variables: {
 *      spotId: // value for 'spotId'
 *   },
 * });
 */
export function useRemoveSpotMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveSpotMutation, RemoveSpotMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveSpotMutation, RemoveSpotMutationVariables>(RemoveSpotDocument, baseOptions);
      }
export type RemoveSpotMutationHookResult = ReturnType<typeof useRemoveSpotMutation>;
export type RemoveSpotMutationResult = ApolloReactCommon.MutationResult<RemoveSpotMutation>;
export type RemoveSpotMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveSpotMutation, RemoveSpotMutationVariables>;
export const MoveSpotDocument = gql`
    mutation MoveSpot($spotId: String!, $lat: Float!, $long: Float!) {
  moveSpot(spotId: $spotId, lat: $lat, long: $long) {
    id
  }
}
    `;
export type MoveSpotMutationFn = ApolloReactCommon.MutationFunction<MoveSpotMutation, MoveSpotMutationVariables>;
export type MoveSpotComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<MoveSpotMutation, MoveSpotMutationVariables>, 'mutation'>;

    export const MoveSpotComponent = (props: MoveSpotComponentProps) => (
      <ApolloReactComponents.Mutation<MoveSpotMutation, MoveSpotMutationVariables> mutation={MoveSpotDocument} {...props} />
    );
    

/**
 * __useMoveSpotMutation__
 *
 * To run a mutation, you first call `useMoveSpotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveSpotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveSpotMutation, { data, loading, error }] = useMoveSpotMutation({
 *   variables: {
 *      spotId: // value for 'spotId'
 *      lat: // value for 'lat'
 *      long: // value for 'long'
 *   },
 * });
 */
export function useMoveSpotMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MoveSpotMutation, MoveSpotMutationVariables>) {
        return ApolloReactHooks.useMutation<MoveSpotMutation, MoveSpotMutationVariables>(MoveSpotDocument, baseOptions);
      }
export type MoveSpotMutationHookResult = ReturnType<typeof useMoveSpotMutation>;
export type MoveSpotMutationResult = ApolloReactCommon.MutationResult<MoveSpotMutation>;
export type MoveSpotMutationOptions = ApolloReactCommon.BaseMutationOptions<MoveSpotMutation, MoveSpotMutationVariables>;
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
      ...GuideBySlug
    }
  }
}
    ${GuideBySlugFragmentDoc}`;
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
export const GetUsernameDocument = gql`
    query GetUsername($email: String!) {
  users(condition: {email: $email}) {
    nodes {
      username
    }
  }
}
    `;
export type GetUsernameComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUsernameQuery, GetUsernameQueryVariables>, 'query'> & ({ variables: GetUsernameQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetUsernameComponent = (props: GetUsernameComponentProps) => (
      <ApolloReactComponents.Query<GetUsernameQuery, GetUsernameQueryVariables> query={GetUsernameDocument} {...props} />
    );
    

/**
 * __useGetUsernameQuery__
 *
 * To run a query within a React component, call `useGetUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsernameQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUsernameQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsernameQuery, GetUsernameQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUsernameQuery, GetUsernameQueryVariables>(GetUsernameDocument, baseOptions);
      }
export function useGetUsernameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsernameQuery, GetUsernameQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUsernameQuery, GetUsernameQueryVariables>(GetUsernameDocument, baseOptions);
        }
export type GetUsernameQueryHookResult = ReturnType<typeof useGetUsernameQuery>;
export type GetUsernameLazyQueryHookResult = ReturnType<typeof useGetUsernameLazyQuery>;
export type GetUsernameQueryResult = ApolloReactCommon.QueryResult<GetUsernameQuery, GetUsernameQueryVariables>;