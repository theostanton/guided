import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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

export type Bound = {
  readonly east?: Maybe<Scalars['Float']>,
  readonly north?: Maybe<Scalars['Float']>,
  readonly south?: Maybe<Scalars['Float']>,
  readonly west?: Maybe<Scalars['Float']>,
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
  /** Reads a single `Stage` that is related to this `Ride`. */
  readonly stageByStage?: Maybe<Stage>,
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
  /** Reads a single `Stage` that is related to this `Spot`. */
  readonly stageByStage?: Maybe<Stage>,
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>,
};


/** The output of our create `Spot` mutation. */
export type CreateSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>
};

/** All input for the create `Stage` mutation. */
export type CreateStageInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The `Stage` to be created by this mutation. */
  readonly stage: StageInput,
};

/** The output of our create `Stage` mutation. */
export type CreateStagePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** Reads a single `Guide` that is related to this `Stage`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByToSpot?: Maybe<Spot>,
  /** The `Stage` that was created by this mutation. */
  readonly stage?: Maybe<Stage>,
  /** An edge for our `Stage`. May be used by Relay 1. */
  readonly stageEdge?: Maybe<StagesEdge>,
};


/** The output of our create `Stage` mutation. */
export type CreateStagePayloadStageEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>
};

/** All input for the create `Temperature` mutation. */
export type CreateTemperatureInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The `Temperature` to be created by this mutation. */
  readonly temperature: TemperatureInput,
};

/** The output of our create `Temperature` mutation. */
export type CreateTemperaturePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** The `Temperature` that was created by this mutation. */
  readonly temperature?: Maybe<Temperature>,
  /** An edge for our `Temperature`. May be used by Relay 1. */
  readonly temperatureEdge?: Maybe<TemperaturesEdge>,
};


/** The output of our create `Temperature` mutation. */
export type CreateTemperaturePayloadTemperatureEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<TemperaturesOrderBy>>
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
  /** Reads a single `Stage` that is related to this `Ride`. */
  readonly stageByStage?: Maybe<Stage>,
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
  /** Reads a single `Stage` that is related to this `Spot`. */
  readonly stageByStage?: Maybe<Stage>,
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>,
};


/** The output of our delete `Spot` mutation. */
export type DeleteSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>
};

/** All input for the `deleteStageByNodeId` mutation. */
export type DeleteStageByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Stage` to be deleted. */
  readonly nodeId: Scalars['ID'],
};

/** All input for the `deleteStage` mutation. */
export type DeleteStageInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly id: Scalars['String'],
};

/** The output of our delete `Stage` mutation. */
export type DeleteStagePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly deletedStageNodeId?: Maybe<Scalars['ID']>,
  /** Reads a single `Guide` that is related to this `Stage`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByToSpot?: Maybe<Spot>,
  /** The `Stage` that was deleted by this mutation. */
  readonly stage?: Maybe<Stage>,
  /** An edge for our `Stage`. May be used by Relay 1. */
  readonly stageEdge?: Maybe<StagesEdge>,
};


/** The output of our delete `Stage` mutation. */
export type DeleteStagePayloadStageEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>
};

/** All input for the `deleteTemperatureByNodeId` mutation. */
export type DeleteTemperatureByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Temperature` to be deleted. */
  readonly nodeId: Scalars['ID'],
};

/** All input for the `deleteTemperature` mutation. */
export type DeleteTemperatureInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly id: Scalars['String'],
};

/** The output of our delete `Temperature` mutation. */
export type DeleteTemperaturePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly deletedTemperatureNodeId?: Maybe<Scalars['ID']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** The `Temperature` that was deleted by this mutation. */
  readonly temperature?: Maybe<Temperature>,
  /** An edge for our `Temperature`. May be used by Relay 1. */
  readonly temperatureEdge?: Maybe<TemperaturesEdge>,
};


/** The output of our delete `Temperature` mutation. */
export type DeleteTemperaturePayloadTemperatureEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<TemperaturesOrderBy>>
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
  readonly bounds?: Maybe<Bound>,
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
  /** Reads and enables pagination through a set of `Stage`. */
  readonly stagesByGuide: StagesConnection,
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


export type GuideStagesByGuideArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<StageCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>
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
  /** Creates a single `Stage`. */
  readonly createStage?: Maybe<CreateStagePayload>,
  /** Creates a single `Temperature`. */
  readonly createTemperature?: Maybe<CreateTemperaturePayload>,
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
  /** Deletes a single `Stage` using a unique key. */
  readonly deleteStage?: Maybe<DeleteStagePayload>,
  /** Deletes a single `Stage` using its globally unique id. */
  readonly deleteStageByNodeId?: Maybe<DeleteStagePayload>,
  /** Deletes a single `Temperature` using a unique key. */
  readonly deleteTemperature?: Maybe<DeleteTemperaturePayload>,
  /** Deletes a single `Temperature` using its globally unique id. */
  readonly deleteTemperatureByNodeId?: Maybe<DeleteTemperaturePayload>,
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
  /** Updates a single `Stage` using a unique key and a patch. */
  readonly updateStage?: Maybe<UpdateStagePayload>,
  /** Updates a single `Stage` using its globally unique id and a patch. */
  readonly updateStageByNodeId?: Maybe<UpdateStagePayload>,
  /** Updates a single `Temperature` using a unique key and a patch. */
  readonly updateTemperature?: Maybe<UpdateTemperaturePayload>,
  /** Updates a single `Temperature` using its globally unique id and a patch. */
  readonly updateTemperatureByNodeId?: Maybe<UpdateTemperaturePayload>,
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
export type MutationCreateStageArgs = {
  input: CreateStageInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTemperatureArgs = {
  input: CreateTemperatureInput
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
export type MutationDeleteStageArgs = {
  input: DeleteStageInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStageByNodeIdArgs = {
  input: DeleteStageByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemperatureArgs = {
  input: DeleteTemperatureInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemperatureByNodeIdArgs = {
  input: DeleteTemperatureByNodeIdInput
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
export type MutationUpdateStageArgs = {
  input: UpdateStageInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStageByNodeIdArgs = {
  input: UpdateStageByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemperatureArgs = {
  input: UpdateTemperatureInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemperatureByNodeIdArgs = {
  input: UpdateTemperatureByNodeIdInput
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
  readonly stage?: Maybe<Stage>,
  /** Reads a single `Stage` using its globally unique `ID`. */
  readonly stageByNodeId?: Maybe<Stage>,
  /** Reads and enables pagination through a set of `Stage`. */
  readonly stages?: Maybe<StagesConnection>,
  readonly temperature?: Maybe<Temperature>,
  /** Reads a single `Temperature` using its globally unique `ID`. */
  readonly temperatureByNodeId?: Maybe<Temperature>,
  /** Reads and enables pagination through a set of `Temperature`. */
  readonly temperatures?: Maybe<TemperaturesConnection>,
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
export type QueryStageArgs = {
  id: Scalars['String']
};


/** The root query type which gives access points into the data universe. */
export type QueryStageByNodeIdArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryStagesArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<StageCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>
};


/** The root query type which gives access points into the data universe. */
export type QueryTemperatureArgs = {
  id: Scalars['String']
};


/** The root query type which gives access points into the data universe. */
export type QueryTemperatureByNodeIdArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryTemperaturesArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<TemperatureCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<TemperaturesOrderBy>>
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
  readonly date?: Maybe<Scalars['Date']>,
  readonly distanceMeters?: Maybe<Scalars['Int']>,
  readonly durationSeconds?: Maybe<Scalars['Int']>,
  readonly fromSpot: Scalars['String'],
  readonly guide: Scalars['String'],
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>,
  readonly hasBorder?: Maybe<Scalars['Boolean']>,
  readonly id: Scalars['String'],
  readonly name?: Maybe<Scalars['String']>,
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'],
  readonly owner: Scalars['String'],
  readonly pathUrl?: Maybe<Scalars['String']>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByToSpot?: Maybe<Spot>,
  readonly stage: Scalars['String'],
  /** Reads a single `Stage` that is related to this `Ride`. */
  readonly stageByStage?: Maybe<Stage>,
  readonly toSpot: Scalars['String'],
  /** Reads a single `User` that is related to this `Ride`. */
  readonly userByOwner?: Maybe<User>,
};

/** A condition to be used against `Ride` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RideCondition = {
  /** Checks for equality with the object’s `date` field. */
  readonly date?: Maybe<Scalars['Date']>,
  /** Checks for equality with the object’s `distanceMeters` field. */
  readonly distanceMeters?: Maybe<Scalars['Int']>,
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
  /** Checks for equality with the object’s `pathUrl` field. */
  readonly pathUrl?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `stage` field. */
  readonly stage?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `toSpot` field. */
  readonly toSpot?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `Ride` */
export type RideInput = {
  readonly date?: Maybe<Scalars['Date']>,
  readonly distanceMeters?: Maybe<Scalars['Int']>,
  readonly durationSeconds?: Maybe<Scalars['Int']>,
  readonly fromSpot: Scalars['String'],
  readonly guide: Scalars['String'],
  readonly id: Scalars['String'],
  readonly owner: Scalars['String'],
  readonly pathUrl?: Maybe<Scalars['String']>,
  readonly stage: Scalars['String'],
  readonly toSpot: Scalars['String'],
};

/** Represents an update to a `Ride`. Fields that are set will be updated. */
export type RidePatch = {
  readonly date?: Maybe<Scalars['Date']>,
  readonly distanceMeters?: Maybe<Scalars['Int']>,
  readonly durationSeconds?: Maybe<Scalars['Int']>,
  readonly fromSpot?: Maybe<Scalars['String']>,
  readonly guide?: Maybe<Scalars['String']>,
  readonly id?: Maybe<Scalars['String']>,
  readonly owner?: Maybe<Scalars['String']>,
  readonly pathUrl?: Maybe<Scalars['String']>,
  readonly stage?: Maybe<Scalars['String']>,
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
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  DistanceMetersAsc = 'DISTANCE_METERS_ASC',
  DistanceMetersDesc = 'DISTANCE_METERS_DESC',
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
  PathUrlAsc = 'PATH_URL_ASC',
  PathUrlDesc = 'PATH_URL_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StageAsc = 'STAGE_ASC',
  StageDesc = 'STAGE_DESC',
  ToSpotAsc = 'TO_SPOT_ASC',
  ToSpotDesc = 'TO_SPOT_DESC'
}

export type Spot = Node & {
  readonly country?: Maybe<Scalars['String']>,
  readonly created?: Maybe<Scalars['Date']>,
  readonly date?: Maybe<Scalars['Date']>,
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
  readonly stage?: Maybe<Scalars['String']>,
  /** Reads a single `Stage` that is related to this `Spot`. */
  readonly stageByStage?: Maybe<Stage>,
  /** Reads and enables pagination through a set of `Stage`. */
  readonly stagesByFromSpot: StagesConnection,
  /** Reads and enables pagination through a set of `Stage`. */
  readonly stagesByToSpot: StagesConnection,
  readonly temperature?: Maybe<Scalars['Float']>,
  readonly updated?: Maybe<Scalars['Date']>,
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


export type SpotStagesByFromSpotArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<StageCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>
};


export type SpotStagesByToSpotArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<StageCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>
};

/** A condition to be used against `Spot` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SpotCondition = {
  /** Checks for equality with the object’s `country` field. */
  readonly country?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `created` field. */
  readonly created?: Maybe<Scalars['Date']>,
  /** Checks for equality with the object’s `date` field. */
  readonly date?: Maybe<Scalars['Date']>,
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
  /** Checks for equality with the object’s `stage` field. */
  readonly stage?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `updated` field. */
  readonly updated?: Maybe<Scalars['Date']>,
};

/** An input for mutations affecting `Spot` */
export type SpotInput = {
  readonly country?: Maybe<Scalars['String']>,
  readonly created?: Maybe<Scalars['Date']>,
  readonly date?: Maybe<Scalars['Date']>,
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
  readonly stage?: Maybe<Scalars['String']>,
  readonly updated?: Maybe<Scalars['Date']>,
};

/** Represents an update to a `Spot`. Fields that are set will be updated. */
export type SpotPatch = {
  readonly country?: Maybe<Scalars['String']>,
  readonly created?: Maybe<Scalars['Date']>,
  readonly date?: Maybe<Scalars['Date']>,
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
  readonly stage?: Maybe<Scalars['String']>,
  readonly updated?: Maybe<Scalars['Date']>,
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
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
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
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StageAsc = 'STAGE_ASC',
  StageDesc = 'STAGE_DESC',
  UpdatedAsc = 'UPDATED_ASC',
  UpdatedDesc = 'UPDATED_DESC'
}

export type Stage = Node & {
  readonly created?: Maybe<Scalars['Date']>,
  readonly fromSpot: Scalars['String'],
  readonly guide: Scalars['String'],
  /** Reads a single `Guide` that is related to this `Stage`. */
  readonly guideByGuide?: Maybe<Guide>,
  readonly id: Scalars['String'],
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'],
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByStage: RidesConnection,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByToSpot?: Maybe<Spot>,
  /** Reads and enables pagination through a set of `Spot`. */
  readonly spotsByStage: SpotsConnection,
  readonly toSpot: Scalars['String'],
  readonly updated?: Maybe<Scalars['Date']>,
};


export type StageRidesByStageArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<RideCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>
};


export type StageSpotsByStageArgs = {
  after?: Maybe<Scalars['Cursor']>,
  before?: Maybe<Scalars['Cursor']>,
  condition?: Maybe<SpotCondition>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>
};

/** A condition to be used against `Stage` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type StageCondition = {
  /** Checks for equality with the object’s `created` field. */
  readonly created?: Maybe<Scalars['Date']>,
  /** Checks for equality with the object’s `fromSpot` field. */
  readonly fromSpot?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `guide` field. */
  readonly guide?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `toSpot` field. */
  readonly toSpot?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `updated` field. */
  readonly updated?: Maybe<Scalars['Date']>,
};

/** An input for mutations affecting `Stage` */
export type StageInput = {
  readonly created?: Maybe<Scalars['Date']>,
  readonly fromSpot: Scalars['String'],
  readonly guide: Scalars['String'],
  readonly id: Scalars['String'],
  readonly toSpot: Scalars['String'],
  readonly updated?: Maybe<Scalars['Date']>,
};

/** Represents an update to a `Stage`. Fields that are set will be updated. */
export type StagePatch = {
  readonly created?: Maybe<Scalars['Date']>,
  readonly fromSpot?: Maybe<Scalars['String']>,
  readonly guide?: Maybe<Scalars['String']>,
  readonly id?: Maybe<Scalars['String']>,
  readonly toSpot?: Maybe<Scalars['String']>,
  readonly updated?: Maybe<Scalars['Date']>,
};

/** A connection to a list of `Stage` values. */
export type StagesConnection = {
  /** A list of edges which contains the `Stage` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<StagesEdge>,
  /** A list of `Stage` objects. */
  readonly nodes: ReadonlyArray<Maybe<Stage>>,
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo,
  /** The count of *all* `Stage` you could get from the connection. */
  readonly totalCount: Scalars['Int'],
};

/** A `Stage` edge in the connection. */
export type StagesEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>,
  /** The `Stage` at the end of the edge. */
  readonly node?: Maybe<Stage>,
};

/** Methods to use when ordering `Stage`. */
export enum StagesOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
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
  ToSpotDesc = 'TO_SPOT_DESC',
  UpdatedAsc = 'UPDATED_ASC',
  UpdatedDesc = 'UPDATED_DESC'
}

export type Temperature = Node & {
  readonly country: Scalars['String'],
  readonly id: Scalars['String'],
  readonly month: Scalars['Int'],
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'],
  readonly temperature: Scalars['Float'],
};

/** 
 * A condition to be used against `Temperature` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TemperatureCondition = {
  /** Checks for equality with the object’s `country` field. */
  readonly country?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `month` field. */
  readonly month?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `temperature` field. */
  readonly temperature?: Maybe<Scalars['Float']>,
};

/** An input for mutations affecting `Temperature` */
export type TemperatureInput = {
  readonly country: Scalars['String'],
  readonly id: Scalars['String'],
  readonly month: Scalars['Int'],
  readonly temperature: Scalars['Float'],
};

/** Represents an update to a `Temperature`. Fields that are set will be updated. */
export type TemperaturePatch = {
  readonly country?: Maybe<Scalars['String']>,
  readonly id?: Maybe<Scalars['String']>,
  readonly month?: Maybe<Scalars['Int']>,
  readonly temperature?: Maybe<Scalars['Float']>,
};

/** A connection to a list of `Temperature` values. */
export type TemperaturesConnection = {
  /** A list of edges which contains the `Temperature` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<TemperaturesEdge>,
  /** A list of `Temperature` objects. */
  readonly nodes: ReadonlyArray<Maybe<Temperature>>,
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo,
  /** The count of *all* `Temperature` you could get from the connection. */
  readonly totalCount: Scalars['Int'],
};

/** A `Temperature` edge in the connection. */
export type TemperaturesEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>,
  /** The `Temperature` at the end of the edge. */
  readonly node?: Maybe<Temperature>,
};

/** Methods to use when ordering `Temperature`. */
export enum TemperaturesOrderBy {
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MonthAsc = 'MONTH_ASC',
  MonthDesc = 'MONTH_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TemperatureAsc = 'TEMPERATURE_ASC',
  TemperatureDesc = 'TEMPERATURE_DESC'
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
  /** Reads a single `Stage` that is related to this `Ride`. */
  readonly stageByStage?: Maybe<Stage>,
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
  /** Reads a single `Stage` that is related to this `Spot`. */
  readonly stageByStage?: Maybe<Stage>,
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>,
};


/** The output of our update `Spot` mutation. */
export type UpdateSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>
};

/** All input for the `updateStageByNodeId` mutation. */
export type UpdateStageByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Stage` to be updated. */
  readonly nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `Stage` being updated. */
  readonly patch: StagePatch,
};

/** All input for the `updateStage` mutation. */
export type UpdateStageInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly id: Scalars['String'],
  /** An object where the defined keys will be set on the `Stage` being updated. */
  readonly patch: StagePatch,
};

/** The output of our update `Stage` mutation. */
export type UpdateStagePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** Reads a single `Guide` that is related to this `Stage`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByToSpot?: Maybe<Spot>,
  /** The `Stage` that was updated by this mutation. */
  readonly stage?: Maybe<Stage>,
  /** An edge for our `Stage`. May be used by Relay 1. */
  readonly stageEdge?: Maybe<StagesEdge>,
};


/** The output of our update `Stage` mutation. */
export type UpdateStagePayloadStageEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>
};

/** All input for the `updateTemperatureByNodeId` mutation. */
export type UpdateTemperatureByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Temperature` to be updated. */
  readonly nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `Temperature` being updated. */
  readonly patch: TemperaturePatch,
};

/** All input for the `updateTemperature` mutation. */
export type UpdateTemperatureInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  readonly id: Scalars['String'],
  /** An object where the defined keys will be set on the `Temperature` being updated. */
  readonly patch: TemperaturePatch,
};

/** The output of our update `Temperature` mutation. */
export type UpdateTemperaturePayload = {
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  readonly clientMutationId?: Maybe<Scalars['String']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** The `Temperature` that was updated by this mutation. */
  readonly temperature?: Maybe<Temperature>,
  /** An edge for our `Temperature`. May be used by Relay 1. */
  readonly temperatureEdge?: Maybe<TemperaturesEdge>,
};


/** The output of our update `Temperature` mutation. */
export type UpdateTemperaturePayloadTemperatureEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<TemperaturesOrderBy>>
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
  Bound: ResolverTypeWrapper<Bound>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>,
  RideCondition: RideCondition,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  RidesOrderBy: RidesOrderBy,
  RidesConnection: ResolverTypeWrapper<RidesConnection>,
  RidesEdge: ResolverTypeWrapper<RidesEdge>,
  Ride: ResolverTypeWrapper<Ride>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Spot: ResolverTypeWrapper<Spot>,
  Stage: ResolverTypeWrapper<Stage>,
  SpotCondition: SpotCondition,
  SpotsOrderBy: SpotsOrderBy,
  SpotsConnection: ResolverTypeWrapper<SpotsConnection>,
  SpotsEdge: ResolverTypeWrapper<SpotsEdge>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  StageCondition: StageCondition,
  StagesOrderBy: StagesOrderBy,
  StagesConnection: ResolverTypeWrapper<StagesConnection>,
  StagesEdge: ResolverTypeWrapper<StagesEdge>,
  User: ResolverTypeWrapper<User>,
  GuideCondition: GuideCondition,
  GuidesOrderBy: GuidesOrderBy,
  GuidesConnection: ResolverTypeWrapper<GuidesConnection>,
  GuidesEdge: ResolverTypeWrapper<GuidesEdge>,
  Temperature: ResolverTypeWrapper<Temperature>,
  TemperatureCondition: TemperatureCondition,
  TemperaturesOrderBy: TemperaturesOrderBy,
  TemperaturesConnection: ResolverTypeWrapper<TemperaturesConnection>,
  TemperaturesEdge: ResolverTypeWrapper<TemperaturesEdge>,
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
  CreateStageInput: CreateStageInput,
  StageInput: StageInput,
  CreateStagePayload: ResolverTypeWrapper<CreateStagePayload>,
  CreateTemperatureInput: CreateTemperatureInput,
  TemperatureInput: TemperatureInput,
  CreateTemperaturePayload: ResolverTypeWrapper<CreateTemperaturePayload>,
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
  DeleteStageInput: DeleteStageInput,
  DeleteStagePayload: ResolverTypeWrapper<DeleteStagePayload>,
  DeleteStageByNodeIdInput: DeleteStageByNodeIdInput,
  DeleteTemperatureInput: DeleteTemperatureInput,
  DeleteTemperaturePayload: ResolverTypeWrapper<DeleteTemperaturePayload>,
  DeleteTemperatureByNodeIdInput: DeleteTemperatureByNodeIdInput,
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
  UpdateStageInput: UpdateStageInput,
  StagePatch: StagePatch,
  UpdateStagePayload: ResolverTypeWrapper<UpdateStagePayload>,
  UpdateStageByNodeIdInput: UpdateStageByNodeIdInput,
  UpdateTemperatureInput: UpdateTemperatureInput,
  TemperaturePatch: TemperaturePatch,
  UpdateTemperaturePayload: ResolverTypeWrapper<UpdateTemperaturePayload>,
  UpdateTemperatureByNodeIdInput: UpdateTemperatureByNodeIdInput,
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
  Bound: Bound,
  Float: Scalars['Float'],
  Int: Scalars['Int'],
  Cursor: Scalars['Cursor'],
  RideCondition: RideCondition,
  Date: Scalars['Date'],
  RidesOrderBy: RidesOrderBy,
  RidesConnection: RidesConnection,
  RidesEdge: RidesEdge,
  Ride: Ride,
  Boolean: Scalars['Boolean'],
  Spot: Spot,
  Stage: Stage,
  SpotCondition: SpotCondition,
  SpotsOrderBy: SpotsOrderBy,
  SpotsConnection: SpotsConnection,
  SpotsEdge: SpotsEdge,
  PageInfo: PageInfo,
  StageCondition: StageCondition,
  StagesOrderBy: StagesOrderBy,
  StagesConnection: StagesConnection,
  StagesEdge: StagesEdge,
  User: User,
  GuideCondition: GuideCondition,
  GuidesOrderBy: GuidesOrderBy,
  GuidesConnection: GuidesConnection,
  GuidesEdge: GuidesEdge,
  Temperature: Temperature,
  TemperatureCondition: TemperatureCondition,
  TemperaturesOrderBy: TemperaturesOrderBy,
  TemperaturesConnection: TemperaturesConnection,
  TemperaturesEdge: TemperaturesEdge,
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
  CreateStageInput: CreateStageInput,
  StageInput: StageInput,
  CreateStagePayload: CreateStagePayload,
  CreateTemperatureInput: CreateTemperatureInput,
  TemperatureInput: TemperatureInput,
  CreateTemperaturePayload: CreateTemperaturePayload,
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
  DeleteStageInput: DeleteStageInput,
  DeleteStagePayload: DeleteStagePayload,
  DeleteStageByNodeIdInput: DeleteStageByNodeIdInput,
  DeleteTemperatureInput: DeleteTemperatureInput,
  DeleteTemperaturePayload: DeleteTemperaturePayload,
  DeleteTemperatureByNodeIdInput: DeleteTemperatureByNodeIdInput,
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
  UpdateStageInput: UpdateStageInput,
  StagePatch: StagePatch,
  UpdateStagePayload: UpdateStagePayload,
  UpdateStageByNodeIdInput: UpdateStageByNodeIdInput,
  UpdateTemperatureInput: UpdateTemperatureInput,
  TemperaturePatch: TemperaturePatch,
  UpdateTemperaturePayload: UpdateTemperaturePayload,
  UpdateTemperatureByNodeIdInput: UpdateTemperatureByNodeIdInput,
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

export type BoundResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bound'] = ResolversParentTypes['Bound']> = {
  east?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  north?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  south?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  west?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
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
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateSpotPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateSpotPayload'] = ResolversParentTypes['CreateSpotPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  spot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotEdge?: Resolver<Maybe<ResolversTypes['SpotsEdge']>, ParentType, ContextType, RequireFields<CreateSpotPayloadSpotEdgeArgs, 'orderBy'>>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateStagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateStagePayload'] = ResolversParentTypes['CreateStagePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  stage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  stageEdge?: Resolver<Maybe<ResolversTypes['StagesEdge']>, ParentType, ContextType, RequireFields<CreateStagePayloadStageEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateTemperaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTemperaturePayload'] = ResolversParentTypes['CreateTemperaturePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  temperature?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType>,
  temperatureEdge?: Resolver<Maybe<ResolversTypes['TemperaturesEdge']>, ParentType, ContextType, RequireFields<CreateTemperaturePayloadTemperatureEdgeArgs, 'orderBy'>>,
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
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
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
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteStagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteStagePayload'] = ResolversParentTypes['DeleteStagePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  deletedStageNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  stage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  stageEdge?: Resolver<Maybe<ResolversTypes['StagesEdge']>, ParentType, ContextType, RequireFields<DeleteStagePayloadStageEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteTemperaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTemperaturePayload'] = ResolversParentTypes['DeleteTemperaturePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  deletedTemperatureNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  temperature?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType>,
  temperatureEdge?: Resolver<Maybe<ResolversTypes['TemperaturesEdge']>, ParentType, ContextType, RequireFields<DeleteTemperaturePayloadTemperatureEdgeArgs, 'orderBy'>>,
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
  bounds?: Resolver<Maybe<ResolversTypes['Bound']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  maxHoursPerRide?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  ridesByGuide?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<GuideRidesByGuideArgs, 'orderBy'>>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  spotsByGuide?: Resolver<ResolversTypes['SpotsConnection'], ParentType, ContextType, RequireFields<GuideSpotsByGuideArgs, 'orderBy'>>,
  stagesByGuide?: Resolver<ResolversTypes['StagesConnection'], ParentType, ContextType, RequireFields<GuideStagesByGuideArgs, 'orderBy'>>,
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
  createStage?: Resolver<Maybe<ResolversTypes['CreateStagePayload']>, ParentType, ContextType, RequireFields<MutationCreateStageArgs, 'input'>>,
  createTemperature?: Resolver<Maybe<ResolversTypes['CreateTemperaturePayload']>, ParentType, ContextType, RequireFields<MutationCreateTemperatureArgs, 'input'>>,
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>,
  deleteGuide?: Resolver<Maybe<ResolversTypes['DeleteGuidePayload']>, ParentType, ContextType, RequireFields<MutationDeleteGuideArgs, 'input'>>,
  deleteGuideByNodeId?: Resolver<Maybe<ResolversTypes['DeleteGuidePayload']>, ParentType, ContextType, RequireFields<MutationDeleteGuideByNodeIdArgs, 'input'>>,
  deleteRide?: Resolver<Maybe<ResolversTypes['DeleteRidePayload']>, ParentType, ContextType, RequireFields<MutationDeleteRideArgs, 'input'>>,
  deleteRideByNodeId?: Resolver<Maybe<ResolversTypes['DeleteRidePayload']>, ParentType, ContextType, RequireFields<MutationDeleteRideByNodeIdArgs, 'input'>>,
  deleteSpot?: Resolver<Maybe<ResolversTypes['DeleteSpotPayload']>, ParentType, ContextType, RequireFields<MutationDeleteSpotArgs, 'input'>>,
  deleteSpotByNodeId?: Resolver<Maybe<ResolversTypes['DeleteSpotPayload']>, ParentType, ContextType, RequireFields<MutationDeleteSpotByNodeIdArgs, 'input'>>,
  deleteStage?: Resolver<Maybe<ResolversTypes['DeleteStagePayload']>, ParentType, ContextType, RequireFields<MutationDeleteStageArgs, 'input'>>,
  deleteStageByNodeId?: Resolver<Maybe<ResolversTypes['DeleteStagePayload']>, ParentType, ContextType, RequireFields<MutationDeleteStageByNodeIdArgs, 'input'>>,
  deleteTemperature?: Resolver<Maybe<ResolversTypes['DeleteTemperaturePayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemperatureArgs, 'input'>>,
  deleteTemperatureByNodeId?: Resolver<Maybe<ResolversTypes['DeleteTemperaturePayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemperatureByNodeIdArgs, 'input'>>,
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
  updateStage?: Resolver<Maybe<ResolversTypes['UpdateStagePayload']>, ParentType, ContextType, RequireFields<MutationUpdateStageArgs, 'input'>>,
  updateStageByNodeId?: Resolver<Maybe<ResolversTypes['UpdateStagePayload']>, ParentType, ContextType, RequireFields<MutationUpdateStageByNodeIdArgs, 'input'>>,
  updateTemperature?: Resolver<Maybe<ResolversTypes['UpdateTemperaturePayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemperatureArgs, 'input'>>,
  updateTemperatureByNodeId?: Resolver<Maybe<ResolversTypes['UpdateTemperaturePayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemperatureByNodeIdArgs, 'input'>>,
  updateUser?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>,
  updateUserByNodeId?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserByNodeIdArgs, 'input'>>,
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Query' | 'Guide' | 'Ride' | 'Spot' | 'Stage' | 'User' | 'Temperature', ParentType, ContextType>,
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
  stage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType, RequireFields<QueryStageArgs, 'id'>>,
  stageByNodeId?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType, RequireFields<QueryStageByNodeIdArgs, 'nodeId'>>,
  stages?: Resolver<Maybe<ResolversTypes['StagesConnection']>, ParentType, ContextType, RequireFields<QueryStagesArgs, 'orderBy'>>,
  temperature?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType, RequireFields<QueryTemperatureArgs, 'id'>>,
  temperatureByNodeId?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType, RequireFields<QueryTemperatureByNodeIdArgs, 'nodeId'>>,
  temperatures?: Resolver<Maybe<ResolversTypes['TemperaturesConnection']>, ParentType, ContextType, RequireFields<QueryTemperaturesArgs, 'orderBy'>>,
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
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  distanceMeters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  durationSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  fromSpot?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  guide?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  hasBorder?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  pathUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  stage?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
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
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
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
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  stagesByFromSpot?: Resolver<ResolversTypes['StagesConnection'], ParentType, ContextType, RequireFields<SpotStagesByFromSpotArgs, 'orderBy'>>,
  stagesByToSpot?: Resolver<ResolversTypes['StagesConnection'], ParentType, ContextType, RequireFields<SpotStagesByToSpotArgs, 'orderBy'>>,
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  updated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
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

export type StageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stage'] = ResolversParentTypes['Stage']> = {
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  fromSpot?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  guide?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  ridesByStage?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<StageRidesByStageArgs, 'orderBy'>>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotsByStage?: Resolver<ResolversTypes['SpotsConnection'], ParentType, ContextType, RequireFields<StageSpotsByStageArgs, 'orderBy'>>,
  toSpot?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type StagesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StagesConnection'] = ResolversParentTypes['StagesConnection']> = {
  edges?: Resolver<ReadonlyArray<ResolversTypes['StagesEdge']>, ParentType, ContextType>,
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Stage']>>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type StagesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StagesEdge'] = ResolversParentTypes['StagesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TemperatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Temperature'] = ResolversParentTypes['Temperature']> = {
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  month?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  temperature?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TemperaturesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemperaturesConnection'] = ResolversParentTypes['TemperaturesConnection']> = {
  edges?: Resolver<ReadonlyArray<ResolversTypes['TemperaturesEdge']>, ParentType, ContextType>,
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Temperature']>>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TemperaturesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemperaturesEdge'] = ResolversParentTypes['TemperaturesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType>,
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
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateSpotPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateSpotPayload'] = ResolversParentTypes['UpdateSpotPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  spot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotEdge?: Resolver<Maybe<ResolversTypes['SpotsEdge']>, ParentType, ContextType, RequireFields<UpdateSpotPayloadSpotEdgeArgs, 'orderBy'>>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateStagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateStagePayload'] = ResolversParentTypes['UpdateStagePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  stage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  stageEdge?: Resolver<Maybe<ResolversTypes['StagesEdge']>, ParentType, ContextType, RequireFields<UpdateStagePayloadStageEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateTemperaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTemperaturePayload'] = ResolversParentTypes['UpdateTemperaturePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  temperature?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType>,
  temperatureEdge?: Resolver<Maybe<ResolversTypes['TemperaturesEdge']>, ParentType, ContextType, RequireFields<UpdateTemperaturePayloadTemperatureEdgeArgs, 'orderBy'>>,
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
  Bound?: BoundResolvers<ContextType>,
  CreateGuidePayload?: CreateGuidePayloadResolvers<ContextType>,
  CreateRidePayload?: CreateRidePayloadResolvers<ContextType>,
  CreateSpotPayload?: CreateSpotPayloadResolvers<ContextType>,
  CreateStagePayload?: CreateStagePayloadResolvers<ContextType>,
  CreateTemperaturePayload?: CreateTemperaturePayloadResolvers<ContextType>,
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>,
  Cursor?: GraphQLScalarType,
  Date?: GraphQLScalarType,
  DeleteGuidePayload?: DeleteGuidePayloadResolvers<ContextType>,
  DeleteRidePayload?: DeleteRidePayloadResolvers<ContextType>,
  DeleteSpotPayload?: DeleteSpotPayloadResolvers<ContextType>,
  DeleteStagePayload?: DeleteStagePayloadResolvers<ContextType>,
  DeleteTemperaturePayload?: DeleteTemperaturePayloadResolvers<ContextType>,
  DeleteUserPayload?: DeleteUserPayloadResolvers<ContextType>,
  Guide?: GuideResolvers<ContextType>,
  GuidesConnection?: GuidesConnectionResolvers<ContextType>,
  GuidesEdge?: GuidesEdgeResolvers<ContextType>,
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
  Stage?: StageResolvers<ContextType>,
  StagesConnection?: StagesConnectionResolvers<ContextType>,
  StagesEdge?: StagesEdgeResolvers<ContextType>,
  Temperature?: TemperatureResolvers<ContextType>,
  TemperaturesConnection?: TemperaturesConnectionResolvers<ContextType>,
  TemperaturesEdge?: TemperaturesEdgeResolvers<ContextType>,
  UpdateGuidePayload?: UpdateGuidePayloadResolvers<ContextType>,
  UpdateRidePayload?: UpdateRidePayloadResolvers<ContextType>,
  UpdateSpotPayload?: UpdateSpotPayloadResolvers<ContextType>,
  UpdateStagePayload?: UpdateStagePayloadResolvers<ContextType>,
  UpdateTemperaturePayload?: UpdateTemperaturePayloadResolvers<ContextType>,
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
