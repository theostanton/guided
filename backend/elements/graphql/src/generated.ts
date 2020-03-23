import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: string;
  /**
   * A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519)
   * which securely represents claims between two parties.
   */
  JwtToken: any;
};

/** All input for the `authenticate` mutation. */
export type AuthenticateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
};

/** The output of our `authenticate` mutation. */
export type AuthenticatePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly jwtToken?: Maybe<Scalars['JwtToken']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
};

export type Bound = {
  readonly north?: Maybe<Scalars['Float']>;
  readonly east?: Maybe<Scalars['Float']>;
  readonly south?: Maybe<Scalars['Float']>;
  readonly west?: Maybe<Scalars['Float']>;
};

export type Computation = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly id: Scalars['String'];
  readonly ended?: Maybe<Scalars['Datetime']>;
  readonly duration?: Maybe<Scalars['Int']>;
  readonly status: ComputationStatus;
  readonly stage?: Maybe<Scalars['String']>;
  readonly guide: Scalars['String'];
  readonly created: Scalars['Datetime'];
  readonly started?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Stage` that is related to this `Computation`. */
  readonly stageByStage?: Maybe<Stage>;
  /** Reads a single `Guide` that is related to this `Computation`. */
  readonly guideByGuide?: Maybe<Guide>;
};

/**
 * A condition to be used against `Computation` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ComputationCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `ended` field. */
  readonly ended?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `duration` field. */
  readonly duration?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `status` field. */
  readonly status?: Maybe<ComputationStatus>;
  /** Checks for equality with the object’s `stage` field. */
  readonly stage?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `guide` field. */
  readonly guide?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `created` field. */
  readonly created?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `started` field. */
  readonly started?: Maybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `Computation` */
export type ComputationInput = {
  readonly id: Scalars['String'];
  readonly ended?: Maybe<Scalars['Datetime']>;
  readonly duration?: Maybe<Scalars['Int']>;
  readonly status: ComputationStatus;
  readonly stage?: Maybe<Scalars['String']>;
  readonly guide: Scalars['String'];
  readonly created: Scalars['Datetime'];
  readonly started?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Computation`. Fields that are set will be updated. */
export type ComputationPatch = {
  readonly id?: Maybe<Scalars['String']>;
  readonly ended?: Maybe<Scalars['Datetime']>;
  readonly duration?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<ComputationStatus>;
  readonly stage?: Maybe<Scalars['String']>;
  readonly guide?: Maybe<Scalars['String']>;
  readonly created?: Maybe<Scalars['Datetime']>;
  readonly started?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `Computation` values. */
export type ComputationsConnection = {
  /** A list of `Computation` objects. */
  readonly nodes: ReadonlyArray<Maybe<Computation>>;
  /** A list of edges which contains the `Computation` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<ComputationsEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Computation` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A `Computation` edge in the connection. */
export type ComputationsEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `Computation` at the end of the edge. */
  readonly node?: Maybe<Computation>;
};

/** Methods to use when ordering `Computation`. */
export enum ComputationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  EndedAsc = 'ENDED_ASC',
  EndedDesc = 'ENDED_DESC',
  DurationAsc = 'DURATION_ASC',
  DurationDesc = 'DURATION_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  StageAsc = 'STAGE_ASC',
  StageDesc = 'STAGE_DESC',
  GuideAsc = 'GUIDE_ASC',
  GuideDesc = 'GUIDE_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  StartedAsc = 'STARTED_ASC',
  StartedDesc = 'STARTED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum ComputationStatus {
  Scheduled = 'SCHEDULED',
  Failed = 'FAILED',
  Computing = 'COMPUTING',
  Success = 'SUCCESS'
}

/** All input for the create `Computation` mutation. */
export type CreateComputationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Computation` to be created by this mutation. */
  readonly computation: ComputationInput;
};

/** The output of our create `Computation` mutation. */
export type CreateComputationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Computation` that was created by this mutation. */
  readonly computation?: Maybe<Computation>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Stage` that is related to this `Computation`. */
  readonly stageByStage?: Maybe<Stage>;
  /** Reads a single `Guide` that is related to this `Computation`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** An edge for our `Computation`. May be used by Relay 1. */
  readonly computationEdge?: Maybe<ComputationsEdge>;
};


/** The output of our create `Computation` mutation. */
export type CreateComputationPayloadComputationEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<ComputationsOrderBy>>;
};

/** All input for the create `Guide` mutation. */
export type CreateGuideInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Guide` to be created by this mutation. */
  readonly guide: GuideInput;
};

/** The output of our create `Guide` mutation. */
export type CreateGuidePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Guide` that was created by this mutation. */
  readonly guide?: Maybe<Guide>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Guide`. */
  readonly userByOwner?: Maybe<User>;
  /** An edge for our `Guide`. May be used by Relay 1. */
  readonly guideEdge?: Maybe<GuidesEdge>;
};


/** The output of our create `Guide` mutation. */
export type CreateGuidePayloadGuideEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>;
};

/** All input for the create `Ride` mutation. */
export type CreateRideInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Ride` to be created by this mutation. */
  readonly ride: RideInput;
};

/** The output of our create `Ride` mutation. */
export type CreateRidePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Ride` that was created by this mutation. */
  readonly ride?: Maybe<Ride>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `User` that is related to this `Ride`. */
  readonly userByOwner?: Maybe<User>;
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByFromSpot?: Maybe<Spot>;
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByToSpot?: Maybe<Spot>;
  /** Reads a single `Stage` that is related to this `Ride`. */
  readonly stageByStage?: Maybe<Stage>;
  /** An edge for our `Ride`. May be used by Relay 1. */
  readonly rideEdge?: Maybe<RidesEdge>;
};


/** The output of our create `Ride` mutation. */
export type CreateRidePayloadRideEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
};

/** All input for the create `Spot` mutation. */
export type CreateSpotInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Spot` to be created by this mutation. */
  readonly spot: SpotInput;
};

/** The output of our create `Spot` mutation. */
export type CreateSpotPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Spot` that was created by this mutation. */
  readonly spot?: Maybe<Spot>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Guide` that is related to this `Spot`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>;
  /** Reads a single `Stage` that is related to this `Spot`. */
  readonly stageByStage?: Maybe<Stage>;
  /** An edge for our `Spot`. May be used by Relay 1. */
  readonly spotEdge?: Maybe<SpotsEdge>;
};


/** The output of our create `Spot` mutation. */
export type CreateSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>;
};

/** All input for the create `Stage` mutation. */
export type CreateStageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Stage` to be created by this mutation. */
  readonly stage: StageInput;
};

/** The output of our create `Stage` mutation. */
export type CreateStagePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Stage` that was created by this mutation. */
  readonly stage?: Maybe<Stage>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Guide` that is related to this `Stage`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByFromSpot?: Maybe<Spot>;
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByToSpot?: Maybe<Spot>;
  /** An edge for our `Stage`. May be used by Relay 1. */
  readonly stageEdge?: Maybe<StagesEdge>;
};


/** The output of our create `Stage` mutation. */
export type CreateStagePayloadStageEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>;
};

/** All input for the create `Temperature` mutation. */
export type CreateTemperatureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Temperature` to be created by this mutation. */
  readonly temperature: TemperatureInput;
};

/** The output of our create `Temperature` mutation. */
export type CreateTemperaturePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Temperature` that was created by this mutation. */
  readonly temperature?: Maybe<Temperature>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** An edge for our `Temperature`. May be used by Relay 1. */
  readonly temperatureEdge?: Maybe<TemperaturesEdge>;
};


/** The output of our create `Temperature` mutation. */
export type CreateTemperaturePayloadTemperatureEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<TemperaturesOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  readonly user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was created by this mutation. */
  readonly user?: Maybe<User>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  readonly userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>;
};



/** All input for the `deleteComputationByNodeId` mutation. */
export type DeleteComputationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Computation` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteComputation` mutation. */
export type DeleteComputationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
};

/** The output of our delete `Computation` mutation. */
export type DeleteComputationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Computation` that was deleted by this mutation. */
  readonly computation?: Maybe<Computation>;
  readonly deletedComputationNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Stage` that is related to this `Computation`. */
  readonly stageByStage?: Maybe<Stage>;
  /** Reads a single `Guide` that is related to this `Computation`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** An edge for our `Computation`. May be used by Relay 1. */
  readonly computationEdge?: Maybe<ComputationsEdge>;
};


/** The output of our delete `Computation` mutation. */
export type DeleteComputationPayloadComputationEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<ComputationsOrderBy>>;
};

/** All input for the `deleteGuideByNodeId` mutation. */
export type DeleteGuideByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Guide` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteGuide` mutation. */
export type DeleteGuideInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
};

/** The output of our delete `Guide` mutation. */
export type DeleteGuidePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Guide` that was deleted by this mutation. */
  readonly guide?: Maybe<Guide>;
  readonly deletedGuideNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Guide`. */
  readonly userByOwner?: Maybe<User>;
  /** An edge for our `Guide`. May be used by Relay 1. */
  readonly guideEdge?: Maybe<GuidesEdge>;
};


/** The output of our delete `Guide` mutation. */
export type DeleteGuidePayloadGuideEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>;
};

/** All input for the `deleteRideByNodeId` mutation. */
export type DeleteRideByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Ride` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteRide` mutation. */
export type DeleteRideInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
};

/** The output of our delete `Ride` mutation. */
export type DeleteRidePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Ride` that was deleted by this mutation. */
  readonly ride?: Maybe<Ride>;
  readonly deletedRideNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `User` that is related to this `Ride`. */
  readonly userByOwner?: Maybe<User>;
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByFromSpot?: Maybe<Spot>;
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByToSpot?: Maybe<Spot>;
  /** Reads a single `Stage` that is related to this `Ride`. */
  readonly stageByStage?: Maybe<Stage>;
  /** An edge for our `Ride`. May be used by Relay 1. */
  readonly rideEdge?: Maybe<RidesEdge>;
};


/** The output of our delete `Ride` mutation. */
export type DeleteRidePayloadRideEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
};

/** All input for the `deleteSpotByNodeId` mutation. */
export type DeleteSpotByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Spot` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteSpot` mutation. */
export type DeleteSpotInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
};

/** The output of our delete `Spot` mutation. */
export type DeleteSpotPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Spot` that was deleted by this mutation. */
  readonly spot?: Maybe<Spot>;
  readonly deletedSpotNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Guide` that is related to this `Spot`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>;
  /** Reads a single `Stage` that is related to this `Spot`. */
  readonly stageByStage?: Maybe<Stage>;
  /** An edge for our `Spot`. May be used by Relay 1. */
  readonly spotEdge?: Maybe<SpotsEdge>;
};


/** The output of our delete `Spot` mutation. */
export type DeleteSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>;
};

/** All input for the `deleteStageByNodeId` mutation. */
export type DeleteStageByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Stage` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteStage` mutation. */
export type DeleteStageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
};

/** The output of our delete `Stage` mutation. */
export type DeleteStagePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Stage` that was deleted by this mutation. */
  readonly stage?: Maybe<Stage>;
  readonly deletedStageNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Guide` that is related to this `Stage`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByFromSpot?: Maybe<Spot>;
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByToSpot?: Maybe<Spot>;
  /** An edge for our `Stage`. May be used by Relay 1. */
  readonly stageEdge?: Maybe<StagesEdge>;
};


/** The output of our delete `Stage` mutation. */
export type DeleteStagePayloadStageEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>;
};

/** All input for the `deleteTemperatureByNodeId` mutation. */
export type DeleteTemperatureByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Temperature` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteTemperature` mutation. */
export type DeleteTemperatureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
};

/** The output of our delete `Temperature` mutation. */
export type DeleteTemperaturePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Temperature` that was deleted by this mutation. */
  readonly temperature?: Maybe<Temperature>;
  readonly deletedTemperatureNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** An edge for our `Temperature`. May be used by Relay 1. */
  readonly temperatureEdge?: Maybe<TemperaturesEdge>;
};


/** The output of our delete `Temperature` mutation. */
export type DeleteTemperaturePayloadTemperatureEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<TemperaturesOrderBy>>;
};

/** All input for the `deleteUserByNodeId` mutation. */
export type DeleteUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly username: Scalars['String'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was deleted by this mutation. */
  readonly user?: Maybe<User>;
  readonly deletedUserNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  readonly userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>;
};

export type Guide = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly id: Scalars['String'];
  readonly title: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly owner: Scalars['String'];
  readonly startDate?: Maybe<Scalars['String']>;
  readonly maxHoursPerRide: Scalars['Int'];
  readonly created: Scalars['Datetime'];
  readonly updated?: Maybe<Scalars['Datetime']>;
  /** Reads a single `User` that is related to this `Guide`. */
  readonly userByOwner?: Maybe<User>;
  /** Reads and enables pagination through a set of `Spot`. */
  readonly spotsByGuide: SpotsConnection;
  /** Reads and enables pagination through a set of `Stage`. */
  readonly stagesByGuide: StagesConnection;
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByGuide: RidesConnection;
  /** Reads and enables pagination through a set of `Computation`. */
  readonly computationsByGuide: ComputationsConnection;
  readonly bounds?: Maybe<Bound>;
};


export type GuideSpotsByGuideArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>;
  condition?: Maybe<SpotCondition>;
};


export type GuideStagesByGuideArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>;
  condition?: Maybe<StageCondition>;
};


export type GuideRidesByGuideArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
  condition?: Maybe<RideCondition>;
};


export type GuideComputationsByGuideArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<ComputationsOrderBy>>;
  condition?: Maybe<ComputationCondition>;
};

/** A condition to be used against `Guide` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GuideCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  readonly title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `slug` field. */
  readonly slug?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `owner` field. */
  readonly owner?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `startDate` field. */
  readonly startDate?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `maxHoursPerRide` field. */
  readonly maxHoursPerRide?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `created` field. */
  readonly created?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updated` field. */
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `Guide` */
export type GuideInput = {
  readonly id: Scalars['String'];
  readonly title: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly owner: Scalars['String'];
  readonly startDate?: Maybe<Scalars['String']>;
  readonly maxHoursPerRide?: Maybe<Scalars['Int']>;
  readonly created: Scalars['Datetime'];
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Guide`. Fields that are set will be updated. */
export type GuidePatch = {
  readonly id?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly startDate?: Maybe<Scalars['String']>;
  readonly maxHoursPerRide?: Maybe<Scalars['Int']>;
  readonly created?: Maybe<Scalars['Datetime']>;
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `Guide` values. */
export type GuidesConnection = {
  /** A list of `Guide` objects. */
  readonly nodes: ReadonlyArray<Maybe<Guide>>;
  /** A list of edges which contains the `Guide` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<GuidesEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Guide` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A `Guide` edge in the connection. */
export type GuidesEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `Guide` at the end of the edge. */
  readonly node?: Maybe<Guide>;
};

/** Methods to use when ordering `Guide`. */
export enum GuidesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  OwnerAsc = 'OWNER_ASC',
  OwnerDesc = 'OWNER_DESC',
  StartDateAsc = 'START_DATE_ASC',
  StartDateDesc = 'START_DATE_DESC',
  MaxHoursPerRideAsc = 'MAX_HOURS_PER_RIDE_ASC',
  MaxHoursPerRideDesc = 'MAX_HOURS_PER_RIDE_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  UpdatedAsc = 'UPDATED_ASC',
  UpdatedDesc = 'UPDATED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}


/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  /** Creates a single `Computation`. */
  readonly createComputation?: Maybe<CreateComputationPayload>;
  /** Creates a single `Guide`. */
  readonly createGuide?: Maybe<CreateGuidePayload>;
  /** Creates a single `Ride`. */
  readonly createRide?: Maybe<CreateRidePayload>;
  /** Creates a single `Spot`. */
  readonly createSpot?: Maybe<CreateSpotPayload>;
  /** Creates a single `Stage`. */
  readonly createStage?: Maybe<CreateStagePayload>;
  /** Creates a single `Temperature`. */
  readonly createTemperature?: Maybe<CreateTemperaturePayload>;
  /** Creates a single `User`. */
  readonly createUser?: Maybe<CreateUserPayload>;
  /** Updates a single `Computation` using its globally unique id and a patch. */
  readonly updateComputationByNodeId?: Maybe<UpdateComputationPayload>;
  /** Updates a single `Computation` using a unique key and a patch. */
  readonly updateComputation?: Maybe<UpdateComputationPayload>;
  /** Updates a single `Guide` using its globally unique id and a patch. */
  readonly updateGuideByNodeId?: Maybe<UpdateGuidePayload>;
  /** Updates a single `Guide` using a unique key and a patch. */
  readonly updateGuide?: Maybe<UpdateGuidePayload>;
  /** Updates a single `Ride` using its globally unique id and a patch. */
  readonly updateRideByNodeId?: Maybe<UpdateRidePayload>;
  /** Updates a single `Ride` using a unique key and a patch. */
  readonly updateRide?: Maybe<UpdateRidePayload>;
  /** Updates a single `Spot` using its globally unique id and a patch. */
  readonly updateSpotByNodeId?: Maybe<UpdateSpotPayload>;
  /** Updates a single `Spot` using a unique key and a patch. */
  readonly updateSpot?: Maybe<UpdateSpotPayload>;
  /** Updates a single `Stage` using its globally unique id and a patch. */
  readonly updateStageByNodeId?: Maybe<UpdateStagePayload>;
  /** Updates a single `Stage` using a unique key and a patch. */
  readonly updateStage?: Maybe<UpdateStagePayload>;
  /** Updates a single `Temperature` using its globally unique id and a patch. */
  readonly updateTemperatureByNodeId?: Maybe<UpdateTemperaturePayload>;
  /** Updates a single `Temperature` using a unique key and a patch. */
  readonly updateTemperature?: Maybe<UpdateTemperaturePayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  readonly updateUserByNodeId?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  readonly updateUser?: Maybe<UpdateUserPayload>;
  /** Deletes a single `Computation` using its globally unique id. */
  readonly deleteComputationByNodeId?: Maybe<DeleteComputationPayload>;
  /** Deletes a single `Computation` using a unique key. */
  readonly deleteComputation?: Maybe<DeleteComputationPayload>;
  /** Deletes a single `Guide` using its globally unique id. */
  readonly deleteGuideByNodeId?: Maybe<DeleteGuidePayload>;
  /** Deletes a single `Guide` using a unique key. */
  readonly deleteGuide?: Maybe<DeleteGuidePayload>;
  /** Deletes a single `Ride` using its globally unique id. */
  readonly deleteRideByNodeId?: Maybe<DeleteRidePayload>;
  /** Deletes a single `Ride` using a unique key. */
  readonly deleteRide?: Maybe<DeleteRidePayload>;
  /** Deletes a single `Spot` using its globally unique id. */
  readonly deleteSpotByNodeId?: Maybe<DeleteSpotPayload>;
  /** Deletes a single `Spot` using a unique key. */
  readonly deleteSpot?: Maybe<DeleteSpotPayload>;
  /** Deletes a single `Stage` using its globally unique id. */
  readonly deleteStageByNodeId?: Maybe<DeleteStagePayload>;
  /** Deletes a single `Stage` using a unique key. */
  readonly deleteStage?: Maybe<DeleteStagePayload>;
  /** Deletes a single `Temperature` using its globally unique id. */
  readonly deleteTemperatureByNodeId?: Maybe<DeleteTemperaturePayload>;
  /** Deletes a single `Temperature` using a unique key. */
  readonly deleteTemperature?: Maybe<DeleteTemperaturePayload>;
  /** Deletes a single `User` using its globally unique id. */
  readonly deleteUserByNodeId?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  readonly deleteUser?: Maybe<DeleteUserPayload>;
  /** Creates a JWT token that will securely identify a person and give them certain permissions. This token expires in 2 days. */
  readonly authenticate?: Maybe<AuthenticatePayload>;
  /** Registers a single user */
  readonly register?: Maybe<RegisterPayload>;
  readonly addSpotFromLatLng: Spot;
  readonly moveSpot: Spot;
  readonly removeSpot: Spot;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateComputationArgs = {
  input: CreateComputationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGuideArgs = {
  input: CreateGuideInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRideArgs = {
  input: CreateRideInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSpotArgs = {
  input: CreateSpotInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateStageArgs = {
  input: CreateStageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTemperatureArgs = {
  input: CreateTemperatureInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateComputationByNodeIdArgs = {
  input: UpdateComputationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateComputationArgs = {
  input: UpdateComputationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGuideByNodeIdArgs = {
  input: UpdateGuideByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGuideArgs = {
  input: UpdateGuideInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRideByNodeIdArgs = {
  input: UpdateRideByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRideArgs = {
  input: UpdateRideInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSpotByNodeIdArgs = {
  input: UpdateSpotByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSpotArgs = {
  input: UpdateSpotInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStageByNodeIdArgs = {
  input: UpdateStageByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStageArgs = {
  input: UpdateStageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemperatureByNodeIdArgs = {
  input: UpdateTemperatureByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemperatureArgs = {
  input: UpdateTemperatureInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByNodeIdArgs = {
  input: UpdateUserByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteComputationByNodeIdArgs = {
  input: DeleteComputationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteComputationArgs = {
  input: DeleteComputationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGuideByNodeIdArgs = {
  input: DeleteGuideByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGuideArgs = {
  input: DeleteGuideInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRideByNodeIdArgs = {
  input: DeleteRideByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRideArgs = {
  input: DeleteRideInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSpotByNodeIdArgs = {
  input: DeleteSpotByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSpotArgs = {
  input: DeleteSpotInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStageByNodeIdArgs = {
  input: DeleteStageByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStageArgs = {
  input: DeleteStageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemperatureByNodeIdArgs = {
  input: DeleteTemperatureByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemperatureArgs = {
  input: DeleteTemperatureInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByNodeIdArgs = {
  input: DeleteUserByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterArgs = {
  input: RegisterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAddSpotFromLatLngArgs = {
  guideId: Scalars['String'];
  lat: Scalars['Float'];
  long: Scalars['Float'];
  label?: Maybe<Scalars['String']>;
  nights: Scalars['Int'];
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationMoveSpotArgs = {
  spotId: Scalars['String'];
  lat: Scalars['Float'];
  long: Scalars['Float'];
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRemoveSpotArgs = {
  spotId: Scalars['String'];
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  readonly query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  readonly nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  readonly node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Computation`. */
  readonly computations?: Maybe<ComputationsConnection>;
  /** Reads and enables pagination through a set of `Guide`. */
  readonly guides?: Maybe<GuidesConnection>;
  /** Reads and enables pagination through a set of `Ride`. */
  readonly rides?: Maybe<RidesConnection>;
  /** Reads and enables pagination through a set of `Spot`. */
  readonly spots?: Maybe<SpotsConnection>;
  /** Reads and enables pagination through a set of `Stage`. */
  readonly stages?: Maybe<StagesConnection>;
  /** Reads and enables pagination through a set of `Temperature`. */
  readonly temperatures?: Maybe<TemperaturesConnection>;
  /** Reads and enables pagination through a set of `User`. */
  readonly users?: Maybe<UsersConnection>;
  readonly computation?: Maybe<Computation>;
  readonly guide?: Maybe<Guide>;
  readonly ride?: Maybe<Ride>;
  readonly spot?: Maybe<Spot>;
  readonly stage?: Maybe<Stage>;
  readonly temperature?: Maybe<Temperature>;
  readonly user?: Maybe<User>;
  readonly getCurrentUser?: Maybe<Scalars['JwtToken']>;
  /** Reads a single `Computation` using its globally unique `ID`. */
  readonly computationByNodeId?: Maybe<Computation>;
  /** Reads a single `Guide` using its globally unique `ID`. */
  readonly guideByNodeId?: Maybe<Guide>;
  /** Reads a single `Ride` using its globally unique `ID`. */
  readonly rideByNodeId?: Maybe<Ride>;
  /** Reads a single `Spot` using its globally unique `ID`. */
  readonly spotByNodeId?: Maybe<Spot>;
  /** Reads a single `Stage` using its globally unique `ID`. */
  readonly stageByNodeId?: Maybe<Stage>;
  /** Reads a single `Temperature` using its globally unique `ID`. */
  readonly temperatureByNodeId?: Maybe<Temperature>;
  /** Reads a single `User` using its globally unique `ID`. */
  readonly userByNodeId?: Maybe<User>;
  readonly appVersion: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryComputationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<ComputationsOrderBy>>;
  condition?: Maybe<ComputationCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGuidesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>;
  condition?: Maybe<GuideCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRidesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
  condition?: Maybe<RideCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySpotsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>;
  condition?: Maybe<SpotCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryStagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>;
  condition?: Maybe<StageCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTemperaturesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<TemperaturesOrderBy>>;
  condition?: Maybe<TemperatureCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>;
  condition?: Maybe<UserCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryComputationArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGuideArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRideArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySpotArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStageArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTemperatureArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  username: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryComputationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGuideByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRideByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySpotByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStageByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTemperatureByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** All input for the `register` mutation. */
export type RegisterInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly _username: Scalars['String'];
  readonly _email: Scalars['String'];
  readonly _password: Scalars['String'];
};

/** The output of our `register` mutation. */
export type RegisterPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly user?: Maybe<User>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  readonly userEdge?: Maybe<UsersEdge>;
};


/** The output of our `register` mutation. */
export type RegisterPayloadUserEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>;
};

export type Ride = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly id: Scalars['String'];
  readonly guide: Scalars['String'];
  readonly owner: Scalars['String'];
  readonly fromSpot: Scalars['String'];
  readonly toSpot: Scalars['String'];
  readonly pathUrl?: Maybe<Scalars['String']>;
  readonly durationSeconds?: Maybe<Scalars['Int']>;
  readonly distanceMeters?: Maybe<Scalars['Int']>;
  readonly date?: Maybe<Scalars['String']>;
  readonly stage: Scalars['String'];
  readonly position?: Maybe<Scalars['String']>;
  readonly status: RideStatus;
  readonly created: Scalars['Datetime'];
  readonly updated?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `User` that is related to this `Ride`. */
  readonly userByOwner?: Maybe<User>;
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByFromSpot?: Maybe<Spot>;
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByToSpot?: Maybe<Spot>;
  /** Reads a single `Stage` that is related to this `Ride`. */
  readonly stageByStage?: Maybe<Stage>;
  readonly hasBorder?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** A condition to be used against `Ride` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RideCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `guide` field. */
  readonly guide?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `owner` field. */
  readonly owner?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `fromSpot` field. */
  readonly fromSpot?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `toSpot` field. */
  readonly toSpot?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `pathUrl` field. */
  readonly pathUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `durationSeconds` field. */
  readonly durationSeconds?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `distanceMeters` field. */
  readonly distanceMeters?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `date` field. */
  readonly date?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `stage` field. */
  readonly stage?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `position` field. */
  readonly position?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `status` field. */
  readonly status?: Maybe<RideStatus>;
  /** Checks for equality with the object’s `created` field. */
  readonly created?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updated` field. */
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `Ride` */
export type RideInput = {
  readonly id: Scalars['String'];
  readonly guide: Scalars['String'];
  readonly owner: Scalars['String'];
  readonly fromSpot: Scalars['String'];
  readonly toSpot: Scalars['String'];
  readonly pathUrl?: Maybe<Scalars['String']>;
  readonly durationSeconds?: Maybe<Scalars['Int']>;
  readonly distanceMeters?: Maybe<Scalars['Int']>;
  readonly date?: Maybe<Scalars['String']>;
  readonly stage: Scalars['String'];
  readonly position?: Maybe<Scalars['String']>;
  readonly status: RideStatus;
  readonly created: Scalars['Datetime'];
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Ride`. Fields that are set will be updated. */
export type RidePatch = {
  readonly id?: Maybe<Scalars['String']>;
  readonly guide?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly fromSpot?: Maybe<Scalars['String']>;
  readonly toSpot?: Maybe<Scalars['String']>;
  readonly pathUrl?: Maybe<Scalars['String']>;
  readonly durationSeconds?: Maybe<Scalars['Int']>;
  readonly distanceMeters?: Maybe<Scalars['Int']>;
  readonly date?: Maybe<Scalars['String']>;
  readonly stage?: Maybe<Scalars['String']>;
  readonly position?: Maybe<Scalars['String']>;
  readonly status?: Maybe<RideStatus>;
  readonly created?: Maybe<Scalars['Datetime']>;
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `Ride` values. */
export type RidesConnection = {
  /** A list of `Ride` objects. */
  readonly nodes: ReadonlyArray<Maybe<Ride>>;
  /** A list of edges which contains the `Ride` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<RidesEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Ride` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A `Ride` edge in the connection. */
export type RidesEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `Ride` at the end of the edge. */
  readonly node?: Maybe<Ride>;
};

/** Methods to use when ordering `Ride`. */
export enum RidesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  GuideAsc = 'GUIDE_ASC',
  GuideDesc = 'GUIDE_DESC',
  OwnerAsc = 'OWNER_ASC',
  OwnerDesc = 'OWNER_DESC',
  FromSpotAsc = 'FROM_SPOT_ASC',
  FromSpotDesc = 'FROM_SPOT_DESC',
  ToSpotAsc = 'TO_SPOT_ASC',
  ToSpotDesc = 'TO_SPOT_DESC',
  PathUrlAsc = 'PATH_URL_ASC',
  PathUrlDesc = 'PATH_URL_DESC',
  DurationSecondsAsc = 'DURATION_SECONDS_ASC',
  DurationSecondsDesc = 'DURATION_SECONDS_DESC',
  DistanceMetersAsc = 'DISTANCE_METERS_ASC',
  DistanceMetersDesc = 'DISTANCE_METERS_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  StageAsc = 'STAGE_ASC',
  StageDesc = 'STAGE_DESC',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  UpdatedAsc = 'UPDATED_ASC',
  UpdatedDesc = 'UPDATED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum RideStatus {
  Complete = 'COMPLETE',
  Ready = 'READY',
  Stale = 'STALE'
}

export type Spot = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly id: Scalars['String'];
  readonly label?: Maybe<Scalars['String']>;
  readonly guide: Scalars['String'];
  readonly owner: Scalars['String'];
  readonly nights?: Maybe<Scalars['Int']>;
  readonly locked: Scalars['Boolean'];
  readonly lat: Scalars['Float'];
  readonly long: Scalars['Float'];
  readonly position?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly date?: Maybe<Scalars['String']>;
  readonly created: Scalars['Datetime'];
  readonly updated?: Maybe<Scalars['Datetime']>;
  readonly stage?: Maybe<Scalars['String']>;
  /** Reads a single `Guide` that is related to this `Spot`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>;
  /** Reads a single `Stage` that is related to this `Spot`. */
  readonly stageByStage?: Maybe<Stage>;
  /** Reads and enables pagination through a set of `Stage`. */
  readonly stagesByFromSpot: StagesConnection;
  /** Reads and enables pagination through a set of `Stage`. */
  readonly stagesByToSpot: StagesConnection;
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByFromSpot: RidesConnection;
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByToSpot: RidesConnection;
  readonly temperature?: Maybe<Scalars['Float']>;
};


export type SpotStagesByFromSpotArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>;
  condition?: Maybe<StageCondition>;
};


export type SpotStagesByToSpotArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>;
  condition?: Maybe<StageCondition>;
};


export type SpotRidesByFromSpotArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
  condition?: Maybe<RideCondition>;
};


export type SpotRidesByToSpotArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
  condition?: Maybe<RideCondition>;
};

/** A condition to be used against `Spot` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SpotCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `label` field. */
  readonly label?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `guide` field. */
  readonly guide?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `owner` field. */
  readonly owner?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `nights` field. */
  readonly nights?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `locked` field. */
  readonly locked?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `lat` field. */
  readonly lat?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `long` field. */
  readonly long?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `position` field. */
  readonly position?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `location` field. */
  readonly location?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  readonly country?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `date` field. */
  readonly date?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `created` field. */
  readonly created?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updated` field. */
  readonly updated?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `stage` field. */
  readonly stage?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Spot` */
export type SpotInput = {
  readonly id: Scalars['String'];
  readonly label?: Maybe<Scalars['String']>;
  readonly guide: Scalars['String'];
  readonly owner: Scalars['String'];
  readonly nights?: Maybe<Scalars['Int']>;
  readonly locked: Scalars['Boolean'];
  readonly lat: Scalars['Float'];
  readonly long: Scalars['Float'];
  readonly position?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly date?: Maybe<Scalars['String']>;
  readonly created: Scalars['Datetime'];
  readonly updated?: Maybe<Scalars['Datetime']>;
  readonly stage?: Maybe<Scalars['String']>;
};

/** Represents an update to a `Spot`. Fields that are set will be updated. */
export type SpotPatch = {
  readonly id?: Maybe<Scalars['String']>;
  readonly label?: Maybe<Scalars['String']>;
  readonly guide?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly nights?: Maybe<Scalars['Int']>;
  readonly locked?: Maybe<Scalars['Boolean']>;
  readonly lat?: Maybe<Scalars['Float']>;
  readonly long?: Maybe<Scalars['Float']>;
  readonly position?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly date?: Maybe<Scalars['String']>;
  readonly created?: Maybe<Scalars['Datetime']>;
  readonly updated?: Maybe<Scalars['Datetime']>;
  readonly stage?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Spot` values. */
export type SpotsConnection = {
  /** A list of `Spot` objects. */
  readonly nodes: ReadonlyArray<Maybe<Spot>>;
  /** A list of edges which contains the `Spot` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<SpotsEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Spot` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A `Spot` edge in the connection. */
export type SpotsEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `Spot` at the end of the edge. */
  readonly node?: Maybe<Spot>;
};

/** Methods to use when ordering `Spot`. */
export enum SpotsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LabelAsc = 'LABEL_ASC',
  LabelDesc = 'LABEL_DESC',
  GuideAsc = 'GUIDE_ASC',
  GuideDesc = 'GUIDE_DESC',
  OwnerAsc = 'OWNER_ASC',
  OwnerDesc = 'OWNER_DESC',
  NightsAsc = 'NIGHTS_ASC',
  NightsDesc = 'NIGHTS_DESC',
  LockedAsc = 'LOCKED_ASC',
  LockedDesc = 'LOCKED_DESC',
  LatAsc = 'LAT_ASC',
  LatDesc = 'LAT_DESC',
  LongAsc = 'LONG_ASC',
  LongDesc = 'LONG_DESC',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  LocationAsc = 'LOCATION_ASC',
  LocationDesc = 'LOCATION_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  UpdatedAsc = 'UPDATED_ASC',
  UpdatedDesc = 'UPDATED_DESC',
  StageAsc = 'STAGE_ASC',
  StageDesc = 'STAGE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Stage = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly id: Scalars['String'];
  readonly guide: Scalars['String'];
  readonly fromSpot: Scalars['String'];
  readonly toSpot: Scalars['String'];
  readonly created: Scalars['Datetime'];
  readonly updated?: Maybe<Scalars['Datetime']>;
  readonly status: StageStatus;
  readonly position?: Maybe<Scalars['Int']>;
  /** Reads a single `Guide` that is related to this `Stage`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByFromSpot?: Maybe<Spot>;
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByToSpot?: Maybe<Spot>;
  /** Reads and enables pagination through a set of `Spot`. */
  readonly spotsByStage: SpotsConnection;
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByStage: RidesConnection;
  /** Reads and enables pagination through a set of `Computation`. */
  readonly computationsByStage: ComputationsConnection;
};


export type StageSpotsByStageArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>;
  condition?: Maybe<SpotCondition>;
};


export type StageRidesByStageArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
  condition?: Maybe<RideCondition>;
};


export type StageComputationsByStageArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<ComputationsOrderBy>>;
  condition?: Maybe<ComputationCondition>;
};

/** A condition to be used against `Stage` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type StageCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `guide` field. */
  readonly guide?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `fromSpot` field. */
  readonly fromSpot?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `toSpot` field. */
  readonly toSpot?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `created` field. */
  readonly created?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updated` field. */
  readonly updated?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `status` field. */
  readonly status?: Maybe<StageStatus>;
  /** Checks for equality with the object’s `position` field. */
  readonly position?: Maybe<Scalars['Int']>;
};

/** An input for mutations affecting `Stage` */
export type StageInput = {
  readonly id: Scalars['String'];
  readonly guide: Scalars['String'];
  readonly fromSpot: Scalars['String'];
  readonly toSpot: Scalars['String'];
  readonly created: Scalars['Datetime'];
  readonly updated?: Maybe<Scalars['Datetime']>;
  readonly status: StageStatus;
  readonly position?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Stage`. Fields that are set will be updated. */
export type StagePatch = {
  readonly id?: Maybe<Scalars['String']>;
  readonly guide?: Maybe<Scalars['String']>;
  readonly fromSpot?: Maybe<Scalars['String']>;
  readonly toSpot?: Maybe<Scalars['String']>;
  readonly created?: Maybe<Scalars['Datetime']>;
  readonly updated?: Maybe<Scalars['Datetime']>;
  readonly status?: Maybe<StageStatus>;
  readonly position?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Stage` values. */
export type StagesConnection = {
  /** A list of `Stage` objects. */
  readonly nodes: ReadonlyArray<Maybe<Stage>>;
  /** A list of edges which contains the `Stage` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<StagesEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Stage` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A `Stage` edge in the connection. */
export type StagesEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `Stage` at the end of the edge. */
  readonly node?: Maybe<Stage>;
};

/** Methods to use when ordering `Stage`. */
export enum StagesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  GuideAsc = 'GUIDE_ASC',
  GuideDesc = 'GUIDE_DESC',
  FromSpotAsc = 'FROM_SPOT_ASC',
  FromSpotDesc = 'FROM_SPOT_DESC',
  ToSpotAsc = 'TO_SPOT_ASC',
  ToSpotDesc = 'TO_SPOT_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  UpdatedAsc = 'UPDATED_ASC',
  UpdatedDesc = 'UPDATED_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum StageStatus {
  Complete = 'COMPLETE',
  Ready = 'READY',
  Computing = 'COMPUTING',
  Stale = 'STALE'
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type Subscription = {
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form. (live)
   */
  readonly query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. (live) */
  readonly nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. (live) */
  readonly node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Computation`. (live) */
  readonly computations?: Maybe<ComputationsConnection>;
  /** Reads and enables pagination through a set of `Guide`. (live) */
  readonly guides?: Maybe<GuidesConnection>;
  /** Reads and enables pagination through a set of `Ride`. (live) */
  readonly rides?: Maybe<RidesConnection>;
  /** Reads and enables pagination through a set of `Spot`. (live) */
  readonly spots?: Maybe<SpotsConnection>;
  /** Reads and enables pagination through a set of `Stage`. (live) */
  readonly stages?: Maybe<StagesConnection>;
  /** Reads and enables pagination through a set of `Temperature`. (live) */
  readonly temperatures?: Maybe<TemperaturesConnection>;
  /** Reads and enables pagination through a set of `User`. (live) */
  readonly users?: Maybe<UsersConnection>;
  /**  (live) */
  readonly computation?: Maybe<Computation>;
  /**  (live) */
  readonly guide?: Maybe<Guide>;
  /**  (live) */
  readonly ride?: Maybe<Ride>;
  /**  (live) */
  readonly spot?: Maybe<Spot>;
  /**  (live) */
  readonly stage?: Maybe<Stage>;
  /**  (live) */
  readonly temperature?: Maybe<Temperature>;
  /**  (live) */
  readonly user?: Maybe<User>;
  /**  (live) */
  readonly getCurrentUser?: Maybe<Scalars['JwtToken']>;
  /** Reads a single `Computation` using its globally unique `ID`. (live) */
  readonly computationByNodeId?: Maybe<Computation>;
  /** Reads a single `Guide` using its globally unique `ID`. (live) */
  readonly guideByNodeId?: Maybe<Guide>;
  /** Reads a single `Ride` using its globally unique `ID`. (live) */
  readonly rideByNodeId?: Maybe<Ride>;
  /** Reads a single `Spot` using its globally unique `ID`. (live) */
  readonly spotByNodeId?: Maybe<Spot>;
  /** Reads a single `Stage` using its globally unique `ID`. (live) */
  readonly stageByNodeId?: Maybe<Stage>;
  /** Reads a single `Temperature` using its globally unique `ID`. (live) */
  readonly temperatureByNodeId?: Maybe<Temperature>;
  /** Reads a single `User` using its globally unique `ID`. (live) */
  readonly userByNodeId?: Maybe<User>;
  /**  (live) */
  readonly appVersion: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionNodeArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionComputationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<ComputationsOrderBy>>;
  condition?: Maybe<ComputationCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionGuidesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>;
  condition?: Maybe<GuideCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionRidesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
  condition?: Maybe<RideCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionSpotsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>;
  condition?: Maybe<SpotCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionStagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>;
  condition?: Maybe<StageCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionTemperaturesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<TemperaturesOrderBy>>;
  condition?: Maybe<TemperatureCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>;
  condition?: Maybe<UserCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionComputationArgs = {
  id: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionGuideArgs = {
  id: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionRideArgs = {
  id: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionSpotArgs = {
  id: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionStageArgs = {
  id: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionTemperatureArgs = {
  id: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUserArgs = {
  username: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionComputationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionGuideByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionRideByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionSpotByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionStageByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionTemperatureByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUserByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

export type Temperature = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly id: Scalars['String'];
  readonly country: Scalars['String'];
  readonly month: Scalars['Int'];
  readonly temperature: Scalars['Float'];
  readonly created: Scalars['Datetime'];
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/**
 * A condition to be used against `Temperature` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TemperatureCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  readonly country?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `month` field. */
  readonly month?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `temperature` field. */
  readonly temperature?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `created` field. */
  readonly created?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updated` field. */
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `Temperature` */
export type TemperatureInput = {
  readonly id: Scalars['String'];
  readonly country: Scalars['String'];
  readonly month: Scalars['Int'];
  readonly temperature: Scalars['Float'];
  readonly created: Scalars['Datetime'];
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Temperature`. Fields that are set will be updated. */
export type TemperaturePatch = {
  readonly id?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly month?: Maybe<Scalars['Int']>;
  readonly temperature?: Maybe<Scalars['Float']>;
  readonly created?: Maybe<Scalars['Datetime']>;
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `Temperature` values. */
export type TemperaturesConnection = {
  /** A list of `Temperature` objects. */
  readonly nodes: ReadonlyArray<Maybe<Temperature>>;
  /** A list of edges which contains the `Temperature` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<TemperaturesEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Temperature` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A `Temperature` edge in the connection. */
export type TemperaturesEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `Temperature` at the end of the edge. */
  readonly node?: Maybe<Temperature>;
};

/** Methods to use when ordering `Temperature`. */
export enum TemperaturesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  MonthAsc = 'MONTH_ASC',
  MonthDesc = 'MONTH_DESC',
  TemperatureAsc = 'TEMPERATURE_ASC',
  TemperatureDesc = 'TEMPERATURE_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  UpdatedAsc = 'UPDATED_ASC',
  UpdatedDesc = 'UPDATED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updateComputationByNodeId` mutation. */
export type UpdateComputationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Computation` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Computation` being updated. */
  readonly patch: ComputationPatch;
};

/** All input for the `updateComputation` mutation. */
export type UpdateComputationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Computation` being updated. */
  readonly patch: ComputationPatch;
  readonly id: Scalars['String'];
};

/** The output of our update `Computation` mutation. */
export type UpdateComputationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Computation` that was updated by this mutation. */
  readonly computation?: Maybe<Computation>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Stage` that is related to this `Computation`. */
  readonly stageByStage?: Maybe<Stage>;
  /** Reads a single `Guide` that is related to this `Computation`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** An edge for our `Computation`. May be used by Relay 1. */
  readonly computationEdge?: Maybe<ComputationsEdge>;
};


/** The output of our update `Computation` mutation. */
export type UpdateComputationPayloadComputationEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<ComputationsOrderBy>>;
};

/** All input for the `updateGuideByNodeId` mutation. */
export type UpdateGuideByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Guide` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Guide` being updated. */
  readonly patch: GuidePatch;
};

/** All input for the `updateGuide` mutation. */
export type UpdateGuideInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Guide` being updated. */
  readonly patch: GuidePatch;
  readonly id: Scalars['String'];
};

/** The output of our update `Guide` mutation. */
export type UpdateGuidePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Guide` that was updated by this mutation. */
  readonly guide?: Maybe<Guide>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Guide`. */
  readonly userByOwner?: Maybe<User>;
  /** An edge for our `Guide`. May be used by Relay 1. */
  readonly guideEdge?: Maybe<GuidesEdge>;
};


/** The output of our update `Guide` mutation. */
export type UpdateGuidePayloadGuideEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>;
};

/** All input for the `updateRideByNodeId` mutation. */
export type UpdateRideByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Ride` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Ride` being updated. */
  readonly patch: RidePatch;
};

/** All input for the `updateRide` mutation. */
export type UpdateRideInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Ride` being updated. */
  readonly patch: RidePatch;
  readonly id: Scalars['String'];
};

/** The output of our update `Ride` mutation. */
export type UpdateRidePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Ride` that was updated by this mutation. */
  readonly ride?: Maybe<Ride>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `User` that is related to this `Ride`. */
  readonly userByOwner?: Maybe<User>;
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByFromSpot?: Maybe<Spot>;
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByToSpot?: Maybe<Spot>;
  /** Reads a single `Stage` that is related to this `Ride`. */
  readonly stageByStage?: Maybe<Stage>;
  /** An edge for our `Ride`. May be used by Relay 1. */
  readonly rideEdge?: Maybe<RidesEdge>;
};


/** The output of our update `Ride` mutation. */
export type UpdateRidePayloadRideEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
};

/** All input for the `updateSpotByNodeId` mutation. */
export type UpdateSpotByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Spot` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Spot` being updated. */
  readonly patch: SpotPatch;
};

/** All input for the `updateSpot` mutation. */
export type UpdateSpotInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Spot` being updated. */
  readonly patch: SpotPatch;
  readonly id: Scalars['String'];
};

/** The output of our update `Spot` mutation. */
export type UpdateSpotPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Spot` that was updated by this mutation. */
  readonly spot?: Maybe<Spot>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Guide` that is related to this `Spot`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>;
  /** Reads a single `Stage` that is related to this `Spot`. */
  readonly stageByStage?: Maybe<Stage>;
  /** An edge for our `Spot`. May be used by Relay 1. */
  readonly spotEdge?: Maybe<SpotsEdge>;
};


/** The output of our update `Spot` mutation. */
export type UpdateSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>;
};

/** All input for the `updateStageByNodeId` mutation. */
export type UpdateStageByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Stage` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Stage` being updated. */
  readonly patch: StagePatch;
};

/** All input for the `updateStage` mutation. */
export type UpdateStageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Stage` being updated. */
  readonly patch: StagePatch;
  readonly id: Scalars['String'];
};

/** The output of our update `Stage` mutation. */
export type UpdateStagePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Stage` that was updated by this mutation. */
  readonly stage?: Maybe<Stage>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Guide` that is related to this `Stage`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByFromSpot?: Maybe<Spot>;
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByToSpot?: Maybe<Spot>;
  /** An edge for our `Stage`. May be used by Relay 1. */
  readonly stageEdge?: Maybe<StagesEdge>;
};


/** The output of our update `Stage` mutation. */
export type UpdateStagePayloadStageEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>;
};

/** All input for the `updateTemperatureByNodeId` mutation. */
export type UpdateTemperatureByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Temperature` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Temperature` being updated. */
  readonly patch: TemperaturePatch;
};

/** All input for the `updateTemperature` mutation. */
export type UpdateTemperatureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Temperature` being updated. */
  readonly patch: TemperaturePatch;
  readonly id: Scalars['String'];
};

/** The output of our update `Temperature` mutation. */
export type UpdateTemperaturePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Temperature` that was updated by this mutation. */
  readonly temperature?: Maybe<Temperature>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** An edge for our `Temperature`. May be used by Relay 1. */
  readonly temperatureEdge?: Maybe<TemperaturesEdge>;
};


/** The output of our update `Temperature` mutation. */
export type UpdateTemperaturePayloadTemperatureEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<TemperaturesOrderBy>>;
};

/** All input for the `updateUserByNodeId` mutation. */
export type UpdateUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  readonly patch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `User` being updated. */
  readonly patch: UserPatch;
  readonly username: Scalars['String'];
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was updated by this mutation. */
  readonly user?: Maybe<User>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  readonly userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>;
};

export type User = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly username: Scalars['String'];
  readonly email: Scalars['String'];
  readonly passwordHash: Scalars['String'];
  readonly created: Scalars['Datetime'];
  readonly updated?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `Guide`. */
  readonly guidesByOwner: GuidesConnection;
  /** Reads and enables pagination through a set of `Spot`. */
  readonly spotsByOwner: SpotsConnection;
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByOwner: RidesConnection;
};


export type UserGuidesByOwnerArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>;
  condition?: Maybe<GuideCondition>;
};


export type UserSpotsByOwnerArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>;
  condition?: Maybe<SpotCondition>;
};


export type UserRidesByOwnerArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
  condition?: Maybe<RideCondition>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `username` field. */
  readonly username?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  readonly email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `passwordHash` field. */
  readonly passwordHash?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `created` field. */
  readonly created?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updated` field. */
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  readonly username: Scalars['String'];
  readonly email: Scalars['String'];
  readonly passwordHash: Scalars['String'];
  readonly created: Scalars['Datetime'];
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  readonly username?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly passwordHash?: Maybe<Scalars['String']>;
  readonly created?: Maybe<Scalars['Datetime']>;
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  /** A list of `User` objects. */
  readonly nodes: ReadonlyArray<Maybe<User>>;
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<UsersEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  readonly node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  Natural = 'NATURAL',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PasswordHashAsc = 'PASSWORD_HASH_ASC',
  PasswordHashDesc = 'PASSWORD_HASH_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  UpdatedAsc = 'UPDATED_ASC',
  UpdatedDesc = 'UPDATED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

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
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  Node: ResolversTypes['Query'] | ResolversTypes['Computation'] | ResolversTypes['Stage'] | ResolversTypes['Guide'] | ResolversTypes['User'] | ResolversTypes['Spot'] | ResolversTypes['Ride'] | ResolversTypes['Temperature'],
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>,
  ComputationsOrderBy: ComputationsOrderBy,
  ComputationCondition: ComputationCondition,
  String: ResolverTypeWrapper<Scalars['String']>,
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>,
  ComputationStatus: ComputationStatus,
  ComputationsConnection: ResolverTypeWrapper<ComputationsConnection>,
  Computation: ResolverTypeWrapper<Computation>,
  Stage: ResolverTypeWrapper<Stage>,
  StageStatus: StageStatus,
  Guide: ResolverTypeWrapper<Guide>,
  User: ResolverTypeWrapper<User>,
  GuidesOrderBy: GuidesOrderBy,
  GuideCondition: GuideCondition,
  GuidesConnection: ResolverTypeWrapper<GuidesConnection>,
  GuidesEdge: ResolverTypeWrapper<GuidesEdge>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  SpotsOrderBy: SpotsOrderBy,
  SpotCondition: SpotCondition,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  SpotsConnection: ResolverTypeWrapper<SpotsConnection>,
  Spot: ResolverTypeWrapper<Spot>,
  StagesOrderBy: StagesOrderBy,
  StageCondition: StageCondition,
  StagesConnection: ResolverTypeWrapper<StagesConnection>,
  StagesEdge: ResolverTypeWrapper<StagesEdge>,
  RidesOrderBy: RidesOrderBy,
  RideCondition: RideCondition,
  RideStatus: RideStatus,
  RidesConnection: ResolverTypeWrapper<RidesConnection>,
  Ride: ResolverTypeWrapper<Ride>,
  RidesEdge: ResolverTypeWrapper<RidesEdge>,
  SpotsEdge: ResolverTypeWrapper<SpotsEdge>,
  Bound: ResolverTypeWrapper<Bound>,
  ComputationsEdge: ResolverTypeWrapper<ComputationsEdge>,
  TemperaturesOrderBy: TemperaturesOrderBy,
  TemperatureCondition: TemperatureCondition,
  TemperaturesConnection: ResolverTypeWrapper<TemperaturesConnection>,
  Temperature: ResolverTypeWrapper<Temperature>,
  TemperaturesEdge: ResolverTypeWrapper<TemperaturesEdge>,
  UsersOrderBy: UsersOrderBy,
  UserCondition: UserCondition,
  UsersConnection: ResolverTypeWrapper<UsersConnection>,
  UsersEdge: ResolverTypeWrapper<UsersEdge>,
  JwtToken: ResolverTypeWrapper<Scalars['JwtToken']>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateComputationInput: CreateComputationInput,
  ComputationInput: ComputationInput,
  CreateComputationPayload: ResolverTypeWrapper<CreateComputationPayload>,
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
  UpdateComputationByNodeIdInput: UpdateComputationByNodeIdInput,
  ComputationPatch: ComputationPatch,
  UpdateComputationPayload: ResolverTypeWrapper<UpdateComputationPayload>,
  UpdateComputationInput: UpdateComputationInput,
  UpdateGuideByNodeIdInput: UpdateGuideByNodeIdInput,
  GuidePatch: GuidePatch,
  UpdateGuidePayload: ResolverTypeWrapper<UpdateGuidePayload>,
  UpdateGuideInput: UpdateGuideInput,
  UpdateRideByNodeIdInput: UpdateRideByNodeIdInput,
  RidePatch: RidePatch,
  UpdateRidePayload: ResolverTypeWrapper<UpdateRidePayload>,
  UpdateRideInput: UpdateRideInput,
  UpdateSpotByNodeIdInput: UpdateSpotByNodeIdInput,
  SpotPatch: SpotPatch,
  UpdateSpotPayload: ResolverTypeWrapper<UpdateSpotPayload>,
  UpdateSpotInput: UpdateSpotInput,
  UpdateStageByNodeIdInput: UpdateStageByNodeIdInput,
  StagePatch: StagePatch,
  UpdateStagePayload: ResolverTypeWrapper<UpdateStagePayload>,
  UpdateStageInput: UpdateStageInput,
  UpdateTemperatureByNodeIdInput: UpdateTemperatureByNodeIdInput,
  TemperaturePatch: TemperaturePatch,
  UpdateTemperaturePayload: ResolverTypeWrapper<UpdateTemperaturePayload>,
  UpdateTemperatureInput: UpdateTemperatureInput,
  UpdateUserByNodeIdInput: UpdateUserByNodeIdInput,
  UserPatch: UserPatch,
  UpdateUserPayload: ResolverTypeWrapper<UpdateUserPayload>,
  UpdateUserInput: UpdateUserInput,
  DeleteComputationByNodeIdInput: DeleteComputationByNodeIdInput,
  DeleteComputationPayload: ResolverTypeWrapper<DeleteComputationPayload>,
  DeleteComputationInput: DeleteComputationInput,
  DeleteGuideByNodeIdInput: DeleteGuideByNodeIdInput,
  DeleteGuidePayload: ResolverTypeWrapper<DeleteGuidePayload>,
  DeleteGuideInput: DeleteGuideInput,
  DeleteRideByNodeIdInput: DeleteRideByNodeIdInput,
  DeleteRidePayload: ResolverTypeWrapper<DeleteRidePayload>,
  DeleteRideInput: DeleteRideInput,
  DeleteSpotByNodeIdInput: DeleteSpotByNodeIdInput,
  DeleteSpotPayload: ResolverTypeWrapper<DeleteSpotPayload>,
  DeleteSpotInput: DeleteSpotInput,
  DeleteStageByNodeIdInput: DeleteStageByNodeIdInput,
  DeleteStagePayload: ResolverTypeWrapper<DeleteStagePayload>,
  DeleteStageInput: DeleteStageInput,
  DeleteTemperatureByNodeIdInput: DeleteTemperatureByNodeIdInput,
  DeleteTemperaturePayload: ResolverTypeWrapper<DeleteTemperaturePayload>,
  DeleteTemperatureInput: DeleteTemperatureInput,
  DeleteUserByNodeIdInput: DeleteUserByNodeIdInput,
  DeleteUserPayload: ResolverTypeWrapper<DeleteUserPayload>,
  DeleteUserInput: DeleteUserInput,
  AuthenticateInput: AuthenticateInput,
  AuthenticatePayload: ResolverTypeWrapper<AuthenticatePayload>,
  RegisterInput: RegisterInput,
  RegisterPayload: ResolverTypeWrapper<RegisterPayload>,
  Subscription: ResolverTypeWrapper<{}>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Node: ResolversParentTypes['Query'] | ResolversParentTypes['Computation'] | ResolversParentTypes['Stage'] | ResolversParentTypes['Guide'] | ResolversParentTypes['User'] | ResolversParentTypes['Spot'] | ResolversParentTypes['Ride'] | ResolversParentTypes['Temperature'],
  ID: Scalars['ID'],
  Int: Scalars['Int'],
  Cursor: Scalars['Cursor'],
  ComputationsOrderBy: ComputationsOrderBy,
  ComputationCondition: ComputationCondition,
  String: Scalars['String'],
  Datetime: Scalars['Datetime'],
  ComputationStatus: ComputationStatus,
  ComputationsConnection: ComputationsConnection,
  Computation: Computation,
  Stage: Stage,
  StageStatus: StageStatus,
  Guide: Guide,
  User: User,
  GuidesOrderBy: GuidesOrderBy,
  GuideCondition: GuideCondition,
  GuidesConnection: GuidesConnection,
  GuidesEdge: GuidesEdge,
  PageInfo: PageInfo,
  Boolean: Scalars['Boolean'],
  SpotsOrderBy: SpotsOrderBy,
  SpotCondition: SpotCondition,
  Float: Scalars['Float'],
  SpotsConnection: SpotsConnection,
  Spot: Spot,
  StagesOrderBy: StagesOrderBy,
  StageCondition: StageCondition,
  StagesConnection: StagesConnection,
  StagesEdge: StagesEdge,
  RidesOrderBy: RidesOrderBy,
  RideCondition: RideCondition,
  RideStatus: RideStatus,
  RidesConnection: RidesConnection,
  Ride: Ride,
  RidesEdge: RidesEdge,
  SpotsEdge: SpotsEdge,
  Bound: Bound,
  ComputationsEdge: ComputationsEdge,
  TemperaturesOrderBy: TemperaturesOrderBy,
  TemperatureCondition: TemperatureCondition,
  TemperaturesConnection: TemperaturesConnection,
  Temperature: Temperature,
  TemperaturesEdge: TemperaturesEdge,
  UsersOrderBy: UsersOrderBy,
  UserCondition: UserCondition,
  UsersConnection: UsersConnection,
  UsersEdge: UsersEdge,
  JwtToken: Scalars['JwtToken'],
  Mutation: {},
  CreateComputationInput: CreateComputationInput,
  ComputationInput: ComputationInput,
  CreateComputationPayload: CreateComputationPayload,
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
  UpdateComputationByNodeIdInput: UpdateComputationByNodeIdInput,
  ComputationPatch: ComputationPatch,
  UpdateComputationPayload: UpdateComputationPayload,
  UpdateComputationInput: UpdateComputationInput,
  UpdateGuideByNodeIdInput: UpdateGuideByNodeIdInput,
  GuidePatch: GuidePatch,
  UpdateGuidePayload: UpdateGuidePayload,
  UpdateGuideInput: UpdateGuideInput,
  UpdateRideByNodeIdInput: UpdateRideByNodeIdInput,
  RidePatch: RidePatch,
  UpdateRidePayload: UpdateRidePayload,
  UpdateRideInput: UpdateRideInput,
  UpdateSpotByNodeIdInput: UpdateSpotByNodeIdInput,
  SpotPatch: SpotPatch,
  UpdateSpotPayload: UpdateSpotPayload,
  UpdateSpotInput: UpdateSpotInput,
  UpdateStageByNodeIdInput: UpdateStageByNodeIdInput,
  StagePatch: StagePatch,
  UpdateStagePayload: UpdateStagePayload,
  UpdateStageInput: UpdateStageInput,
  UpdateTemperatureByNodeIdInput: UpdateTemperatureByNodeIdInput,
  TemperaturePatch: TemperaturePatch,
  UpdateTemperaturePayload: UpdateTemperaturePayload,
  UpdateTemperatureInput: UpdateTemperatureInput,
  UpdateUserByNodeIdInput: UpdateUserByNodeIdInput,
  UserPatch: UserPatch,
  UpdateUserPayload: UpdateUserPayload,
  UpdateUserInput: UpdateUserInput,
  DeleteComputationByNodeIdInput: DeleteComputationByNodeIdInput,
  DeleteComputationPayload: DeleteComputationPayload,
  DeleteComputationInput: DeleteComputationInput,
  DeleteGuideByNodeIdInput: DeleteGuideByNodeIdInput,
  DeleteGuidePayload: DeleteGuidePayload,
  DeleteGuideInput: DeleteGuideInput,
  DeleteRideByNodeIdInput: DeleteRideByNodeIdInput,
  DeleteRidePayload: DeleteRidePayload,
  DeleteRideInput: DeleteRideInput,
  DeleteSpotByNodeIdInput: DeleteSpotByNodeIdInput,
  DeleteSpotPayload: DeleteSpotPayload,
  DeleteSpotInput: DeleteSpotInput,
  DeleteStageByNodeIdInput: DeleteStageByNodeIdInput,
  DeleteStagePayload: DeleteStagePayload,
  DeleteStageInput: DeleteStageInput,
  DeleteTemperatureByNodeIdInput: DeleteTemperatureByNodeIdInput,
  DeleteTemperaturePayload: DeleteTemperaturePayload,
  DeleteTemperatureInput: DeleteTemperatureInput,
  DeleteUserByNodeIdInput: DeleteUserByNodeIdInput,
  DeleteUserPayload: DeleteUserPayload,
  DeleteUserInput: DeleteUserInput,
  AuthenticateInput: AuthenticateInput,
  AuthenticatePayload: AuthenticatePayload,
  RegisterInput: RegisterInput,
  RegisterPayload: RegisterPayload,
  Subscription: {},
};

export type AuthenticatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticatePayload'] = ResolversParentTypes['AuthenticatePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  jwtToken?: Resolver<Maybe<ResolversTypes['JwtToken']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type BoundResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bound'] = ResolversParentTypes['Bound']> = {
  north?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  east?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  south?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  west?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ComputationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Computation'] = ResolversParentTypes['Computation']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  ended?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>,
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  status?: Resolver<ResolversTypes['ComputationStatus'], ParentType, ContextType>,
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guide?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>,
  started?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ComputationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComputationsConnection'] = ResolversParentTypes['ComputationsConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Computation']>>, ParentType, ContextType>,
  edges?: Resolver<ReadonlyArray<ResolversTypes['ComputationsEdge']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ComputationsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComputationsEdge'] = ResolversParentTypes['ComputationsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Computation']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateComputationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateComputationPayload'] = ResolversParentTypes['CreateComputationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  computation?: Resolver<Maybe<ResolversTypes['Computation']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  computationEdge?: Resolver<Maybe<ResolversTypes['ComputationsEdge']>, ParentType, ContextType, RequireFields<CreateComputationPayloadComputationEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateGuidePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateGuidePayload'] = ResolversParentTypes['CreateGuidePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  guideEdge?: Resolver<Maybe<ResolversTypes['GuidesEdge']>, ParentType, ContextType, RequireFields<CreateGuidePayloadGuideEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateRidePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateRidePayload'] = ResolversParentTypes['CreateRidePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  ride?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  rideEdge?: Resolver<Maybe<ResolversTypes['RidesEdge']>, ParentType, ContextType, RequireFields<CreateRidePayloadRideEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateSpotPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateSpotPayload'] = ResolversParentTypes['CreateSpotPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  spot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  spotEdge?: Resolver<Maybe<ResolversTypes['SpotsEdge']>, ParentType, ContextType, RequireFields<CreateSpotPayloadSpotEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateStagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateStagePayload'] = ResolversParentTypes['CreateStagePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  stage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  stageEdge?: Resolver<Maybe<ResolversTypes['StagesEdge']>, ParentType, ContextType, RequireFields<CreateStagePayloadStageEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateTemperaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTemperaturePayload'] = ResolversParentTypes['CreateTemperaturePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  temperature?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  temperatureEdge?: Resolver<Maybe<ResolversTypes['TemperaturesEdge']>, ParentType, ContextType, RequireFields<CreateTemperaturePayloadTemperatureEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<CreateUserPayloadUserEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor'
}

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime'
}

export type DeleteComputationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteComputationPayload'] = ResolversParentTypes['DeleteComputationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  computation?: Resolver<Maybe<ResolversTypes['Computation']>, ParentType, ContextType>,
  deletedComputationNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  computationEdge?: Resolver<Maybe<ResolversTypes['ComputationsEdge']>, ParentType, ContextType, RequireFields<DeleteComputationPayloadComputationEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteGuidePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteGuidePayload'] = ResolversParentTypes['DeleteGuidePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  deletedGuideNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  guideEdge?: Resolver<Maybe<ResolversTypes['GuidesEdge']>, ParentType, ContextType, RequireFields<DeleteGuidePayloadGuideEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteRidePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteRidePayload'] = ResolversParentTypes['DeleteRidePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  ride?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>,
  deletedRideNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  rideEdge?: Resolver<Maybe<ResolversTypes['RidesEdge']>, ParentType, ContextType, RequireFields<DeleteRidePayloadRideEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteSpotPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteSpotPayload'] = ResolversParentTypes['DeleteSpotPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  spot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  deletedSpotNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  spotEdge?: Resolver<Maybe<ResolversTypes['SpotsEdge']>, ParentType, ContextType, RequireFields<DeleteSpotPayloadSpotEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteStagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteStagePayload'] = ResolversParentTypes['DeleteStagePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  stage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  deletedStageNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  stageEdge?: Resolver<Maybe<ResolversTypes['StagesEdge']>, ParentType, ContextType, RequireFields<DeleteStagePayloadStageEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteTemperaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTemperaturePayload'] = ResolversParentTypes['DeleteTemperaturePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  temperature?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType>,
  deletedTemperatureNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  temperatureEdge?: Resolver<Maybe<ResolversTypes['TemperaturesEdge']>, ParentType, ContextType, RequireFields<DeleteTemperaturePayloadTemperatureEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserPayload'] = ResolversParentTypes['DeleteUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  deletedUserNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<DeleteUserPayloadUserEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GuideResolvers<ContextType = any, ParentType extends ResolversParentTypes['Guide'] = ResolversParentTypes['Guide']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  maxHoursPerRide?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>,
  updated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  spotsByGuide?: Resolver<ResolversTypes['SpotsConnection'], ParentType, ContextType, RequireFields<GuideSpotsByGuideArgs, 'orderBy'>>,
  stagesByGuide?: Resolver<ResolversTypes['StagesConnection'], ParentType, ContextType, RequireFields<GuideStagesByGuideArgs, 'orderBy'>>,
  ridesByGuide?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<GuideRidesByGuideArgs, 'orderBy'>>,
  computationsByGuide?: Resolver<ResolversTypes['ComputationsConnection'], ParentType, ContextType, RequireFields<GuideComputationsByGuideArgs, 'orderBy'>>,
  bounds?: Resolver<Maybe<ResolversTypes['Bound']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GuidesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuidesConnection'] = ResolversParentTypes['GuidesConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Guide']>>, ParentType, ContextType>,
  edges?: Resolver<ReadonlyArray<ResolversTypes['GuidesEdge']>, ParentType, ContextType>,
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
  createComputation?: Resolver<Maybe<ResolversTypes['CreateComputationPayload']>, ParentType, ContextType, RequireFields<MutationCreateComputationArgs, 'input'>>,
  createGuide?: Resolver<Maybe<ResolversTypes['CreateGuidePayload']>, ParentType, ContextType, RequireFields<MutationCreateGuideArgs, 'input'>>,
  createRide?: Resolver<Maybe<ResolversTypes['CreateRidePayload']>, ParentType, ContextType, RequireFields<MutationCreateRideArgs, 'input'>>,
  createSpot?: Resolver<Maybe<ResolversTypes['CreateSpotPayload']>, ParentType, ContextType, RequireFields<MutationCreateSpotArgs, 'input'>>,
  createStage?: Resolver<Maybe<ResolversTypes['CreateStagePayload']>, ParentType, ContextType, RequireFields<MutationCreateStageArgs, 'input'>>,
  createTemperature?: Resolver<Maybe<ResolversTypes['CreateTemperaturePayload']>, ParentType, ContextType, RequireFields<MutationCreateTemperatureArgs, 'input'>>,
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>,
  updateComputationByNodeId?: Resolver<Maybe<ResolversTypes['UpdateComputationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateComputationByNodeIdArgs, 'input'>>,
  updateComputation?: Resolver<Maybe<ResolversTypes['UpdateComputationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateComputationArgs, 'input'>>,
  updateGuideByNodeId?: Resolver<Maybe<ResolversTypes['UpdateGuidePayload']>, ParentType, ContextType, RequireFields<MutationUpdateGuideByNodeIdArgs, 'input'>>,
  updateGuide?: Resolver<Maybe<ResolversTypes['UpdateGuidePayload']>, ParentType, ContextType, RequireFields<MutationUpdateGuideArgs, 'input'>>,
  updateRideByNodeId?: Resolver<Maybe<ResolversTypes['UpdateRidePayload']>, ParentType, ContextType, RequireFields<MutationUpdateRideByNodeIdArgs, 'input'>>,
  updateRide?: Resolver<Maybe<ResolversTypes['UpdateRidePayload']>, ParentType, ContextType, RequireFields<MutationUpdateRideArgs, 'input'>>,
  updateSpotByNodeId?: Resolver<Maybe<ResolversTypes['UpdateSpotPayload']>, ParentType, ContextType, RequireFields<MutationUpdateSpotByNodeIdArgs, 'input'>>,
  updateSpot?: Resolver<Maybe<ResolversTypes['UpdateSpotPayload']>, ParentType, ContextType, RequireFields<MutationUpdateSpotArgs, 'input'>>,
  updateStageByNodeId?: Resolver<Maybe<ResolversTypes['UpdateStagePayload']>, ParentType, ContextType, RequireFields<MutationUpdateStageByNodeIdArgs, 'input'>>,
  updateStage?: Resolver<Maybe<ResolversTypes['UpdateStagePayload']>, ParentType, ContextType, RequireFields<MutationUpdateStageArgs, 'input'>>,
  updateTemperatureByNodeId?: Resolver<Maybe<ResolversTypes['UpdateTemperaturePayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemperatureByNodeIdArgs, 'input'>>,
  updateTemperature?: Resolver<Maybe<ResolversTypes['UpdateTemperaturePayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemperatureArgs, 'input'>>,
  updateUserByNodeId?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserByNodeIdArgs, 'input'>>,
  updateUser?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>,
  deleteComputationByNodeId?: Resolver<Maybe<ResolversTypes['DeleteComputationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteComputationByNodeIdArgs, 'input'>>,
  deleteComputation?: Resolver<Maybe<ResolversTypes['DeleteComputationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteComputationArgs, 'input'>>,
  deleteGuideByNodeId?: Resolver<Maybe<ResolversTypes['DeleteGuidePayload']>, ParentType, ContextType, RequireFields<MutationDeleteGuideByNodeIdArgs, 'input'>>,
  deleteGuide?: Resolver<Maybe<ResolversTypes['DeleteGuidePayload']>, ParentType, ContextType, RequireFields<MutationDeleteGuideArgs, 'input'>>,
  deleteRideByNodeId?: Resolver<Maybe<ResolversTypes['DeleteRidePayload']>, ParentType, ContextType, RequireFields<MutationDeleteRideByNodeIdArgs, 'input'>>,
  deleteRide?: Resolver<Maybe<ResolversTypes['DeleteRidePayload']>, ParentType, ContextType, RequireFields<MutationDeleteRideArgs, 'input'>>,
  deleteSpotByNodeId?: Resolver<Maybe<ResolversTypes['DeleteSpotPayload']>, ParentType, ContextType, RequireFields<MutationDeleteSpotByNodeIdArgs, 'input'>>,
  deleteSpot?: Resolver<Maybe<ResolversTypes['DeleteSpotPayload']>, ParentType, ContextType, RequireFields<MutationDeleteSpotArgs, 'input'>>,
  deleteStageByNodeId?: Resolver<Maybe<ResolversTypes['DeleteStagePayload']>, ParentType, ContextType, RequireFields<MutationDeleteStageByNodeIdArgs, 'input'>>,
  deleteStage?: Resolver<Maybe<ResolversTypes['DeleteStagePayload']>, ParentType, ContextType, RequireFields<MutationDeleteStageArgs, 'input'>>,
  deleteTemperatureByNodeId?: Resolver<Maybe<ResolversTypes['DeleteTemperaturePayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemperatureByNodeIdArgs, 'input'>>,
  deleteTemperature?: Resolver<Maybe<ResolversTypes['DeleteTemperaturePayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemperatureArgs, 'input'>>,
  deleteUserByNodeId?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserByNodeIdArgs, 'input'>>,
  deleteUser?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'input'>>,
  authenticate?: Resolver<Maybe<ResolversTypes['AuthenticatePayload']>, ParentType, ContextType, RequireFields<MutationAuthenticateArgs, 'input'>>,
  register?: Resolver<Maybe<ResolversTypes['RegisterPayload']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>,
  addSpotFromLatLng?: Resolver<ResolversTypes['Spot'], ParentType, ContextType, RequireFields<MutationAddSpotFromLatLngArgs, 'guideId' | 'lat' | 'long' | 'nights'>>,
  moveSpot?: Resolver<ResolversTypes['Spot'], ParentType, ContextType, RequireFields<MutationMoveSpotArgs, 'spotId' | 'lat' | 'long'>>,
  removeSpot?: Resolver<ResolversTypes['Spot'], ParentType, ContextType, RequireFields<MutationRemoveSpotArgs, 'spotId'>>,
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Query' | 'Computation' | 'Stage' | 'Guide' | 'User' | 'Spot' | 'Ride' | 'Temperature', ParentType, ContextType>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>,
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>,
  computations?: Resolver<Maybe<ResolversTypes['ComputationsConnection']>, ParentType, ContextType, RequireFields<QueryComputationsArgs, 'orderBy'>>,
  guides?: Resolver<Maybe<ResolversTypes['GuidesConnection']>, ParentType, ContextType, RequireFields<QueryGuidesArgs, 'orderBy'>>,
  rides?: Resolver<Maybe<ResolversTypes['RidesConnection']>, ParentType, ContextType, RequireFields<QueryRidesArgs, 'orderBy'>>,
  spots?: Resolver<Maybe<ResolversTypes['SpotsConnection']>, ParentType, ContextType, RequireFields<QuerySpotsArgs, 'orderBy'>>,
  stages?: Resolver<Maybe<ResolversTypes['StagesConnection']>, ParentType, ContextType, RequireFields<QueryStagesArgs, 'orderBy'>>,
  temperatures?: Resolver<Maybe<ResolversTypes['TemperaturesConnection']>, ParentType, ContextType, RequireFields<QueryTemperaturesArgs, 'orderBy'>>,
  users?: Resolver<Maybe<ResolversTypes['UsersConnection']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'orderBy'>>,
  computation?: Resolver<Maybe<ResolversTypes['Computation']>, ParentType, ContextType, RequireFields<QueryComputationArgs, 'id'>>,
  guide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType, RequireFields<QueryGuideArgs, 'id'>>,
  ride?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType, RequireFields<QueryRideArgs, 'id'>>,
  spot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType, RequireFields<QuerySpotArgs, 'id'>>,
  stage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType, RequireFields<QueryStageArgs, 'id'>>,
  temperature?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType, RequireFields<QueryTemperatureArgs, 'id'>>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'username'>>,
  getCurrentUser?: Resolver<Maybe<ResolversTypes['JwtToken']>, ParentType, ContextType>,
  computationByNodeId?: Resolver<Maybe<ResolversTypes['Computation']>, ParentType, ContextType, RequireFields<QueryComputationByNodeIdArgs, 'nodeId'>>,
  guideByNodeId?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType, RequireFields<QueryGuideByNodeIdArgs, 'nodeId'>>,
  rideByNodeId?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType, RequireFields<QueryRideByNodeIdArgs, 'nodeId'>>,
  spotByNodeId?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType, RequireFields<QuerySpotByNodeIdArgs, 'nodeId'>>,
  stageByNodeId?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType, RequireFields<QueryStageByNodeIdArgs, 'nodeId'>>,
  temperatureByNodeId?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType, RequireFields<QueryTemperatureByNodeIdArgs, 'nodeId'>>,
  userByNodeId?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByNodeIdArgs, 'nodeId'>>,
  appVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type RegisterPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterPayload'] = ResolversParentTypes['RegisterPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<RegisterPayloadUserEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RideResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ride'] = ResolversParentTypes['Ride']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  guide?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fromSpot?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  toSpot?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  pathUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  durationSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  distanceMeters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  stage?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  status?: Resolver<ResolversTypes['RideStatus'], ParentType, ContextType>,
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>,
  updated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  hasBorder?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RidesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RidesConnection'] = ResolversParentTypes['RidesConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Ride']>>, ParentType, ContextType>,
  edges?: Resolver<ReadonlyArray<ResolversTypes['RidesEdge']>, ParentType, ContextType>,
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
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guide?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  nights?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  locked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  long?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>,
  updated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>,
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  stagesByFromSpot?: Resolver<ResolversTypes['StagesConnection'], ParentType, ContextType, RequireFields<SpotStagesByFromSpotArgs, 'orderBy'>>,
  stagesByToSpot?: Resolver<ResolversTypes['StagesConnection'], ParentType, ContextType, RequireFields<SpotStagesByToSpotArgs, 'orderBy'>>,
  ridesByFromSpot?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<SpotRidesByFromSpotArgs, 'orderBy'>>,
  ridesByToSpot?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<SpotRidesByToSpotArgs, 'orderBy'>>,
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SpotsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpotsConnection'] = ResolversParentTypes['SpotsConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Spot']>>, ParentType, ContextType>,
  edges?: Resolver<ReadonlyArray<ResolversTypes['SpotsEdge']>, ParentType, ContextType>,
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
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  guide?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fromSpot?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  toSpot?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>,
  updated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>,
  status?: Resolver<ResolversTypes['StageStatus'], ParentType, ContextType>,
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotsByStage?: Resolver<ResolversTypes['SpotsConnection'], ParentType, ContextType, RequireFields<StageSpotsByStageArgs, 'orderBy'>>,
  ridesByStage?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<StageRidesByStageArgs, 'orderBy'>>,
  computationsByStage?: Resolver<ResolversTypes['ComputationsConnection'], ParentType, ContextType, RequireFields<StageComputationsByStageArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type StagesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StagesConnection'] = ResolversParentTypes['StagesConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Stage']>>, ParentType, ContextType>,
  edges?: Resolver<ReadonlyArray<ResolversTypes['StagesEdge']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type StagesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StagesEdge'] = ResolversParentTypes['StagesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  query?: SubscriptionResolver<ResolversTypes['Query'], "query", ParentType, ContextType>,
  nodeId?: SubscriptionResolver<ResolversTypes['ID'], "nodeId", ParentType, ContextType>,
  node?: SubscriptionResolver<Maybe<ResolversTypes['Node']>, "node", ParentType, ContextType, RequireFields<SubscriptionNodeArgs, 'nodeId'>>,
  computations?: SubscriptionResolver<Maybe<ResolversTypes['ComputationsConnection']>, "computations", ParentType, ContextType, RequireFields<SubscriptionComputationsArgs, 'orderBy'>>,
  guides?: SubscriptionResolver<Maybe<ResolversTypes['GuidesConnection']>, "guides", ParentType, ContextType, RequireFields<SubscriptionGuidesArgs, 'orderBy'>>,
  rides?: SubscriptionResolver<Maybe<ResolversTypes['RidesConnection']>, "rides", ParentType, ContextType, RequireFields<SubscriptionRidesArgs, 'orderBy'>>,
  spots?: SubscriptionResolver<Maybe<ResolversTypes['SpotsConnection']>, "spots", ParentType, ContextType, RequireFields<SubscriptionSpotsArgs, 'orderBy'>>,
  stages?: SubscriptionResolver<Maybe<ResolversTypes['StagesConnection']>, "stages", ParentType, ContextType, RequireFields<SubscriptionStagesArgs, 'orderBy'>>,
  temperatures?: SubscriptionResolver<Maybe<ResolversTypes['TemperaturesConnection']>, "temperatures", ParentType, ContextType, RequireFields<SubscriptionTemperaturesArgs, 'orderBy'>>,
  users?: SubscriptionResolver<Maybe<ResolversTypes['UsersConnection']>, "users", ParentType, ContextType, RequireFields<SubscriptionUsersArgs, 'orderBy'>>,
  computation?: SubscriptionResolver<Maybe<ResolversTypes['Computation']>, "computation", ParentType, ContextType, RequireFields<SubscriptionComputationArgs, 'id'>>,
  guide?: SubscriptionResolver<Maybe<ResolversTypes['Guide']>, "guide", ParentType, ContextType, RequireFields<SubscriptionGuideArgs, 'id'>>,
  ride?: SubscriptionResolver<Maybe<ResolversTypes['Ride']>, "ride", ParentType, ContextType, RequireFields<SubscriptionRideArgs, 'id'>>,
  spot?: SubscriptionResolver<Maybe<ResolversTypes['Spot']>, "spot", ParentType, ContextType, RequireFields<SubscriptionSpotArgs, 'id'>>,
  stage?: SubscriptionResolver<Maybe<ResolversTypes['Stage']>, "stage", ParentType, ContextType, RequireFields<SubscriptionStageArgs, 'id'>>,
  temperature?: SubscriptionResolver<Maybe<ResolversTypes['Temperature']>, "temperature", ParentType, ContextType, RequireFields<SubscriptionTemperatureArgs, 'id'>>,
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionUserArgs, 'username'>>,
  getCurrentUser?: SubscriptionResolver<Maybe<ResolversTypes['JwtToken']>, "getCurrentUser", ParentType, ContextType>,
  computationByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['Computation']>, "computationByNodeId", ParentType, ContextType, RequireFields<SubscriptionComputationByNodeIdArgs, 'nodeId'>>,
  guideByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['Guide']>, "guideByNodeId", ParentType, ContextType, RequireFields<SubscriptionGuideByNodeIdArgs, 'nodeId'>>,
  rideByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['Ride']>, "rideByNodeId", ParentType, ContextType, RequireFields<SubscriptionRideByNodeIdArgs, 'nodeId'>>,
  spotByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['Spot']>, "spotByNodeId", ParentType, ContextType, RequireFields<SubscriptionSpotByNodeIdArgs, 'nodeId'>>,
  stageByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['Stage']>, "stageByNodeId", ParentType, ContextType, RequireFields<SubscriptionStageByNodeIdArgs, 'nodeId'>>,
  temperatureByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['Temperature']>, "temperatureByNodeId", ParentType, ContextType, RequireFields<SubscriptionTemperatureByNodeIdArgs, 'nodeId'>>,
  userByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "userByNodeId", ParentType, ContextType, RequireFields<SubscriptionUserByNodeIdArgs, 'nodeId'>>,
  appVersion?: SubscriptionResolver<ResolversTypes['String'], "appVersion", ParentType, ContextType>,
};

export type TemperatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Temperature'] = ResolversParentTypes['Temperature']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  month?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  temperature?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>,
  updated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TemperaturesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemperaturesConnection'] = ResolversParentTypes['TemperaturesConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Temperature']>>, ParentType, ContextType>,
  edges?: Resolver<ReadonlyArray<ResolversTypes['TemperaturesEdge']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TemperaturesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemperaturesEdge'] = ResolversParentTypes['TemperaturesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateComputationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateComputationPayload'] = ResolversParentTypes['UpdateComputationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  computation?: Resolver<Maybe<ResolversTypes['Computation']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  computationEdge?: Resolver<Maybe<ResolversTypes['ComputationsEdge']>, ParentType, ContextType, RequireFields<UpdateComputationPayloadComputationEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateGuidePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateGuidePayload'] = ResolversParentTypes['UpdateGuidePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  guide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  guideEdge?: Resolver<Maybe<ResolversTypes['GuidesEdge']>, ParentType, ContextType, RequireFields<UpdateGuidePayloadGuideEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateRidePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateRidePayload'] = ResolversParentTypes['UpdateRidePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  ride?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  rideEdge?: Resolver<Maybe<ResolversTypes['RidesEdge']>, ParentType, ContextType, RequireFields<UpdateRidePayloadRideEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateSpotPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateSpotPayload'] = ResolversParentTypes['UpdateSpotPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  spot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  spotEdge?: Resolver<Maybe<ResolversTypes['SpotsEdge']>, ParentType, ContextType, RequireFields<UpdateSpotPayloadSpotEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateStagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateStagePayload'] = ResolversParentTypes['UpdateStagePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  stage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>,
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>,
  stageEdge?: Resolver<Maybe<ResolversTypes['StagesEdge']>, ParentType, ContextType, RequireFields<UpdateStagePayloadStageEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateTemperaturePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTemperaturePayload'] = ResolversParentTypes['UpdateTemperaturePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  temperature?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  temperatureEdge?: Resolver<Maybe<ResolversTypes['TemperaturesEdge']>, ParentType, ContextType, RequireFields<UpdateTemperaturePayloadTemperatureEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserPayload'] = ResolversParentTypes['UpdateUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<UpdateUserPayloadUserEdgeArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  passwordHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>,
  updated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>,
  guidesByOwner?: Resolver<ResolversTypes['GuidesConnection'], ParentType, ContextType, RequireFields<UserGuidesByOwnerArgs, 'orderBy'>>,
  spotsByOwner?: Resolver<ResolversTypes['SpotsConnection'], ParentType, ContextType, RequireFields<UserSpotsByOwnerArgs, 'orderBy'>>,
  ridesByOwner?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<UserRidesByOwnerArgs, 'orderBy'>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UsersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersConnection'] = ResolversParentTypes['UsersConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['User']>>, ParentType, ContextType>,
  edges?: Resolver<ReadonlyArray<ResolversTypes['UsersEdge']>, ParentType, ContextType>,
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
  Computation?: ComputationResolvers<ContextType>,
  ComputationsConnection?: ComputationsConnectionResolvers<ContextType>,
  ComputationsEdge?: ComputationsEdgeResolvers<ContextType>,
  CreateComputationPayload?: CreateComputationPayloadResolvers<ContextType>,
  CreateGuidePayload?: CreateGuidePayloadResolvers<ContextType>,
  CreateRidePayload?: CreateRidePayloadResolvers<ContextType>,
  CreateSpotPayload?: CreateSpotPayloadResolvers<ContextType>,
  CreateStagePayload?: CreateStagePayloadResolvers<ContextType>,
  CreateTemperaturePayload?: CreateTemperaturePayloadResolvers<ContextType>,
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>,
  Cursor?: GraphQLScalarType,
  Datetime?: GraphQLScalarType,
  DeleteComputationPayload?: DeleteComputationPayloadResolvers<ContextType>,
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
  Subscription?: SubscriptionResolvers<ContextType>,
  Temperature?: TemperatureResolvers<ContextType>,
  TemperaturesConnection?: TemperaturesConnectionResolvers<ContextType>,
  TemperaturesEdge?: TemperaturesEdgeResolvers<ContextType>,
  UpdateComputationPayload?: UpdateComputationPayloadResolvers<ContextType>,
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

