export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any,
  /** The day, does not include a time. */
  Date: any,
  /**
   * A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519)
   * which securely represents claims between two parties.
   */
  JwtToken: any,
};

/** All input for the `authenticate` mutation. */
export type AuthenticateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  readonly email: Scalars["String"],
  readonly password: Scalars["String"],
};

/** The output of our `authenticate` mutation. */
export type AuthenticatePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  readonly jwtToken?: Maybe<Scalars["JwtToken"]>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
};

export type Bound = {
  readonly north?: Maybe<Scalars["Float"]>,
  readonly east?: Maybe<Scalars["Float"]>,
  readonly south?: Maybe<Scalars["Float"]>,
  readonly west?: Maybe<Scalars["Float"]>,
};

/** All input for the create `Guide` mutation. */
export type CreateGuideInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Guide` to be created by this mutation. */
  readonly guide: GuideInput,
};

/** The output of our create `Guide` mutation. */
export type CreateGuidePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Guide` that was created by this mutation. */
  readonly guide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `User` that is related to this `Guide`. */
  readonly userByOwner?: Maybe<User>,
  /** An edge for our `Guide`. May be used by Relay 1. */
  readonly guideEdge?: Maybe<GuidesEdge>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Ride` to be created by this mutation. */
  readonly ride: RideInput,
};

/** The output of our create `Ride` mutation. */
export type CreateRidePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Ride` that was created by this mutation. */
  readonly ride?: Maybe<Ride>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Reads a single `User` that is related to this `Ride`. */
  readonly userByOwner?: Maybe<User>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByToSpot?: Maybe<Spot>,
  /** Reads a single `Stage` that is related to this `Ride`. */
  readonly stageByStage?: Maybe<Stage>,
  /** An edge for our `Ride`. May be used by Relay 1. */
  readonly rideEdge?: Maybe<RidesEdge>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Spot` to be created by this mutation. */
  readonly spot: SpotInput,
};

/** The output of our create `Spot` mutation. */
export type CreateSpotPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Spot` that was created by this mutation. */
  readonly spot?: Maybe<Spot>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `Guide` that is related to this `Spot`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>,
  /** Reads a single `Stage` that is related to this `Spot`. */
  readonly stageByStage?: Maybe<Stage>,
  /** An edge for our `Spot`. May be used by Relay 1. */
  readonly spotEdge?: Maybe<SpotsEdge>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Stage` to be created by this mutation. */
  readonly stage: StageInput,
};

/** The output of our create `Stage` mutation. */
export type CreateStagePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Stage` that was created by this mutation. */
  readonly stage?: Maybe<Stage>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `Guide` that is related to this `Stage`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByToSpot?: Maybe<Spot>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Temperature` to be created by this mutation. */
  readonly temperature: TemperatureInput,
};

/** The output of our create `Temperature` mutation. */
export type CreateTemperaturePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Temperature` that was created by this mutation. */
  readonly temperature?: Maybe<Temperature>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `User` to be created by this mutation. */
  readonly user: UserInput,
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `User` that was created by this mutation. */
  readonly user?: Maybe<User>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The globally unique `ID` which will identify a single `Guide` to be deleted. */
  readonly nodeId: Scalars["ID"],
};

/** All input for the `deleteGuide` mutation. */
export type DeleteGuideInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  readonly id: Scalars["String"],
};

/** The output of our delete `Guide` mutation. */
export type DeleteGuidePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Guide` that was deleted by this mutation. */
  readonly guide?: Maybe<Guide>,
  readonly deletedGuideNodeId?: Maybe<Scalars["ID"]>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `User` that is related to this `Guide`. */
  readonly userByOwner?: Maybe<User>,
  /** An edge for our `Guide`. May be used by Relay 1. */
  readonly guideEdge?: Maybe<GuidesEdge>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The globally unique `ID` which will identify a single `Ride` to be deleted. */
  readonly nodeId: Scalars["ID"],
};

/** All input for the `deleteRide` mutation. */
export type DeleteRideInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  readonly id: Scalars["String"],
};

/** The output of our delete `Ride` mutation. */
export type DeleteRidePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Ride` that was deleted by this mutation. */
  readonly ride?: Maybe<Ride>,
  readonly deletedRideNodeId?: Maybe<Scalars["ID"]>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Reads a single `User` that is related to this `Ride`. */
  readonly userByOwner?: Maybe<User>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByToSpot?: Maybe<Spot>,
  /** Reads a single `Stage` that is related to this `Ride`. */
  readonly stageByStage?: Maybe<Stage>,
  /** An edge for our `Ride`. May be used by Relay 1. */
  readonly rideEdge?: Maybe<RidesEdge>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The globally unique `ID` which will identify a single `Spot` to be deleted. */
  readonly nodeId: Scalars["ID"],
};

/** All input for the `deleteSpot` mutation. */
export type DeleteSpotInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  readonly id: Scalars["String"],
};

/** The output of our delete `Spot` mutation. */
export type DeleteSpotPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Spot` that was deleted by this mutation. */
  readonly spot?: Maybe<Spot>,
  readonly deletedSpotNodeId?: Maybe<Scalars["ID"]>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `Guide` that is related to this `Spot`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>,
  /** Reads a single `Stage` that is related to this `Spot`. */
  readonly stageByStage?: Maybe<Stage>,
  /** An edge for our `Spot`. May be used by Relay 1. */
  readonly spotEdge?: Maybe<SpotsEdge>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The globally unique `ID` which will identify a single `Stage` to be deleted. */
  readonly nodeId: Scalars["ID"],
};

/** All input for the `deleteStage` mutation. */
export type DeleteStageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  readonly id: Scalars["String"],
};

/** The output of our delete `Stage` mutation. */
export type DeleteStagePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Stage` that was deleted by this mutation. */
  readonly stage?: Maybe<Stage>,
  readonly deletedStageNodeId?: Maybe<Scalars["ID"]>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `Guide` that is related to this `Stage`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByToSpot?: Maybe<Spot>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The globally unique `ID` which will identify a single `Temperature` to be deleted. */
  readonly nodeId: Scalars["ID"],
};

/** All input for the `deleteTemperature` mutation. */
export type DeleteTemperatureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  readonly id: Scalars["String"],
};

/** The output of our delete `Temperature` mutation. */
export type DeleteTemperaturePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Temperature` that was deleted by this mutation. */
  readonly temperature?: Maybe<Temperature>,
  readonly deletedTemperatureNodeId?: Maybe<Scalars["ID"]>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  readonly nodeId: Scalars["ID"],
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  readonly username: Scalars["String"],
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `User` that was deleted by this mutation. */
  readonly user?: Maybe<User>,
  readonly deletedUserNodeId?: Maybe<Scalars["ID"]>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** An edge for our `User`. May be used by Relay 1. */
  readonly userEdge?: Maybe<UsersEdge>,
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>
};

export type Guide = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars["ID"],
  readonly id: Scalars["String"],
  readonly title: Scalars["String"],
  readonly slug: Scalars["String"],
  readonly owner: Scalars["String"],
  readonly startDate?: Maybe<Scalars["Date"]>,
  readonly maxHoursPerRide: Scalars["Int"],
  /** Reads a single `User` that is related to this `Guide`. */
  readonly userByOwner?: Maybe<User>,
  /** Reads and enables pagination through a set of `Spot`. */
  readonly spotsByGuide: SpotsConnection,
  /** Reads and enables pagination through a set of `Stage`. */
  readonly stagesByGuide: StagesConnection,
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByGuide: RidesConnection,
  readonly bounds?: Maybe<Bound>,
};


export type GuideSpotsByGuideArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>,
  condition?: Maybe<SpotCondition>
};


export type GuideStagesByGuideArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>,
  condition?: Maybe<StageCondition>
};


export type GuideRidesByGuideArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>,
  condition?: Maybe<RideCondition>
};

/** A condition to be used against `Guide` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GuideCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `title` field. */
  readonly title?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `slug` field. */
  readonly slug?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `owner` field. */
  readonly owner?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `startDate` field. */
  readonly startDate?: Maybe<Scalars["Date"]>,
  /** Checks for equality with the object’s `maxHoursPerRide` field. */
  readonly maxHoursPerRide?: Maybe<Scalars["Int"]>,
};

/** An input for mutations affecting `Guide` */
export type GuideInput = {
  readonly id: Scalars["String"],
  readonly title: Scalars["String"],
  readonly slug: Scalars["String"],
  readonly owner: Scalars["String"],
  readonly startDate?: Maybe<Scalars["Date"]>,
  readonly maxHoursPerRide?: Maybe<Scalars["Int"]>,
};

/** Represents an update to a `Guide`. Fields that are set will be updated. */
export type GuidePatch = {
  readonly id?: Maybe<Scalars["String"]>,
  readonly title?: Maybe<Scalars["String"]>,
  readonly slug?: Maybe<Scalars["String"]>,
  readonly owner?: Maybe<Scalars["String"]>,
  readonly startDate?: Maybe<Scalars["Date"]>,
  readonly maxHoursPerRide?: Maybe<Scalars["Int"]>,
};

/** A connection to a list of `Guide` values. */
export type GuidesConnection = {
  /** A list of `Guide` objects. */
  readonly nodes: ReadonlyArray<Maybe<Guide>>,
  /** A list of edges which contains the `Guide` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<GuidesEdge>,
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo,
  /** The count of *all* `Guide` you could get from the connection. */
  readonly totalCount: Scalars["Int"],
};

/** A `Guide` edge in the connection. */
export type GuidesEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars["Cursor"]>,
  /** The `Guide` at the end of the edge. */
  readonly node?: Maybe<Guide>,
};

/** Methods to use when ordering `Guide`. */
export enum GuidesOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  TitleAsc = "TITLE_ASC",
  TitleDesc = "TITLE_DESC",
  SlugAsc = "SLUG_ASC",
  SlugDesc = "SLUG_DESC",
  OwnerAsc = "OWNER_ASC",
  OwnerDesc = "OWNER_DESC",
  StartDateAsc = "START_DATE_ASC",
  StartDateDesc = "START_DATE_DESC",
  MaxHoursPerRideAsc = "MAX_HOURS_PER_RIDE_ASC",
  MaxHoursPerRideDesc = "MAX_HOURS_PER_RIDE_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}


/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
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
  /** Updates a single `Guide` using its globally unique id and a patch. */
  readonly updateGuideByNodeId?: Maybe<UpdateGuidePayload>,
  /** Updates a single `Guide` using a unique key and a patch. */
  readonly updateGuide?: Maybe<UpdateGuidePayload>,
  /** Updates a single `Ride` using its globally unique id and a patch. */
  readonly updateRideByNodeId?: Maybe<UpdateRidePayload>,
  /** Updates a single `Ride` using a unique key and a patch. */
  readonly updateRide?: Maybe<UpdateRidePayload>,
  /** Updates a single `Spot` using its globally unique id and a patch. */
  readonly updateSpotByNodeId?: Maybe<UpdateSpotPayload>,
  /** Updates a single `Spot` using a unique key and a patch. */
  readonly updateSpot?: Maybe<UpdateSpotPayload>,
  /** Updates a single `Stage` using its globally unique id and a patch. */
  readonly updateStageByNodeId?: Maybe<UpdateStagePayload>,
  /** Updates a single `Stage` using a unique key and a patch. */
  readonly updateStage?: Maybe<UpdateStagePayload>,
  /** Updates a single `Temperature` using its globally unique id and a patch. */
  readonly updateTemperatureByNodeId?: Maybe<UpdateTemperaturePayload>,
  /** Updates a single `Temperature` using a unique key and a patch. */
  readonly updateTemperature?: Maybe<UpdateTemperaturePayload>,
  /** Updates a single `User` using its globally unique id and a patch. */
  readonly updateUserByNodeId?: Maybe<UpdateUserPayload>,
  /** Updates a single `User` using a unique key and a patch. */
  readonly updateUser?: Maybe<UpdateUserPayload>,
  /** Deletes a single `Guide` using its globally unique id. */
  readonly deleteGuideByNodeId?: Maybe<DeleteGuidePayload>,
  /** Deletes a single `Guide` using a unique key. */
  readonly deleteGuide?: Maybe<DeleteGuidePayload>,
  /** Deletes a single `Ride` using its globally unique id. */
  readonly deleteRideByNodeId?: Maybe<DeleteRidePayload>,
  /** Deletes a single `Ride` using a unique key. */
  readonly deleteRide?: Maybe<DeleteRidePayload>,
  /** Deletes a single `Spot` using its globally unique id. */
  readonly deleteSpotByNodeId?: Maybe<DeleteSpotPayload>,
  /** Deletes a single `Spot` using a unique key. */
  readonly deleteSpot?: Maybe<DeleteSpotPayload>,
  /** Deletes a single `Stage` using its globally unique id. */
  readonly deleteStageByNodeId?: Maybe<DeleteStagePayload>,
  /** Deletes a single `Stage` using a unique key. */
  readonly deleteStage?: Maybe<DeleteStagePayload>,
  /** Deletes a single `Temperature` using its globally unique id. */
  readonly deleteTemperatureByNodeId?: Maybe<DeleteTemperaturePayload>,
  /** Deletes a single `Temperature` using a unique key. */
  readonly deleteTemperature?: Maybe<DeleteTemperaturePayload>,
  /** Deletes a single `User` using its globally unique id. */
  readonly deleteUserByNodeId?: Maybe<DeleteUserPayload>,
  /** Deletes a single `User` using a unique key. */
  readonly deleteUser?: Maybe<DeleteUserPayload>,
  /** Creates a JWT token that will securely identify a person and give them certain permissions. This token expires in 2 days. */
  readonly authenticate?: Maybe<AuthenticatePayload>,
  /** Registers a single user */
  readonly register?: Maybe<RegisterPayload>,
  readonly addSpotFromLatLng: Spot,
  readonly computeRides: Scalars["String"],
  readonly moveSpot: Spot,
  readonly removeSpot: Spot,
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
export type MutationUpdateGuideByNodeIdArgs = {
  input: UpdateGuideByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGuideArgs = {
  input: UpdateGuideInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRideByNodeIdArgs = {
  input: UpdateRideByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRideArgs = {
  input: UpdateRideInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSpotByNodeIdArgs = {
  input: UpdateSpotByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSpotArgs = {
  input: UpdateSpotInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStageByNodeIdArgs = {
  input: UpdateStageByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStageArgs = {
  input: UpdateStageInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemperatureByNodeIdArgs = {
  input: UpdateTemperatureByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemperatureArgs = {
  input: UpdateTemperatureInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByNodeIdArgs = {
  input: UpdateUserByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGuideByNodeIdArgs = {
  input: DeleteGuideByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGuideArgs = {
  input: DeleteGuideInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRideByNodeIdArgs = {
  input: DeleteRideByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRideArgs = {
  input: DeleteRideInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSpotByNodeIdArgs = {
  input: DeleteSpotByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSpotArgs = {
  input: DeleteSpotInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStageByNodeIdArgs = {
  input: DeleteStageByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStageArgs = {
  input: DeleteStageInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemperatureByNodeIdArgs = {
  input: DeleteTemperatureByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemperatureArgs = {
  input: DeleteTemperatureInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByNodeIdArgs = {
  input: DeleteUserByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateArgs = {
  input: AuthenticateInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterArgs = {
  input: RegisterInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAddSpotFromLatLngArgs = {
  guideId: Scalars["String"],
  lat: Scalars["Float"],
  long: Scalars["Float"],
  label?: Maybe<Scalars["String"]>
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationComputeRidesArgs = {
  guideId: Scalars["String"]
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationMoveSpotArgs = {
  spotId: Scalars["String"],
  lat: Scalars["Float"],
  long: Scalars["Float"]
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRemoveSpotArgs = {
  spotId: Scalars["String"]
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars["ID"],
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars["Boolean"],
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars["Boolean"],
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars["Cursor"]>,
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars["Cursor"]>,
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  readonly query: Query,
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  readonly nodeId: Scalars["ID"],
  /** Fetches an object given its globally unique `ID`. */
  readonly node?: Maybe<Node>,
  /** Reads and enables pagination through a set of `Guide`. */
  readonly guides?: Maybe<GuidesConnection>,
  /** Reads and enables pagination through a set of `Ride`. */
  readonly rides?: Maybe<RidesConnection>,
  /** Reads and enables pagination through a set of `Spot`. */
  readonly spots?: Maybe<SpotsConnection>,
  /** Reads and enables pagination through a set of `Stage`. */
  readonly stages?: Maybe<StagesConnection>,
  /** Reads and enables pagination through a set of `Temperature`. */
  readonly temperatures?: Maybe<TemperaturesConnection>,
  /** Reads and enables pagination through a set of `User`. */
  readonly users?: Maybe<UsersConnection>,
  readonly guide?: Maybe<Guide>,
  readonly ride?: Maybe<Ride>,
  readonly spot?: Maybe<Spot>,
  readonly stage?: Maybe<Stage>,
  readonly temperature?: Maybe<Temperature>,
  readonly user?: Maybe<User>,
  readonly getCurrentUser?: Maybe<Scalars["JwtToken"]>,
  /** Reads a single `Guide` using its globally unique `ID`. */
  readonly guideByNodeId?: Maybe<Guide>,
  /** Reads a single `Ride` using its globally unique `ID`. */
  readonly rideByNodeId?: Maybe<Ride>,
  /** Reads a single `Spot` using its globally unique `ID`. */
  readonly spotByNodeId?: Maybe<Spot>,
  /** Reads a single `Stage` using its globally unique `ID`. */
  readonly stageByNodeId?: Maybe<Stage>,
  /** Reads a single `Temperature` using its globally unique `ID`. */
  readonly temperatureByNodeId?: Maybe<Temperature>,
  /** Reads a single `User` using its globally unique `ID`. */
  readonly userByNodeId?: Maybe<User>,
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"]
};


/** The root query type which gives access points into the data universe. */
export type QueryGuidesArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>,
  condition?: Maybe<GuideCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryRidesArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>,
  condition?: Maybe<RideCondition>
};


/** The root query type which gives access points into the data universe. */
export type QuerySpotsArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>,
  condition?: Maybe<SpotCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryStagesArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>,
  condition?: Maybe<StageCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryTemperaturesArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<TemperaturesOrderBy>>,
  condition?: Maybe<TemperatureCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>,
  condition?: Maybe<UserCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryGuideArgs = {
  id: Scalars["String"]
};


/** The root query type which gives access points into the data universe. */
export type QueryRideArgs = {
  id: Scalars["String"]
};


/** The root query type which gives access points into the data universe. */
export type QuerySpotArgs = {
  id: Scalars["String"]
};


/** The root query type which gives access points into the data universe. */
export type QueryStageArgs = {
  id: Scalars["String"]
};


/** The root query type which gives access points into the data universe. */
export type QueryTemperatureArgs = {
  id: Scalars["String"]
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  username: Scalars["String"]
};


/** The root query type which gives access points into the data universe. */
export type QueryGuideByNodeIdArgs = {
  nodeId: Scalars["ID"]
};


/** The root query type which gives access points into the data universe. */
export type QueryRideByNodeIdArgs = {
  nodeId: Scalars["ID"]
};


/** The root query type which gives access points into the data universe. */
export type QuerySpotByNodeIdArgs = {
  nodeId: Scalars["ID"]
};


/** The root query type which gives access points into the data universe. */
export type QueryStageByNodeIdArgs = {
  nodeId: Scalars["ID"]
};


/** The root query type which gives access points into the data universe. */
export type QueryTemperatureByNodeIdArgs = {
  nodeId: Scalars["ID"]
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByNodeIdArgs = {
  nodeId: Scalars["ID"]
};

/** All input for the `register` mutation. */
export type RegisterInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  readonly _username: Scalars["String"],
  readonly _email: Scalars["String"],
  readonly _password: Scalars["String"],
};

/** The output of our `register` mutation. */
export type RegisterPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  readonly user?: Maybe<User>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** An edge for our `User`. May be used by Relay 1. */
  readonly userEdge?: Maybe<UsersEdge>,
};


/** The output of our `register` mutation. */
export type RegisterPayloadUserEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>
};

export type Ride = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars["ID"],
  readonly id: Scalars["String"],
  readonly guide: Scalars["String"],
  readonly owner: Scalars["String"],
  readonly fromSpot: Scalars["String"],
  readonly toSpot: Scalars["String"],
  readonly pathUrl?: Maybe<Scalars["String"]>,
  readonly durationSeconds?: Maybe<Scalars["Int"]>,
  readonly distanceMeters?: Maybe<Scalars["Int"]>,
  readonly date?: Maybe<Scalars["Date"]>,
  readonly stage: Scalars["String"],
  readonly position?: Maybe<Scalars["String"]>,
  readonly status?: Maybe<RideStatus>,
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Reads a single `User` that is related to this `Ride`. */
  readonly userByOwner?: Maybe<User>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByToSpot?: Maybe<Spot>,
  /** Reads a single `Stage` that is related to this `Ride`. */
  readonly stageByStage?: Maybe<Stage>,
  readonly hasBorder?: Maybe<Scalars["Boolean"]>,
  readonly name?: Maybe<Scalars["String"]>,
};

/** A condition to be used against `Ride` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RideCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `guide` field. */
  readonly guide?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `owner` field. */
  readonly owner?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `fromSpot` field. */
  readonly fromSpot?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `toSpot` field. */
  readonly toSpot?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `pathUrl` field. */
  readonly pathUrl?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `durationSeconds` field. */
  readonly durationSeconds?: Maybe<Scalars["Int"]>,
  /** Checks for equality with the object’s `distanceMeters` field. */
  readonly distanceMeters?: Maybe<Scalars["Int"]>,
  /** Checks for equality with the object’s `date` field. */
  readonly date?: Maybe<Scalars["Date"]>,
  /** Checks for equality with the object’s `stage` field. */
  readonly stage?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `position` field. */
  readonly position?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `status` field. */
  readonly status?: Maybe<RideStatus>,
};

/** An input for mutations affecting `Ride` */
export type RideInput = {
  readonly id: Scalars["String"],
  readonly guide: Scalars["String"],
  readonly owner: Scalars["String"],
  readonly fromSpot: Scalars["String"],
  readonly toSpot: Scalars["String"],
  readonly pathUrl?: Maybe<Scalars["String"]>,
  readonly durationSeconds?: Maybe<Scalars["Int"]>,
  readonly distanceMeters?: Maybe<Scalars["Int"]>,
  readonly date?: Maybe<Scalars["Date"]>,
  readonly stage: Scalars["String"],
  readonly position?: Maybe<Scalars["String"]>,
  readonly status?: Maybe<RideStatus>,
};

/** Represents an update to a `Ride`. Fields that are set will be updated. */
export type RidePatch = {
  readonly id?: Maybe<Scalars["String"]>,
  readonly guide?: Maybe<Scalars["String"]>,
  readonly owner?: Maybe<Scalars["String"]>,
  readonly fromSpot?: Maybe<Scalars["String"]>,
  readonly toSpot?: Maybe<Scalars["String"]>,
  readonly pathUrl?: Maybe<Scalars["String"]>,
  readonly durationSeconds?: Maybe<Scalars["Int"]>,
  readonly distanceMeters?: Maybe<Scalars["Int"]>,
  readonly date?: Maybe<Scalars["Date"]>,
  readonly stage?: Maybe<Scalars["String"]>,
  readonly position?: Maybe<Scalars["String"]>,
  readonly status?: Maybe<RideStatus>,
};

/** A connection to a list of `Ride` values. */
export type RidesConnection = {
  /** A list of `Ride` objects. */
  readonly nodes: ReadonlyArray<Maybe<Ride>>,
  /** A list of edges which contains the `Ride` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<RidesEdge>,
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo,
  /** The count of *all* `Ride` you could get from the connection. */
  readonly totalCount: Scalars["Int"],
};

/** A `Ride` edge in the connection. */
export type RidesEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars["Cursor"]>,
  /** The `Ride` at the end of the edge. */
  readonly node?: Maybe<Ride>,
};

/** Methods to use when ordering `Ride`. */
export enum RidesOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  GuideAsc = "GUIDE_ASC",
  GuideDesc = "GUIDE_DESC",
  OwnerAsc = "OWNER_ASC",
  OwnerDesc = "OWNER_DESC",
  FromSpotAsc = "FROM_SPOT_ASC",
  FromSpotDesc = "FROM_SPOT_DESC",
  ToSpotAsc = "TO_SPOT_ASC",
  ToSpotDesc = "TO_SPOT_DESC",
  PathUrlAsc = "PATH_URL_ASC",
  PathUrlDesc = "PATH_URL_DESC",
  DurationSecondsAsc = "DURATION_SECONDS_ASC",
  DurationSecondsDesc = "DURATION_SECONDS_DESC",
  DistanceMetersAsc = "DISTANCE_METERS_ASC",
  DistanceMetersDesc = "DISTANCE_METERS_DESC",
  DateAsc = "DATE_ASC",
  DateDesc = "DATE_DESC",
  StageAsc = "STAGE_ASC",
  StageDesc = "STAGE_DESC",
  PositionAsc = "POSITION_ASC",
  PositionDesc = "POSITION_DESC",
  StatusAsc = "STATUS_ASC",
  StatusDesc = "STATUS_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}

export enum RideStatus {
  Complete = "COMPLETE",
  Ready = "READY",
  Stale = "STALE"
}

export type Spot = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars["ID"],
  readonly id: Scalars["String"],
  readonly label?: Maybe<Scalars["String"]>,
  readonly guide: Scalars["String"],
  readonly owner: Scalars["String"],
  readonly nights?: Maybe<Scalars["Int"]>,
  readonly locked: Scalars["Boolean"],
  readonly lat: Scalars["Float"],
  readonly long: Scalars["Float"],
  readonly position?: Maybe<Scalars["String"]>,
  readonly location?: Maybe<Scalars["String"]>,
  readonly country?: Maybe<Scalars["String"]>,
  readonly date?: Maybe<Scalars["Date"]>,
  readonly created?: Maybe<Scalars["Date"]>,
  readonly updated?: Maybe<Scalars["Date"]>,
  readonly stage?: Maybe<Scalars["String"]>,
  readonly status?: Maybe<SpotStatus>,
  /** Reads a single `Guide` that is related to this `Spot`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>,
  /** Reads a single `Stage` that is related to this `Spot`. */
  readonly stageByStage?: Maybe<Stage>,
  /** Reads and enables pagination through a set of `Stage`. */
  readonly stagesByFromSpot: StagesConnection,
  /** Reads and enables pagination through a set of `Stage`. */
  readonly stagesByToSpot: StagesConnection,
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByFromSpot: RidesConnection,
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByToSpot: RidesConnection,
  readonly temperature?: Maybe<Scalars["Float"]>,
};


export type SpotStagesByFromSpotArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>,
  condition?: Maybe<StageCondition>
};


export type SpotStagesByToSpotArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>,
  condition?: Maybe<StageCondition>
};


export type SpotRidesByFromSpotArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>,
  condition?: Maybe<RideCondition>
};


export type SpotRidesByToSpotArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>,
  condition?: Maybe<RideCondition>
};

/** A condition to be used against `Spot` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SpotCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `label` field. */
  readonly label?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `guide` field. */
  readonly guide?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `owner` field. */
  readonly owner?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `nights` field. */
  readonly nights?: Maybe<Scalars["Int"]>,
  /** Checks for equality with the object’s `locked` field. */
  readonly locked?: Maybe<Scalars["Boolean"]>,
  /** Checks for equality with the object’s `lat` field. */
  readonly lat?: Maybe<Scalars["Float"]>,
  /** Checks for equality with the object’s `long` field. */
  readonly long?: Maybe<Scalars["Float"]>,
  /** Checks for equality with the object’s `position` field. */
  readonly position?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `location` field. */
  readonly location?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `country` field. */
  readonly country?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `date` field. */
  readonly date?: Maybe<Scalars["Date"]>,
  /** Checks for equality with the object’s `created` field. */
  readonly created?: Maybe<Scalars["Date"]>,
  /** Checks for equality with the object’s `updated` field. */
  readonly updated?: Maybe<Scalars["Date"]>,
  /** Checks for equality with the object’s `stage` field. */
  readonly stage?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `status` field. */
  readonly status?: Maybe<SpotStatus>,
};

/** An input for mutations affecting `Spot` */
export type SpotInput = {
  readonly id: Scalars["String"],
  readonly label?: Maybe<Scalars["String"]>,
  readonly guide: Scalars["String"],
  readonly owner: Scalars["String"],
  readonly nights?: Maybe<Scalars["Int"]>,
  readonly locked: Scalars["Boolean"],
  readonly lat: Scalars["Float"],
  readonly long: Scalars["Float"],
  readonly position?: Maybe<Scalars["String"]>,
  readonly location?: Maybe<Scalars["String"]>,
  readonly country?: Maybe<Scalars["String"]>,
  readonly date?: Maybe<Scalars["Date"]>,
  readonly created?: Maybe<Scalars["Date"]>,
  readonly updated?: Maybe<Scalars["Date"]>,
  readonly stage?: Maybe<Scalars["String"]>,
  readonly status?: Maybe<SpotStatus>,
};

/** Represents an update to a `Spot`. Fields that are set will be updated. */
export type SpotPatch = {
  readonly id?: Maybe<Scalars["String"]>,
  readonly label?: Maybe<Scalars["String"]>,
  readonly guide?: Maybe<Scalars["String"]>,
  readonly owner?: Maybe<Scalars["String"]>,
  readonly nights?: Maybe<Scalars["Int"]>,
  readonly locked?: Maybe<Scalars["Boolean"]>,
  readonly lat?: Maybe<Scalars["Float"]>,
  readonly long?: Maybe<Scalars["Float"]>,
  readonly position?: Maybe<Scalars["String"]>,
  readonly location?: Maybe<Scalars["String"]>,
  readonly country?: Maybe<Scalars["String"]>,
  readonly date?: Maybe<Scalars["Date"]>,
  readonly created?: Maybe<Scalars["Date"]>,
  readonly updated?: Maybe<Scalars["Date"]>,
  readonly stage?: Maybe<Scalars["String"]>,
  readonly status?: Maybe<SpotStatus>,
};

/** A connection to a list of `Spot` values. */
export type SpotsConnection = {
  /** A list of `Spot` objects. */
  readonly nodes: ReadonlyArray<Maybe<Spot>>,
  /** A list of edges which contains the `Spot` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<SpotsEdge>,
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo,
  /** The count of *all* `Spot` you could get from the connection. */
  readonly totalCount: Scalars["Int"],
};

/** A `Spot` edge in the connection. */
export type SpotsEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars["Cursor"]>,
  /** The `Spot` at the end of the edge. */
  readonly node?: Maybe<Spot>,
};

/** Methods to use when ordering `Spot`. */
export enum SpotsOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  LabelAsc = "LABEL_ASC",
  LabelDesc = "LABEL_DESC",
  GuideAsc = "GUIDE_ASC",
  GuideDesc = "GUIDE_DESC",
  OwnerAsc = "OWNER_ASC",
  OwnerDesc = "OWNER_DESC",
  NightsAsc = "NIGHTS_ASC",
  NightsDesc = "NIGHTS_DESC",
  LockedAsc = "LOCKED_ASC",
  LockedDesc = "LOCKED_DESC",
  LatAsc = "LAT_ASC",
  LatDesc = "LAT_DESC",
  LongAsc = "LONG_ASC",
  LongDesc = "LONG_DESC",
  PositionAsc = "POSITION_ASC",
  PositionDesc = "POSITION_DESC",
  LocationAsc = "LOCATION_ASC",
  LocationDesc = "LOCATION_DESC",
  CountryAsc = "COUNTRY_ASC",
  CountryDesc = "COUNTRY_DESC",
  DateAsc = "DATE_ASC",
  DateDesc = "DATE_DESC",
  CreatedAsc = "CREATED_ASC",
  CreatedDesc = "CREATED_DESC",
  UpdatedAsc = "UPDATED_ASC",
  UpdatedDesc = "UPDATED_DESC",
  StageAsc = "STAGE_ASC",
  StageDesc = "STAGE_DESC",
  StatusAsc = "STATUS_ASC",
  StatusDesc = "STATUS_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}

export enum SpotStatus {
  Complete = "COMPLETE",
  Ready = "READY",
  Computing = "COMPUTING",
  Stale = "STALE"
}

export type Stage = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars["ID"],
  readonly id: Scalars["String"],
  readonly guide: Scalars["String"],
  readonly fromSpot: Scalars["String"],
  readonly toSpot: Scalars["String"],
  readonly created?: Maybe<Scalars["Date"]>,
  readonly updated?: Maybe<Scalars["Date"]>,
  readonly status: StageStatus,
  /** Reads a single `Guide` that is related to this `Stage`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByToSpot?: Maybe<Spot>,
  /** Reads and enables pagination through a set of `Spot`. */
  readonly spotsByStage: SpotsConnection,
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByStage: RidesConnection,
};


export type StageSpotsByStageArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>,
  condition?: Maybe<SpotCondition>
};


export type StageRidesByStageArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>,
  condition?: Maybe<RideCondition>
};

/** A condition to be used against `Stage` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type StageCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `guide` field. */
  readonly guide?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `fromSpot` field. */
  readonly fromSpot?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `toSpot` field. */
  readonly toSpot?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `created` field. */
  readonly created?: Maybe<Scalars["Date"]>,
  /** Checks for equality with the object’s `updated` field. */
  readonly updated?: Maybe<Scalars["Date"]>,
  /** Checks for equality with the object’s `status` field. */
  readonly status?: Maybe<StageStatus>,
};

/** An input for mutations affecting `Stage` */
export type StageInput = {
  readonly id: Scalars["String"],
  readonly guide: Scalars["String"],
  readonly fromSpot: Scalars["String"],
  readonly toSpot: Scalars["String"],
  readonly created?: Maybe<Scalars["Date"]>,
  readonly updated?: Maybe<Scalars["Date"]>,
  readonly status: StageStatus,
};

/** Represents an update to a `Stage`. Fields that are set will be updated. */
export type StagePatch = {
  readonly id?: Maybe<Scalars["String"]>,
  readonly guide?: Maybe<Scalars["String"]>,
  readonly fromSpot?: Maybe<Scalars["String"]>,
  readonly toSpot?: Maybe<Scalars["String"]>,
  readonly created?: Maybe<Scalars["Date"]>,
  readonly updated?: Maybe<Scalars["Date"]>,
  readonly status?: Maybe<StageStatus>,
};

/** A connection to a list of `Stage` values. */
export type StagesConnection = {
  /** A list of `Stage` objects. */
  readonly nodes: ReadonlyArray<Maybe<Stage>>,
  /** A list of edges which contains the `Stage` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<StagesEdge>,
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo,
  /** The count of *all* `Stage` you could get from the connection. */
  readonly totalCount: Scalars["Int"],
};

/** A `Stage` edge in the connection. */
export type StagesEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars["Cursor"]>,
  /** The `Stage` at the end of the edge. */
  readonly node?: Maybe<Stage>,
};

/** Methods to use when ordering `Stage`. */
export enum StagesOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  GuideAsc = "GUIDE_ASC",
  GuideDesc = "GUIDE_DESC",
  FromSpotAsc = "FROM_SPOT_ASC",
  FromSpotDesc = "FROM_SPOT_DESC",
  ToSpotAsc = "TO_SPOT_ASC",
  ToSpotDesc = "TO_SPOT_DESC",
  CreatedAsc = "CREATED_ASC",
  CreatedDesc = "CREATED_DESC",
  UpdatedAsc = "UPDATED_ASC",
  UpdatedDesc = "UPDATED_DESC",
  StatusAsc = "STATUS_ASC",
  StatusDesc = "STATUS_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}

export enum StageStatus {
  Complete = "COMPLETE",
  Ready = "READY",
  Computing = "COMPUTING",
  Stale = "STALE"
}

export type Temperature = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars["ID"],
  readonly id: Scalars["String"],
  readonly country: Scalars["String"],
  readonly month: Scalars["Int"],
  readonly temperature: Scalars["Float"],
};

/**
 * A condition to be used against `Temperature` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TemperatureCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `country` field. */
  readonly country?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `month` field. */
  readonly month?: Maybe<Scalars["Int"]>,
  /** Checks for equality with the object’s `temperature` field. */
  readonly temperature?: Maybe<Scalars["Float"]>,
};

/** An input for mutations affecting `Temperature` */
export type TemperatureInput = {
  readonly id: Scalars["String"],
  readonly country: Scalars["String"],
  readonly month: Scalars["Int"],
  readonly temperature: Scalars["Float"],
};

/** Represents an update to a `Temperature`. Fields that are set will be updated. */
export type TemperaturePatch = {
  readonly id?: Maybe<Scalars["String"]>,
  readonly country?: Maybe<Scalars["String"]>,
  readonly month?: Maybe<Scalars["Int"]>,
  readonly temperature?: Maybe<Scalars["Float"]>,
};

/** A connection to a list of `Temperature` values. */
export type TemperaturesConnection = {
  /** A list of `Temperature` objects. */
  readonly nodes: ReadonlyArray<Maybe<Temperature>>,
  /** A list of edges which contains the `Temperature` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<TemperaturesEdge>,
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo,
  /** The count of *all* `Temperature` you could get from the connection. */
  readonly totalCount: Scalars["Int"],
};

/** A `Temperature` edge in the connection. */
export type TemperaturesEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars["Cursor"]>,
  /** The `Temperature` at the end of the edge. */
  readonly node?: Maybe<Temperature>,
};

/** Methods to use when ordering `Temperature`. */
export enum TemperaturesOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  CountryAsc = "COUNTRY_ASC",
  CountryDesc = "COUNTRY_DESC",
  MonthAsc = "MONTH_ASC",
  MonthDesc = "MONTH_DESC",
  TemperatureAsc = "TEMPERATURE_ASC",
  TemperatureDesc = "TEMPERATURE_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}

/** All input for the `updateGuideByNodeId` mutation. */
export type UpdateGuideByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The globally unique `ID` which will identify a single `Guide` to be updated. */
  readonly nodeId: Scalars["ID"],
  /** An object where the defined keys will be set on the `Guide` being updated. */
  readonly patch: GuidePatch,
};

/** All input for the `updateGuide` mutation. */
export type UpdateGuideInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** An object where the defined keys will be set on the `Guide` being updated. */
  readonly patch: GuidePatch,
  readonly id: Scalars["String"],
};

/** The output of our update `Guide` mutation. */
export type UpdateGuidePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Guide` that was updated by this mutation. */
  readonly guide?: Maybe<Guide>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `User` that is related to this `Guide`. */
  readonly userByOwner?: Maybe<User>,
  /** An edge for our `Guide`. May be used by Relay 1. */
  readonly guideEdge?: Maybe<GuidesEdge>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The globally unique `ID` which will identify a single `Ride` to be updated. */
  readonly nodeId: Scalars["ID"],
  /** An object where the defined keys will be set on the `Ride` being updated. */
  readonly patch: RidePatch,
};

/** All input for the `updateRide` mutation. */
export type UpdateRideInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** An object where the defined keys will be set on the `Ride` being updated. */
  readonly patch: RidePatch,
  readonly id: Scalars["String"],
};

/** The output of our update `Ride` mutation. */
export type UpdateRidePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Ride` that was updated by this mutation. */
  readonly ride?: Maybe<Ride>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `Guide` that is related to this `Ride`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Reads a single `User` that is related to this `Ride`. */
  readonly userByOwner?: Maybe<User>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Ride`. */
  readonly spotByToSpot?: Maybe<Spot>,
  /** Reads a single `Stage` that is related to this `Ride`. */
  readonly stageByStage?: Maybe<Stage>,
  /** An edge for our `Ride`. May be used by Relay 1. */
  readonly rideEdge?: Maybe<RidesEdge>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The globally unique `ID` which will identify a single `Spot` to be updated. */
  readonly nodeId: Scalars["ID"],
  /** An object where the defined keys will be set on the `Spot` being updated. */
  readonly patch: SpotPatch,
};

/** All input for the `updateSpot` mutation. */
export type UpdateSpotInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** An object where the defined keys will be set on the `Spot` being updated. */
  readonly patch: SpotPatch,
  readonly id: Scalars["String"],
};

/** The output of our update `Spot` mutation. */
export type UpdateSpotPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Spot` that was updated by this mutation. */
  readonly spot?: Maybe<Spot>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `Guide` that is related to this `Spot`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Reads a single `User` that is related to this `Spot`. */
  readonly userByOwner?: Maybe<User>,
  /** Reads a single `Stage` that is related to this `Spot`. */
  readonly stageByStage?: Maybe<Stage>,
  /** An edge for our `Spot`. May be used by Relay 1. */
  readonly spotEdge?: Maybe<SpotsEdge>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The globally unique `ID` which will identify a single `Stage` to be updated. */
  readonly nodeId: Scalars["ID"],
  /** An object where the defined keys will be set on the `Stage` being updated. */
  readonly patch: StagePatch,
};

/** All input for the `updateStage` mutation. */
export type UpdateStageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** An object where the defined keys will be set on the `Stage` being updated. */
  readonly patch: StagePatch,
  readonly id: Scalars["String"],
};

/** The output of our update `Stage` mutation. */
export type UpdateStagePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Stage` that was updated by this mutation. */
  readonly stage?: Maybe<Stage>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** Reads a single `Guide` that is related to this `Stage`. */
  readonly guideByGuide?: Maybe<Guide>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByFromSpot?: Maybe<Spot>,
  /** Reads a single `Spot` that is related to this `Stage`. */
  readonly spotByToSpot?: Maybe<Spot>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The globally unique `ID` which will identify a single `Temperature` to be updated. */
  readonly nodeId: Scalars["ID"],
  /** An object where the defined keys will be set on the `Temperature` being updated. */
  readonly patch: TemperaturePatch,
};

/** All input for the `updateTemperature` mutation. */
export type UpdateTemperatureInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** An object where the defined keys will be set on the `Temperature` being updated. */
  readonly patch: TemperaturePatch,
  readonly id: Scalars["String"],
};

/** The output of our update `Temperature` mutation. */
export type UpdateTemperaturePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `Temperature` that was updated by this mutation. */
  readonly temperature?: Maybe<Temperature>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
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
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  readonly nodeId: Scalars["ID"],
  /** An object where the defined keys will be set on the `User` being updated. */
  readonly patch: UserPatch,
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** An object where the defined keys will be set on the `User` being updated. */
  readonly patch: UserPatch,
  readonly username: Scalars["String"],
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars["String"]>,
  /** The `User` that was updated by this mutation. */
  readonly user?: Maybe<User>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>,
  /** An edge for our `User`. May be used by Relay 1. */
  readonly userEdge?: Maybe<UsersEdge>,
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<UsersOrderBy>>
};

export type User = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars["ID"],
  readonly username: Scalars["String"],
  readonly email: Scalars["String"],
  readonly passwordHash: Scalars["String"],
  /** Reads and enables pagination through a set of `Guide`. */
  readonly guidesByOwner: GuidesConnection,
  /** Reads and enables pagination through a set of `Spot`. */
  readonly spotsByOwner: SpotsConnection,
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByOwner: RidesConnection,
};


export type UserGuidesByOwnerArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>,
  condition?: Maybe<GuideCondition>
};


export type UserSpotsByOwnerArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>,
  condition?: Maybe<SpotCondition>
};


export type UserRidesByOwnerArgs = {
  first?: Maybe<Scalars["Int"]>,
  last?: Maybe<Scalars["Int"]>,
  offset?: Maybe<Scalars["Int"]>,
  before?: Maybe<Scalars["Cursor"]>,
  after?: Maybe<Scalars["Cursor"]>,
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>,
  condition?: Maybe<RideCondition>
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `username` field. */
  readonly username?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `email` field. */
  readonly email?: Maybe<Scalars["String"]>,
  /** Checks for equality with the object’s `passwordHash` field. */
  readonly passwordHash?: Maybe<Scalars["String"]>,
};

/** An input for mutations affecting `User` */
export type UserInput = {
  readonly username: Scalars["String"],
  readonly email: Scalars["String"],
  readonly passwordHash: Scalars["String"],
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  readonly username?: Maybe<Scalars["String"]>,
  readonly email?: Maybe<Scalars["String"]>,
  readonly passwordHash?: Maybe<Scalars["String"]>,
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  /** A list of `User` objects. */
  readonly nodes: ReadonlyArray<Maybe<User>>,
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<UsersEdge>,
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo,
  /** The count of *all* `User` you could get from the connection. */
  readonly totalCount: Scalars["Int"],
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars["Cursor"]>,
  /** The `User` at the end of the edge. */
  readonly node?: Maybe<User>,
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  Natural = "NATURAL",
  UsernameAsc = "USERNAME_ASC",
  UsernameDesc = "USERNAME_DESC",
  EmailAsc = "EMAIL_ASC",
  EmailDesc = "EMAIL_DESC",
  PasswordHashAsc = "PASSWORD_HASH_ASC",
  PasswordHashDesc = "PASSWORD_HASH_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}
