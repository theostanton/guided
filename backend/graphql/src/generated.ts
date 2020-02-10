// tslint:disable
export type Maybe<T> = T | null;

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
  readonly owner: Scalars['String'],
  readonly slug: Scalars['String'],
  readonly startDate?: Maybe<Scalars['Date']>,
  readonly title: Scalars['String'],
};

/** Represents an update to a `Guide`. Fields that are set will be updated. */
export type GuidePatch = {
  readonly id?: Maybe<Scalars['String']>,
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
  /** Registers a single user */
  readonly register?: Maybe<RegisterPayload>,
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
  readonly fromSpot: Scalars['String'],
  readonly guide: Scalars['String'],
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>,
  readonly id: Scalars['String'],
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'],
  readonly owner: Scalars['String'],
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
  /** Checks for equality with the object’s `fromSpot` field. */
  readonly fromSpot?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `guide` field. */
  readonly guide?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `owner` field. */
  readonly owner?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `toSpot` field. */
  readonly toSpot?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `Ride` */
export type RideInput = {
  readonly fromSpot: Scalars['String'],
  readonly guide: Scalars['String'],
  readonly id: Scalars['String'],
  readonly owner: Scalars['String'],
  readonly toSpot: Scalars['String'],
};

/** Represents an update to a `Ride`. Fields that are set will be updated. */
export type RidePatch = {
  readonly fromSpot?: Maybe<Scalars['String']>,
  readonly guide?: Maybe<Scalars['String']>,
  readonly id?: Maybe<Scalars['String']>,
  readonly owner?: Maybe<Scalars['String']>,
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
  FromSpotAsc = 'FROM_SPOT_ASC',
  FromSpotDesc = 'FROM_SPOT_DESC',
  GuideAsc = 'GUIDE_ASC',
  GuideDesc = 'GUIDE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OwnerAsc = 'OWNER_ASC',
  OwnerDesc = 'OWNER_DESC',
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
  readonly lat?: Maybe<Scalars['Float']>,
  readonly locked?: Maybe<Scalars['Boolean']>,
  readonly long?: Maybe<Scalars['Float']>,
  readonly nights?: Maybe<Scalars['Int']>,
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'],
  readonly owner: Scalars['String'],
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
  /** Checks for equality with the object’s `locked` field. */
  readonly locked?: Maybe<Scalars['Boolean']>,
  /** Checks for equality with the object’s `long` field. */
  readonly long?: Maybe<Scalars['Float']>,
  /** Checks for equality with the object’s `nights` field. */
  readonly nights?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `owner` field. */
  readonly owner?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `Spot` */
export type SpotInput = {
  readonly guide: Scalars['String'],
  readonly id: Scalars['String'],
  readonly label?: Maybe<Scalars['String']>,
  readonly lat?: Maybe<Scalars['Float']>,
  readonly locked?: Maybe<Scalars['Boolean']>,
  readonly long?: Maybe<Scalars['Float']>,
  readonly nights?: Maybe<Scalars['Int']>,
  readonly owner: Scalars['String'],
};

/** Represents an update to a `Spot`. Fields that are set will be updated. */
export type SpotPatch = {
  readonly guide?: Maybe<Scalars['String']>,
  readonly id?: Maybe<Scalars['String']>,
  readonly label?: Maybe<Scalars['String']>,
  readonly lat?: Maybe<Scalars['Float']>,
  readonly locked?: Maybe<Scalars['Boolean']>,
  readonly long?: Maybe<Scalars['Float']>,
  readonly nights?: Maybe<Scalars['Int']>,
  readonly owner?: Maybe<Scalars['String']>,
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
  LockedAsc = 'LOCKED_ASC',
  LockedDesc = 'LOCKED_DESC',
  LongAsc = 'LONG_ASC',
  LongDesc = 'LONG_DESC',
  Natural = 'NATURAL',
  NightsAsc = 'NIGHTS_ASC',
  NightsDesc = 'NIGHTS_DESC',
  OwnerAsc = 'OWNER_ASC',
  OwnerDesc = 'OWNER_DESC',
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

