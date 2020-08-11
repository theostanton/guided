import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
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
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: any;
  /**
   * A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519)
   * which securely represents claims between two parties.
   */
  JwtToken: any;
};

export type AddSpotInput = {
  readonly guideId: Scalars['String'];
  readonly lat: Scalars['Float'];
  readonly long: Scalars['Float'];
  readonly label?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly nights: Scalars['Int'];
};

export type AddSpotResult = {
  readonly success: Scalars['Boolean'];
  readonly messaage?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
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


/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export type BigIntFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['BigInt']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['BigInt']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['BigInt']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['BigInt']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['BigInt']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['BigInt']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['BigInt']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['Boolean']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['Boolean']>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['Boolean']>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['Boolean']>;
};

export type Bound = {
  readonly north?: Maybe<Scalars['Float']>;
  readonly east?: Maybe<Scalars['Float']>;
  readonly south?: Maybe<Scalars['Float']>;
  readonly west?: Maybe<Scalars['Float']>;
};

export enum Colour {
  Red = 'RED',
  Orange = 'ORANGE',
  Yellow = 'YELLOW',
  Olive = 'OLIVE',
  Green = 'GREEN',
  Teal = 'TEAL',
  Blue = 'BLUE',
  Violet = 'VIOLET',
  Purple = 'PURPLE',
  Pink = 'PINK',
  Brown = 'BROWN',
  Grey = 'GREY',
  Black = 'BLACK'
}

/** A filter to be used against Colour fields. All fields are combined with a logical ‘and.’ */
export type ColourFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Colour>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Colour>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Colour>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Colour>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Colour>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Colour>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Colour>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Colour>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Colour>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Colour>;
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

/** A filter to be used against `Computation` object types. All fields are combined with a logical ‘and.’ */
export type ComputationFilter = {
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<StringFilter>;
  /** Filter by the object’s `ended` field. */
  readonly ended?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `duration` field. */
  readonly duration?: Maybe<IntFilter>;
  /** Filter by the object’s `status` field. */
  readonly status?: Maybe<ComputationStatusFilter>;
  /** Filter by the object’s `stage` field. */
  readonly stage?: Maybe<StringFilter>;
  /** Filter by the object’s `guide` field. */
  readonly guide?: Maybe<StringFilter>;
  /** Filter by the object’s `created` field. */
  readonly created?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `started` field. */
  readonly started?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<ComputationFilter>>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<ComputationFilter>>;
  /** Negates the expression. */
  readonly not?: Maybe<ComputationFilter>;
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

/** A filter to be used against ComputationStatus fields. All fields are combined with a logical ‘and.’ */
export type ComputationStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<ComputationStatus>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<ComputationStatus>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<ComputationStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<ComputationStatus>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<ComputationStatus>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<ComputationStatus>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<ComputationStatus>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<ComputationStatus>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<ComputationStatus>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<ComputationStatus>;
};

/** All input for the create `FeedEvent` mutation. */
export type CreateFeedEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `FeedEvent` to be created by this mutation. */
  readonly feedEvent: FeedEventInput;
};

/** The output of our create `FeedEvent` mutation. */
export type CreateFeedEventPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `FeedEvent` that was created by this mutation. */
  readonly feedEvent?: Maybe<FeedEvent>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Ride` that is related to this `FeedEvent`. */
  readonly rideByRide?: Maybe<Ride>;
  /** Reads a single `Guide` that is related to this `FeedEvent`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `User` that is related to this `FeedEvent`. */
  readonly userByUser?: Maybe<User>;
  /** An edge for our `FeedEvent`. May be used by Relay 1. */
  readonly feedEventEdge?: Maybe<FeedEventsEdge>;
};


/** The output of our create `FeedEvent` mutation. */
export type CreateFeedEventPayloadFeedEventEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<FeedEventsOrderBy>>;
};

export type CreateGuideInput = {
  readonly title: Scalars['String'];
  readonly isCircular?: Maybe<Scalars['Boolean']>;
  readonly maxHoursPerRide: Scalars['Int'];
  readonly type: TransportType;
  readonly startDate?: Maybe<Scalars['String']>;
};

export type CreateGuideResult = {
  readonly success: Scalars['Boolean'];
  readonly message?: Maybe<Scalars['String']>;
  readonly guideId?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<Scalars['String']>;
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



/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['Datetime']>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['Datetime']>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['Datetime']>;
};

/** All input for the `deleteFeedEventByNodeId` mutation. */
export type DeleteFeedEventByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FeedEvent` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteFeedEvent` mutation. */
export type DeleteFeedEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly timestamp: Scalars['Datetime'];
};

/** The output of our delete `FeedEvent` mutation. */
export type DeleteFeedEventPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `FeedEvent` that was deleted by this mutation. */
  readonly feedEvent?: Maybe<FeedEvent>;
  readonly deletedFeedEventNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Ride` that is related to this `FeedEvent`. */
  readonly rideByRide?: Maybe<Ride>;
  /** Reads a single `Guide` that is related to this `FeedEvent`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `User` that is related to this `FeedEvent`. */
  readonly userByUser?: Maybe<User>;
  /** An edge for our `FeedEvent`. May be used by Relay 1. */
  readonly feedEventEdge?: Maybe<FeedEventsEdge>;
};


/** The output of our delete `FeedEvent` mutation. */
export type DeleteFeedEventPayloadFeedEventEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<FeedEventsOrderBy>>;
};

export type DeleteGuideInput = {
  readonly id: Scalars['String'];
};

export type DeleteGuideResult = {
  readonly success: Scalars['Boolean'];
  readonly message?: Maybe<Scalars['String']>;
};

export type FeedEvent = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly timestamp: Scalars['Datetime'];
  readonly type: FeedEventType;
  readonly ride?: Maybe<Scalars['String']>;
  readonly guide?: Maybe<Scalars['String']>;
  readonly user?: Maybe<Scalars['String']>;
  /** Reads a single `Ride` that is related to this `FeedEvent`. */
  readonly rideByRide?: Maybe<Ride>;
  /** Reads a single `Guide` that is related to this `FeedEvent`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `User` that is related to this `FeedEvent`. */
  readonly userByUser?: Maybe<User>;
};

/**
 * A condition to be used against `FeedEvent` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FeedEventCondition = {
  /** Checks for equality with the object’s `timestamp` field. */
  readonly timestamp?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `type` field. */
  readonly type?: Maybe<FeedEventType>;
  /** Checks for equality with the object’s `ride` field. */
  readonly ride?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `guide` field. */
  readonly guide?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `user` field. */
  readonly user?: Maybe<Scalars['String']>;
};

/** A filter to be used against `FeedEvent` object types. All fields are combined with a logical ‘and.’ */
export type FeedEventFilter = {
  /** Filter by the object’s `timestamp` field. */
  readonly timestamp?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `type` field. */
  readonly type?: Maybe<FeedEventTypeFilter>;
  /** Filter by the object’s `ride` field. */
  readonly ride?: Maybe<StringFilter>;
  /** Filter by the object’s `guide` field. */
  readonly guide?: Maybe<StringFilter>;
  /** Filter by the object’s `user` field. */
  readonly user?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<FeedEventFilter>>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<FeedEventFilter>>;
  /** Negates the expression. */
  readonly not?: Maybe<FeedEventFilter>;
};

/** An input for mutations affecting `FeedEvent` */
export type FeedEventInput = {
  readonly timestamp: Scalars['Datetime'];
  readonly type: FeedEventType;
  readonly ride?: Maybe<Scalars['String']>;
  readonly guide?: Maybe<Scalars['String']>;
  readonly user?: Maybe<Scalars['String']>;
};

/** Represents an update to a `FeedEvent`. Fields that are set will be updated. */
export type FeedEventPatch = {
  readonly timestamp?: Maybe<Scalars['Datetime']>;
  readonly type?: Maybe<FeedEventType>;
  readonly ride?: Maybe<Scalars['String']>;
  readonly guide?: Maybe<Scalars['String']>;
  readonly user?: Maybe<Scalars['String']>;
};

/** A connection to a list of `FeedEvent` values. */
export type FeedEventsConnection = {
  /** A list of `FeedEvent` objects. */
  readonly nodes: ReadonlyArray<Maybe<FeedEvent>>;
  /** A list of edges which contains the `FeedEvent` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<FeedEventsEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `FeedEvent` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A `FeedEvent` edge in the connection. */
export type FeedEventsEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `FeedEvent` at the end of the edge. */
  readonly node?: Maybe<FeedEvent>;
};

/** Methods to use when ordering `FeedEvent`. */
export enum FeedEventsOrderBy {
  Natural = 'NATURAL',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  RideAsc = 'RIDE_ASC',
  RideDesc = 'RIDE_DESC',
  GuideAsc = 'GUIDE_ASC',
  GuideDesc = 'GUIDE_DESC',
  UserAsc = 'USER_ASC',
  UserDesc = 'USER_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum FeedEventType {
  NewGuide = 'NEW_GUIDE',
  NewFollows = 'NEW_FOLLOWS',
  SelfCreated = 'SELF_CREATED',
  Joined = 'JOINED'
}

/** A filter to be used against FeedEventType fields. All fields are combined with a logical ‘and.’ */
export type FeedEventTypeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<FeedEventType>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<FeedEventType>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<FeedEventType>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<FeedEventType>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<FeedEventType>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<FeedEventType>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<FeedEventType>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<FeedEventType>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<FeedEventType>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<FeedEventType>;
};

/** A filter to be used against Float fields. All fields are combined with a logical ‘and.’ */
export type FloatFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['Float']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['Float']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['Float']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['Float']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['Float']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['Float']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['Float']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['Float']>;
};

export type Follow = {
  readonly followed: Scalars['String'];
  readonly follower: Scalars['String'];
  readonly timestamp: Scalars['Datetime'];
  /** Reads a single `User` that is related to this `Follow`. */
  readonly userByFollowed?: Maybe<User>;
  /** Reads a single `User` that is related to this `Follow`. */
  readonly userByFollower?: Maybe<User>;
};

/** A condition to be used against `Follow` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type FollowCondition = {
  /** Checks for equality with the object’s `followed` field. */
  readonly followed?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `follower` field. */
  readonly follower?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `timestamp` field. */
  readonly timestamp?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `Follow` object types. All fields are combined with a logical ‘and.’ */
export type FollowFilter = {
  /** Filter by the object’s `followed` field. */
  readonly followed?: Maybe<StringFilter>;
  /** Filter by the object’s `follower` field. */
  readonly follower?: Maybe<StringFilter>;
  /** Filter by the object’s `timestamp` field. */
  readonly timestamp?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<FollowFilter>>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<FollowFilter>>;
  /** Negates the expression. */
  readonly not?: Maybe<FollowFilter>;
};

export enum FollowingStatus {
  Following = 'FOLLOWING',
  IsSelf = 'IS_SELF',
  NotFollowing = 'NOT_FOLLOWING',
  Anonymous = 'ANONYMOUS'
}

/** A filter to be used against FollowingStatus fields. All fields are combined with a logical ‘and.’ */
export type FollowingStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<FollowingStatus>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<FollowingStatus>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<FollowingStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<FollowingStatus>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<FollowingStatus>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<FollowingStatus>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<FollowingStatus>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<FollowingStatus>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<FollowingStatus>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<FollowingStatus>;
};

/** A connection to a list of `Follow` values. */
export type FollowsConnection = {
  /** A list of `Follow` objects. */
  readonly nodes: ReadonlyArray<Maybe<Follow>>;
  /** A list of edges which contains the `Follow` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<FollowsEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Follow` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A `Follow` edge in the connection. */
export type FollowsEdge = {
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `Follow` at the end of the edge. */
  readonly node?: Maybe<Follow>;
};

/** Methods to use when ordering `Follow`. */
export enum FollowsOrderBy {
  Natural = 'NATURAL',
  FollowedAsc = 'FOLLOWED_ASC',
  FollowedDesc = 'FOLLOWED_DESC',
  FollowerAsc = 'FOLLOWER_ASC',
  FollowerDesc = 'FOLLOWER_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC'
}

export type Geocode = {
  readonly countryCode: Scalars['String'];
  readonly latitude: Scalars['Float'];
  readonly longitude: Scalars['Float'];
  readonly label: Scalars['String'];
};

export type GeocodeResponse = {
  readonly success: Scalars['Boolean'];
  readonly geocodes?: Maybe<ReadonlyArray<Maybe<Geocode>>>;
};

export type Guide = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly id: Scalars['String'];
  readonly title: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly owner: Scalars['String'];
  readonly startDate?: Maybe<Scalars['String']>;
  readonly isCircular: Scalars['Boolean'];
  readonly transportType: TransportType;
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
  /** Reads and enables pagination through a set of `FeedEvent`. */
  readonly feedEventsByGuide: FeedEventsConnection;
  readonly bounds?: Maybe<Bound>;
  readonly countries?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly distanceMeters?: Maybe<Scalars['BigInt']>;
  readonly durationSeconds?: Maybe<Scalars['BigInt']>;
  readonly endDate?: Maybe<Scalars['String']>;
  readonly isMine?: Maybe<Scalars['Boolean']>;
};


export type GuideSpotsByGuideArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>;
  condition?: Maybe<SpotCondition>;
  filter?: Maybe<SpotFilter>;
};


export type GuideStagesByGuideArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>;
  condition?: Maybe<StageCondition>;
  filter?: Maybe<StageFilter>;
};


export type GuideRidesByGuideArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
  condition?: Maybe<RideCondition>;
  filter?: Maybe<RideFilter>;
};


export type GuideComputationsByGuideArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<ComputationsOrderBy>>;
  condition?: Maybe<ComputationCondition>;
  filter?: Maybe<ComputationFilter>;
};


export type GuideFeedEventsByGuideArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<FeedEventsOrderBy>>;
  condition?: Maybe<FeedEventCondition>;
  filter?: Maybe<FeedEventFilter>;
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
  /** Checks for equality with the object’s `isCircular` field. */
  readonly isCircular?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `transportType` field. */
  readonly transportType?: Maybe<TransportType>;
  /** Checks for equality with the object’s `maxHoursPerRide` field. */
  readonly maxHoursPerRide?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `created` field. */
  readonly created?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updated` field. */
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `Guide` object types. All fields are combined with a logical ‘and.’ */
export type GuideFilter = {
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<StringFilter>;
  /** Filter by the object’s `title` field. */
  readonly title?: Maybe<StringFilter>;
  /** Filter by the object’s `slug` field. */
  readonly slug?: Maybe<StringFilter>;
  /** Filter by the object’s `owner` field. */
  readonly owner?: Maybe<StringFilter>;
  /** Filter by the object’s `startDate` field. */
  readonly startDate?: Maybe<StringFilter>;
  /** Filter by the object’s `isCircular` field. */
  readonly isCircular?: Maybe<BooleanFilter>;
  /** Filter by the object’s `transportType` field. */
  readonly transportType?: Maybe<TransportTypeFilter>;
  /** Filter by the object’s `maxHoursPerRide` field. */
  readonly maxHoursPerRide?: Maybe<IntFilter>;
  /** Filter by the object’s `created` field. */
  readonly created?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updated` field. */
  readonly updated?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `countries` field. */
  readonly countries?: Maybe<StringListFilter>;
  /** Filter by the object’s `distanceMeters` field. */
  readonly distanceMeters?: Maybe<BigIntFilter>;
  /** Filter by the object’s `durationSeconds` field. */
  readonly durationSeconds?: Maybe<BigIntFilter>;
  /** Filter by the object’s `endDate` field. */
  readonly endDate?: Maybe<StringFilter>;
  /** Filter by the object’s `isMine` field. */
  readonly isMine?: Maybe<BooleanFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<GuideFilter>>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<GuideFilter>>;
  /** Negates the expression. */
  readonly not?: Maybe<GuideFilter>;
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
  IsCircularAsc = 'IS_CIRCULAR_ASC',
  IsCircularDesc = 'IS_CIRCULAR_DESC',
  TransportTypeAsc = 'TRANSPORT_TYPE_ASC',
  TransportTypeDesc = 'TRANSPORT_TYPE_DESC',
  MaxHoursPerRideAsc = 'MAX_HOURS_PER_RIDE_ASC',
  MaxHoursPerRideDesc = 'MAX_HOURS_PER_RIDE_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  UpdatedAsc = 'UPDATED_ASC',
  UpdatedDesc = 'UPDATED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['Int']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['Int']>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  /** Creates a single `FeedEvent`. */
  readonly createFeedEvent?: Maybe<CreateFeedEventPayload>;
  /** Creates a single `User`. */
  readonly createUser?: Maybe<CreateUserPayload>;
  /** Updates a single `FeedEvent` using its globally unique id and a patch. */
  readonly updateFeedEventByNodeId?: Maybe<UpdateFeedEventPayload>;
  /** Updates a single `FeedEvent` using a unique key and a patch. */
  readonly updateFeedEvent?: Maybe<UpdateFeedEventPayload>;
  /** Deletes a single `FeedEvent` using its globally unique id. */
  readonly deleteFeedEventByNodeId?: Maybe<DeleteFeedEventPayload>;
  /** Deletes a single `FeedEvent` using a unique key. */
  readonly deleteFeedEvent?: Maybe<DeleteFeedEventPayload>;
  /** Creates a JWT token that will securely identify a person and give them certain permissions. This token expires in 2 days. */
  readonly authenticate?: Maybe<AuthenticatePayload>;
  /** Registers a single user */
  readonly register?: Maybe<RegisterPayload>;
  readonly createGuide: CreateGuideResult;
  readonly updateGuide: UpdateGuideResult;
  readonly deleteGuide: DeleteGuideResult;
  readonly followUser: Result;
  readonly unfollowUser: Result;
  readonly addSpot: AddSpotResult;
  readonly updateSpot: UpdateSpotResult;
  readonly removeSpot: RemoveSpotResult;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFeedEventArgs = {
  input: CreateFeedEventInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFeedEventByNodeIdArgs = {
  input: UpdateFeedEventByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFeedEventArgs = {
  input: UpdateFeedEventInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFeedEventByNodeIdArgs = {
  input: DeleteFeedEventByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFeedEventArgs = {
  input: DeleteFeedEventInput;
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
export type MutationCreateGuideArgs = {
  input?: Maybe<CreateGuideInput>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGuideArgs = {
  input?: Maybe<UpdateGuidePatch>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGuideArgs = {
  input?: Maybe<DeleteGuideInput>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationFollowUserArgs = {
  username: Scalars['String'];
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUnfollowUserArgs = {
  username: Scalars['String'];
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAddSpotArgs = {
  input: AddSpotInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSpotArgs = {
  input: UpdateSpotPatch;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRemoveSpotArgs = {
  input: RemoveSpotInput;
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
  /** Reads and enables pagination through a set of `FeedEvent`. */
  readonly feedEvents?: Maybe<FeedEventsConnection>;
  /** Reads and enables pagination through a set of `Follow`. */
  readonly follows?: Maybe<FollowsConnection>;
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
  readonly feedEvent?: Maybe<FeedEvent>;
  readonly guide?: Maybe<Guide>;
  readonly ride?: Maybe<Ride>;
  readonly spot?: Maybe<Spot>;
  readonly stage?: Maybe<Stage>;
  readonly temperature?: Maybe<Temperature>;
  readonly user?: Maybe<User>;
  readonly countries?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Reads and enables pagination through a set of `FeedEvent`. */
  readonly feed: FeedEventsConnection;
  readonly getCurrentUser?: Maybe<Scalars['JwtToken']>;
  /** Reads a single `Computation` using its globally unique `ID`. */
  readonly computationByNodeId?: Maybe<Computation>;
  /** Reads a single `FeedEvent` using its globally unique `ID`. */
  readonly feedEventByNodeId?: Maybe<FeedEvent>;
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
  readonly geocode: GeocodeResponse;
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
  filter?: Maybe<ComputationFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFeedEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<FeedEventsOrderBy>>;
  condition?: Maybe<FeedEventCondition>;
  filter?: Maybe<FeedEventFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFollowsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<FollowsOrderBy>>;
  condition?: Maybe<FollowCondition>;
  filter?: Maybe<FollowFilter>;
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
  filter?: Maybe<GuideFilter>;
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
  filter?: Maybe<RideFilter>;
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
  filter?: Maybe<SpotFilter>;
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
  filter?: Maybe<StageFilter>;
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
  filter?: Maybe<TemperatureFilter>;
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
  filter?: Maybe<UserFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryComputationArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeedEventArgs = {
  timestamp: Scalars['Datetime'];
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
export type QueryFeedArgs = {
  _username?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  pageOffset?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<FeedEventFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryComputationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeedEventByNodeIdArgs = {
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


/** The root query type which gives access points into the data universe. */
export type QueryGeocodeArgs = {
  query: Scalars['String'];
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

export type RemoveSpotInput = {
  readonly id: Scalars['String'];
};

export type RemoveSpotResult = {
  readonly success: Scalars['Boolean'];
  readonly message?: Maybe<Scalars['String']>;
};

export type Result = {
  readonly success: Scalars['Boolean'];
  readonly message?: Maybe<Scalars['String']>;
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
  /** Reads and enables pagination through a set of `FeedEvent`. */
  readonly feedEventsByRide: FeedEventsConnection;
  readonly countries?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly hasBorder?: Maybe<Scalars['Boolean']>;
  readonly isMine?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
};


export type RideFeedEventsByRideArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<FeedEventsOrderBy>>;
  condition?: Maybe<FeedEventCondition>;
  filter?: Maybe<FeedEventFilter>;
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

/** A filter to be used against `Ride` object types. All fields are combined with a logical ‘and.’ */
export type RideFilter = {
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<StringFilter>;
  /** Filter by the object’s `guide` field. */
  readonly guide?: Maybe<StringFilter>;
  /** Filter by the object’s `owner` field. */
  readonly owner?: Maybe<StringFilter>;
  /** Filter by the object’s `fromSpot` field. */
  readonly fromSpot?: Maybe<StringFilter>;
  /** Filter by the object’s `toSpot` field. */
  readonly toSpot?: Maybe<StringFilter>;
  /** Filter by the object’s `pathUrl` field. */
  readonly pathUrl?: Maybe<StringFilter>;
  /** Filter by the object’s `durationSeconds` field. */
  readonly durationSeconds?: Maybe<IntFilter>;
  /** Filter by the object’s `distanceMeters` field. */
  readonly distanceMeters?: Maybe<IntFilter>;
  /** Filter by the object’s `date` field. */
  readonly date?: Maybe<StringFilter>;
  /** Filter by the object’s `stage` field. */
  readonly stage?: Maybe<StringFilter>;
  /** Filter by the object’s `position` field. */
  readonly position?: Maybe<StringFilter>;
  /** Filter by the object’s `status` field. */
  readonly status?: Maybe<RideStatusFilter>;
  /** Filter by the object’s `created` field. */
  readonly created?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updated` field. */
  readonly updated?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `countries` field. */
  readonly countries?: Maybe<StringListFilter>;
  /** Filter by the object’s `hasBorder` field. */
  readonly hasBorder?: Maybe<BooleanFilter>;
  /** Filter by the object’s `isMine` field. */
  readonly isMine?: Maybe<BooleanFilter>;
  /** Filter by the object’s `name` field. */
  readonly name?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<RideFilter>>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<RideFilter>>;
  /** Negates the expression. */
  readonly not?: Maybe<RideFilter>;
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

/** A filter to be used against RideStatus fields. All fields are combined with a logical ‘and.’ */
export type RideStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<RideStatus>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<RideStatus>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<RideStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<RideStatus>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<RideStatus>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<RideStatus>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<RideStatus>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<RideStatus>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<RideStatus>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<RideStatus>;
};

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
  readonly isMine?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
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
  filter?: Maybe<StageFilter>;
};


export type SpotStagesByToSpotArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<StagesOrderBy>>;
  condition?: Maybe<StageCondition>;
  filter?: Maybe<StageFilter>;
};


export type SpotRidesByFromSpotArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
  condition?: Maybe<RideCondition>;
  filter?: Maybe<RideFilter>;
};


export type SpotRidesByToSpotArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
  condition?: Maybe<RideCondition>;
  filter?: Maybe<RideFilter>;
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

/** A filter to be used against `Spot` object types. All fields are combined with a logical ‘and.’ */
export type SpotFilter = {
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<StringFilter>;
  /** Filter by the object’s `label` field. */
  readonly label?: Maybe<StringFilter>;
  /** Filter by the object’s `guide` field. */
  readonly guide?: Maybe<StringFilter>;
  /** Filter by the object’s `owner` field. */
  readonly owner?: Maybe<StringFilter>;
  /** Filter by the object’s `nights` field. */
  readonly nights?: Maybe<IntFilter>;
  /** Filter by the object’s `locked` field. */
  readonly locked?: Maybe<BooleanFilter>;
  /** Filter by the object’s `lat` field. */
  readonly lat?: Maybe<FloatFilter>;
  /** Filter by the object’s `long` field. */
  readonly long?: Maybe<FloatFilter>;
  /** Filter by the object’s `position` field. */
  readonly position?: Maybe<StringFilter>;
  /** Filter by the object’s `location` field. */
  readonly location?: Maybe<StringFilter>;
  /** Filter by the object’s `country` field. */
  readonly country?: Maybe<StringFilter>;
  /** Filter by the object’s `date` field. */
  readonly date?: Maybe<StringFilter>;
  /** Filter by the object’s `created` field. */
  readonly created?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updated` field. */
  readonly updated?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `stage` field. */
  readonly stage?: Maybe<StringFilter>;
  /** Filter by the object’s `isMine` field. */
  readonly isMine?: Maybe<BooleanFilter>;
  /** Filter by the object’s `name` field. */
  readonly name?: Maybe<StringFilter>;
  /** Filter by the object’s `temperature` field. */
  readonly temperature?: Maybe<FloatFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<SpotFilter>>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<SpotFilter>>;
  /** Negates the expression. */
  readonly not?: Maybe<SpotFilter>;
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
  readonly name?: Maybe<Scalars['String']>;
};


export type StageSpotsByStageArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>;
  condition?: Maybe<SpotCondition>;
  filter?: Maybe<SpotFilter>;
};


export type StageRidesByStageArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
  condition?: Maybe<RideCondition>;
  filter?: Maybe<RideFilter>;
};


export type StageComputationsByStageArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<ComputationsOrderBy>>;
  condition?: Maybe<ComputationCondition>;
  filter?: Maybe<ComputationFilter>;
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

/** A filter to be used against `Stage` object types. All fields are combined with a logical ‘and.’ */
export type StageFilter = {
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<StringFilter>;
  /** Filter by the object’s `guide` field. */
  readonly guide?: Maybe<StringFilter>;
  /** Filter by the object’s `fromSpot` field. */
  readonly fromSpot?: Maybe<StringFilter>;
  /** Filter by the object’s `toSpot` field. */
  readonly toSpot?: Maybe<StringFilter>;
  /** Filter by the object’s `created` field. */
  readonly created?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updated` field. */
  readonly updated?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `status` field. */
  readonly status?: Maybe<StageStatusFilter>;
  /** Filter by the object’s `position` field. */
  readonly position?: Maybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  readonly name?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<StageFilter>>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<StageFilter>>;
  /** Negates the expression. */
  readonly not?: Maybe<StageFilter>;
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

/** A filter to be used against StageStatus fields. All fields are combined with a logical ‘and.’ */
export type StageStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<StageStatus>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<StageStatus>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<StageStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<StageStatus>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<StageStatus>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<StageStatus>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<StageStatus>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<StageStatus>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<StageStatus>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<StageStatus>;
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['String']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-sensitive). */
  readonly includes?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-sensitive). */
  readonly notIncludes?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  readonly includesInsensitive?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  readonly notIncludesInsensitive?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  readonly startsWith?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  readonly notStartsWith?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  readonly startsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  readonly notStartsWithInsensitive?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  readonly endsWith?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  readonly notEndsWith?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  readonly endsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  readonly notEndsWithInsensitive?: Maybe<Scalars['String']>;
  /**
   * Matches the specified pattern (case-sensitive). An underscore (_) matches any
   * single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  readonly like?: Maybe<Scalars['String']>;
  /**
   * Does not match the specified pattern (case-sensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  readonly notLike?: Maybe<Scalars['String']>;
  /**
   * Matches the specified pattern (case-insensitive). An underscore (_) matches
   * any single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  readonly likeInsensitive?: Maybe<Scalars['String']>;
  /**
   * Does not match the specified pattern (case-insensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  readonly notLikeInsensitive?: Maybe<Scalars['String']>;
  /** Matches the specified pattern using the SQL standard's definition of a regular expression. */
  readonly similarTo?: Maybe<Scalars['String']>;
  /** Does not match the specified pattern using the SQL standard's definition of a regular expression. */
  readonly notSimilarTo?: Maybe<Scalars['String']>;
};

/** A filter to be used against String List fields. All fields are combined with a logical ‘and.’ */
export type StringListFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Contains the specified list of values. */
  readonly contains?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Contained by the specified list of values. */
  readonly containedBy?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Overlaps the specified list of values. */
  readonly overlaps?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Any array item is equal to the specified value. */
  readonly anyEqualTo?: Maybe<Scalars['String']>;
  /** Any array item is not equal to the specified value. */
  readonly anyNotEqualTo?: Maybe<Scalars['String']>;
  /** Any array item is less than the specified value. */
  readonly anyLessThan?: Maybe<Scalars['String']>;
  /** Any array item is less than or equal to the specified value. */
  readonly anyLessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Any array item is greater than the specified value. */
  readonly anyGreaterThan?: Maybe<Scalars['String']>;
  /** Any array item is greater than or equal to the specified value. */
  readonly anyGreaterThanOrEqualTo?: Maybe<Scalars['String']>;
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
  /** Reads and enables pagination through a set of `FeedEvent`. (live) */
  readonly feedEvents?: Maybe<FeedEventsConnection>;
  /** Reads and enables pagination through a set of `Follow`. (live) */
  readonly follows?: Maybe<FollowsConnection>;
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
  readonly feedEvent?: Maybe<FeedEvent>;
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
  readonly countries?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Reads and enables pagination through a set of `FeedEvent`. (live) */
  readonly feed: FeedEventsConnection;
  /**  (live) */
  readonly getCurrentUser?: Maybe<Scalars['JwtToken']>;
  /** Reads a single `Computation` using its globally unique `ID`. (live) */
  readonly computationByNodeId?: Maybe<Computation>;
  /** Reads a single `FeedEvent` using its globally unique `ID`. (live) */
  readonly feedEventByNodeId?: Maybe<FeedEvent>;
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
  readonly geocode: GeocodeResponse;
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
  filter?: Maybe<ComputationFilter>;
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
export type SubscriptionFeedEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<FeedEventsOrderBy>>;
  condition?: Maybe<FeedEventCondition>;
  filter?: Maybe<FeedEventFilter>;
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
export type SubscriptionFollowsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<FollowsOrderBy>>;
  condition?: Maybe<FollowCondition>;
  filter?: Maybe<FollowFilter>;
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
  filter?: Maybe<GuideFilter>;
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
  filter?: Maybe<RideFilter>;
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
  filter?: Maybe<SpotFilter>;
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
  filter?: Maybe<StageFilter>;
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
  filter?: Maybe<TemperatureFilter>;
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
  filter?: Maybe<UserFilter>;
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
export type SubscriptionFeedEventArgs = {
  timestamp: Scalars['Datetime'];
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
export type SubscriptionFeedArgs = {
  _username?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  pageOffset?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<FeedEventFilter>;
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
export type SubscriptionFeedEventByNodeIdArgs = {
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
export type SubscriptionGeocodeArgs = {
  query: Scalars['String'];
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

/** A filter to be used against `Temperature` object types. All fields are combined with a logical ‘and.’ */
export type TemperatureFilter = {
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<StringFilter>;
  /** Filter by the object’s `country` field. */
  readonly country?: Maybe<StringFilter>;
  /** Filter by the object’s `month` field. */
  readonly month?: Maybe<IntFilter>;
  /** Filter by the object’s `temperature` field. */
  readonly temperature?: Maybe<FloatFilter>;
  /** Filter by the object’s `created` field. */
  readonly created?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updated` field. */
  readonly updated?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<TemperatureFilter>>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<TemperatureFilter>>;
  /** Negates the expression. */
  readonly not?: Maybe<TemperatureFilter>;
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

export enum TransportType {
  Motorcycle = 'MOTORCYCLE',
  Bicycle = 'BICYCLE',
  Car = 'CAR'
}

/** A filter to be used against TransportType fields. All fields are combined with a logical ‘and.’ */
export type TransportTypeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<TransportType>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<TransportType>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<TransportType>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<TransportType>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<TransportType>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<TransportType>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<TransportType>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<TransportType>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<TransportType>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<TransportType>;
};

/** All input for the `updateFeedEventByNodeId` mutation. */
export type UpdateFeedEventByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FeedEvent` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `FeedEvent` being updated. */
  readonly patch: FeedEventPatch;
};

/** All input for the `updateFeedEvent` mutation. */
export type UpdateFeedEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FeedEvent` being updated. */
  readonly patch: FeedEventPatch;
  readonly timestamp: Scalars['Datetime'];
};

/** The output of our update `FeedEvent` mutation. */
export type UpdateFeedEventPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `FeedEvent` that was updated by this mutation. */
  readonly feedEvent?: Maybe<FeedEvent>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Ride` that is related to this `FeedEvent`. */
  readonly rideByRide?: Maybe<Ride>;
  /** Reads a single `Guide` that is related to this `FeedEvent`. */
  readonly guideByGuide?: Maybe<Guide>;
  /** Reads a single `User` that is related to this `FeedEvent`. */
  readonly userByUser?: Maybe<User>;
  /** An edge for our `FeedEvent`. May be used by Relay 1. */
  readonly feedEventEdge?: Maybe<FeedEventsEdge>;
};


/** The output of our update `FeedEvent` mutation. */
export type UpdateFeedEventPayloadFeedEventEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<FeedEventsOrderBy>>;
};

export type UpdateGuidePatch = {
  readonly id: Scalars['String'];
  readonly title?: Maybe<Scalars['String']>;
  readonly startDate?: Maybe<Scalars['String']>;
  readonly isCircular?: Maybe<Scalars['Boolean']>;
  readonly maxHoursPerRide?: Maybe<Scalars['Int']>;
  readonly type?: Maybe<TransportType>;
};

export type UpdateGuideResult = {
  readonly success: Scalars['Boolean'];
  readonly message?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly triggeredDates?: Maybe<Scalars['Boolean']>;
  readonly triggeredComputations?: Maybe<Scalars['Boolean']>;
};

export type UpdateSpotLocationPatch = {
  readonly lat: Scalars['Float'];
  readonly long: Scalars['Float'];
  readonly location?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
};

export type UpdateSpotPatch = {
  readonly id: Scalars['String'];
  readonly label?: Maybe<Scalars['String']>;
  readonly nights?: Maybe<Scalars['Int']>;
  readonly location?: Maybe<UpdateSpotLocationPatch>;
};

export type UpdateSpotResult = {
  readonly success: Scalars['Boolean'];
  readonly message?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly triggeredComputations?: Maybe<Scalars['Boolean']>;
  readonly ammendedDates?: Maybe<Scalars['Boolean']>;
};

export type User = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly username: Scalars['String'];
  readonly email: Scalars['String'];
  readonly passwordHash: Scalars['String'];
  readonly colour?: Maybe<Colour>;
  readonly created: Scalars['Datetime'];
  readonly updated?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `Guide`. */
  readonly guidesByOwner: GuidesConnection;
  /** Reads and enables pagination through a set of `Spot`. */
  readonly spotsByOwner: SpotsConnection;
  /** Reads and enables pagination through a set of `Ride`. */
  readonly ridesByOwner: RidesConnection;
  /** Reads and enables pagination through a set of `Follow`. */
  readonly followsByFollowed: FollowsConnection;
  /** Reads and enables pagination through a set of `Follow`. */
  readonly followsByFollower: FollowsConnection;
  /** Reads and enables pagination through a set of `FeedEvent`. */
  readonly feedEventsByUser: FeedEventsConnection;
  readonly countries?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly distanceMeters?: Maybe<Scalars['BigInt']>;
  readonly durationSeconds?: Maybe<Scalars['BigInt']>;
  readonly followingStatus?: Maybe<FollowingStatus>;
};


export type UserGuidesByOwnerArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<GuidesOrderBy>>;
  condition?: Maybe<GuideCondition>;
  filter?: Maybe<GuideFilter>;
};


export type UserSpotsByOwnerArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<SpotsOrderBy>>;
  condition?: Maybe<SpotCondition>;
  filter?: Maybe<SpotFilter>;
};


export type UserRidesByOwnerArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<RidesOrderBy>>;
  condition?: Maybe<RideCondition>;
  filter?: Maybe<RideFilter>;
};


export type UserFollowsByFollowedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<FollowsOrderBy>>;
  condition?: Maybe<FollowCondition>;
  filter?: Maybe<FollowFilter>;
};


export type UserFollowsByFollowerArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<FollowsOrderBy>>;
  condition?: Maybe<FollowCondition>;
  filter?: Maybe<FollowFilter>;
};


export type UserFeedEventsByUserArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<FeedEventsOrderBy>>;
  condition?: Maybe<FeedEventCondition>;
  filter?: Maybe<FeedEventFilter>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `username` field. */
  readonly username?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  readonly email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `passwordHash` field. */
  readonly passwordHash?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `colour` field. */
  readonly colour?: Maybe<Colour>;
  /** Checks for equality with the object’s `created` field. */
  readonly created?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updated` field. */
  readonly updated?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Filter by the object’s `username` field. */
  readonly username?: Maybe<StringFilter>;
  /** Filter by the object’s `email` field. */
  readonly email?: Maybe<StringFilter>;
  /** Filter by the object’s `passwordHash` field. */
  readonly passwordHash?: Maybe<StringFilter>;
  /** Filter by the object’s `colour` field. */
  readonly colour?: Maybe<ColourFilter>;
  /** Filter by the object’s `created` field. */
  readonly created?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updated` field. */
  readonly updated?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `countries` field. */
  readonly countries?: Maybe<StringListFilter>;
  /** Filter by the object’s `distanceMeters` field. */
  readonly distanceMeters?: Maybe<BigIntFilter>;
  /** Filter by the object’s `durationSeconds` field. */
  readonly durationSeconds?: Maybe<BigIntFilter>;
  /** Filter by the object’s `followingStatus` field. */
  readonly followingStatus?: Maybe<FollowingStatusFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<UserFilter>>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<UserFilter>>;
  /** Negates the expression. */
  readonly not?: Maybe<UserFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  readonly username: Scalars['String'];
  readonly email: Scalars['String'];
  readonly passwordHash: Scalars['String'];
  readonly colour?: Maybe<Colour>;
  readonly created: Scalars['Datetime'];
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
  ColourAsc = 'COLOUR_ASC',
  ColourDesc = 'COLOUR_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  UpdatedAsc = 'UPDATED_ASC',
  UpdatedDesc = 'UPDATED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
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

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  Query: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Query'] | ResolversTypes['Computation'] | ResolversTypes['Stage'] | ResolversTypes['Guide'] | ResolversTypes['User'] | ResolversTypes['Spot'] | ResolversTypes['Ride'] | ResolversTypes['FeedEvent'] | ResolversTypes['Temperature'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
  ComputationsOrderBy: ComputationsOrderBy;
  ComputationCondition: ComputationCondition;
  String: ResolverTypeWrapper<Scalars['String']>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>;
  ComputationStatus: ComputationStatus;
  ComputationFilter: ComputationFilter;
  StringFilter: StringFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DatetimeFilter: DatetimeFilter;
  IntFilter: IntFilter;
  ComputationStatusFilter: ComputationStatusFilter;
  ComputationsConnection: ResolverTypeWrapper<ComputationsConnection>;
  Computation: ResolverTypeWrapper<Computation>;
  Stage: ResolverTypeWrapper<Stage>;
  StageStatus: StageStatus;
  Guide: ResolverTypeWrapper<Guide>;
  TransportType: TransportType;
  User: ResolverTypeWrapper<User>;
  Colour: Colour;
  GuidesOrderBy: GuidesOrderBy;
  GuideCondition: GuideCondition;
  GuideFilter: GuideFilter;
  BooleanFilter: BooleanFilter;
  TransportTypeFilter: TransportTypeFilter;
  StringListFilter: StringListFilter;
  BigIntFilter: BigIntFilter;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  GuidesConnection: ResolverTypeWrapper<GuidesConnection>;
  GuidesEdge: ResolverTypeWrapper<GuidesEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  SpotsOrderBy: SpotsOrderBy;
  SpotCondition: SpotCondition;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  SpotFilter: SpotFilter;
  FloatFilter: FloatFilter;
  SpotsConnection: ResolverTypeWrapper<SpotsConnection>;
  Spot: ResolverTypeWrapper<Spot>;
  StagesOrderBy: StagesOrderBy;
  StageCondition: StageCondition;
  StageFilter: StageFilter;
  StageStatusFilter: StageStatusFilter;
  StagesConnection: ResolverTypeWrapper<StagesConnection>;
  StagesEdge: ResolverTypeWrapper<StagesEdge>;
  RidesOrderBy: RidesOrderBy;
  RideCondition: RideCondition;
  RideStatus: RideStatus;
  RideFilter: RideFilter;
  RideStatusFilter: RideStatusFilter;
  RidesConnection: ResolverTypeWrapper<RidesConnection>;
  Ride: ResolverTypeWrapper<Ride>;
  FeedEventsOrderBy: FeedEventsOrderBy;
  FeedEventCondition: FeedEventCondition;
  FeedEventType: FeedEventType;
  FeedEventFilter: FeedEventFilter;
  FeedEventTypeFilter: FeedEventTypeFilter;
  FeedEventsConnection: ResolverTypeWrapper<FeedEventsConnection>;
  FeedEvent: ResolverTypeWrapper<FeedEvent>;
  FeedEventsEdge: ResolverTypeWrapper<FeedEventsEdge>;
  RidesEdge: ResolverTypeWrapper<RidesEdge>;
  SpotsEdge: ResolverTypeWrapper<SpotsEdge>;
  FollowsOrderBy: FollowsOrderBy;
  FollowCondition: FollowCondition;
  FollowFilter: FollowFilter;
  FollowsConnection: ResolverTypeWrapper<FollowsConnection>;
  Follow: ResolverTypeWrapper<Follow>;
  FollowsEdge: ResolverTypeWrapper<FollowsEdge>;
  FollowingStatus: FollowingStatus;
  Bound: ResolverTypeWrapper<Bound>;
  ComputationsEdge: ResolverTypeWrapper<ComputationsEdge>;
  TemperaturesOrderBy: TemperaturesOrderBy;
  TemperatureCondition: TemperatureCondition;
  TemperatureFilter: TemperatureFilter;
  TemperaturesConnection: ResolverTypeWrapper<TemperaturesConnection>;
  Temperature: ResolverTypeWrapper<Temperature>;
  TemperaturesEdge: ResolverTypeWrapper<TemperaturesEdge>;
  UsersOrderBy: UsersOrderBy;
  UserCondition: UserCondition;
  UserFilter: UserFilter;
  ColourFilter: ColourFilter;
  FollowingStatusFilter: FollowingStatusFilter;
  UsersConnection: ResolverTypeWrapper<UsersConnection>;
  UsersEdge: ResolverTypeWrapper<UsersEdge>;
  JwtToken: ResolverTypeWrapper<Scalars['JwtToken']>;
  GeocodeResponse: ResolverTypeWrapper<GeocodeResponse>;
  Geocode: ResolverTypeWrapper<Geocode>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateFeedEventInput: CreateFeedEventInput;
  FeedEventInput: FeedEventInput;
  CreateFeedEventPayload: ResolverTypeWrapper<CreateFeedEventPayload>;
  CreateUserInput: CreateUserInput;
  UserInput: UserInput;
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  UpdateFeedEventByNodeIdInput: UpdateFeedEventByNodeIdInput;
  FeedEventPatch: FeedEventPatch;
  UpdateFeedEventPayload: ResolverTypeWrapper<UpdateFeedEventPayload>;
  UpdateFeedEventInput: UpdateFeedEventInput;
  DeleteFeedEventByNodeIdInput: DeleteFeedEventByNodeIdInput;
  DeleteFeedEventPayload: ResolverTypeWrapper<DeleteFeedEventPayload>;
  DeleteFeedEventInput: DeleteFeedEventInput;
  AuthenticateInput: AuthenticateInput;
  AuthenticatePayload: ResolverTypeWrapper<AuthenticatePayload>;
  RegisterInput: RegisterInput;
  RegisterPayload: ResolverTypeWrapper<RegisterPayload>;
  CreateGuideInput: CreateGuideInput;
  CreateGuideResult: ResolverTypeWrapper<CreateGuideResult>;
  UpdateGuidePatch: UpdateGuidePatch;
  UpdateGuideResult: ResolverTypeWrapper<UpdateGuideResult>;
  DeleteGuideInput: DeleteGuideInput;
  DeleteGuideResult: ResolverTypeWrapper<DeleteGuideResult>;
  Result: ResolverTypeWrapper<Result>;
  AddSpotInput: AddSpotInput;
  AddSpotResult: ResolverTypeWrapper<AddSpotResult>;
  UpdateSpotPatch: UpdateSpotPatch;
  UpdateSpotLocationPatch: UpdateSpotLocationPatch;
  UpdateSpotResult: ResolverTypeWrapper<UpdateSpotResult>;
  RemoveSpotInput: RemoveSpotInput;
  RemoveSpotResult: ResolverTypeWrapper<RemoveSpotResult>;
  Subscription: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Node: ResolversParentTypes['Query'] | ResolversParentTypes['Computation'] | ResolversParentTypes['Stage'] | ResolversParentTypes['Guide'] | ResolversParentTypes['User'] | ResolversParentTypes['Spot'] | ResolversParentTypes['Ride'] | ResolversParentTypes['FeedEvent'] | ResolversParentTypes['Temperature'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Cursor: Scalars['Cursor'];
  ComputationCondition: ComputationCondition;
  String: Scalars['String'];
  Datetime: Scalars['Datetime'];
  ComputationFilter: ComputationFilter;
  StringFilter: StringFilter;
  Boolean: Scalars['Boolean'];
  DatetimeFilter: DatetimeFilter;
  IntFilter: IntFilter;
  ComputationStatusFilter: ComputationStatusFilter;
  ComputationsConnection: ComputationsConnection;
  Computation: Computation;
  Stage: Stage;
  Guide: Guide;
  User: User;
  GuideCondition: GuideCondition;
  GuideFilter: GuideFilter;
  BooleanFilter: BooleanFilter;
  TransportTypeFilter: TransportTypeFilter;
  StringListFilter: StringListFilter;
  BigIntFilter: BigIntFilter;
  BigInt: Scalars['BigInt'];
  GuidesConnection: GuidesConnection;
  GuidesEdge: GuidesEdge;
  PageInfo: PageInfo;
  SpotCondition: SpotCondition;
  Float: Scalars['Float'];
  SpotFilter: SpotFilter;
  FloatFilter: FloatFilter;
  SpotsConnection: SpotsConnection;
  Spot: Spot;
  StageCondition: StageCondition;
  StageFilter: StageFilter;
  StageStatusFilter: StageStatusFilter;
  StagesConnection: StagesConnection;
  StagesEdge: StagesEdge;
  RideCondition: RideCondition;
  RideFilter: RideFilter;
  RideStatusFilter: RideStatusFilter;
  RidesConnection: RidesConnection;
  Ride: Ride;
  FeedEventCondition: FeedEventCondition;
  FeedEventFilter: FeedEventFilter;
  FeedEventTypeFilter: FeedEventTypeFilter;
  FeedEventsConnection: FeedEventsConnection;
  FeedEvent: FeedEvent;
  FeedEventsEdge: FeedEventsEdge;
  RidesEdge: RidesEdge;
  SpotsEdge: SpotsEdge;
  FollowCondition: FollowCondition;
  FollowFilter: FollowFilter;
  FollowsConnection: FollowsConnection;
  Follow: Follow;
  FollowsEdge: FollowsEdge;
  Bound: Bound;
  ComputationsEdge: ComputationsEdge;
  TemperatureCondition: TemperatureCondition;
  TemperatureFilter: TemperatureFilter;
  TemperaturesConnection: TemperaturesConnection;
  Temperature: Temperature;
  TemperaturesEdge: TemperaturesEdge;
  UserCondition: UserCondition;
  UserFilter: UserFilter;
  ColourFilter: ColourFilter;
  FollowingStatusFilter: FollowingStatusFilter;
  UsersConnection: UsersConnection;
  UsersEdge: UsersEdge;
  JwtToken: Scalars['JwtToken'];
  GeocodeResponse: GeocodeResponse;
  Geocode: Geocode;
  Mutation: {};
  CreateFeedEventInput: CreateFeedEventInput;
  FeedEventInput: FeedEventInput;
  CreateFeedEventPayload: CreateFeedEventPayload;
  CreateUserInput: CreateUserInput;
  UserInput: UserInput;
  CreateUserPayload: CreateUserPayload;
  UpdateFeedEventByNodeIdInput: UpdateFeedEventByNodeIdInput;
  FeedEventPatch: FeedEventPatch;
  UpdateFeedEventPayload: UpdateFeedEventPayload;
  UpdateFeedEventInput: UpdateFeedEventInput;
  DeleteFeedEventByNodeIdInput: DeleteFeedEventByNodeIdInput;
  DeleteFeedEventPayload: DeleteFeedEventPayload;
  DeleteFeedEventInput: DeleteFeedEventInput;
  AuthenticateInput: AuthenticateInput;
  AuthenticatePayload: AuthenticatePayload;
  RegisterInput: RegisterInput;
  RegisterPayload: RegisterPayload;
  CreateGuideInput: CreateGuideInput;
  CreateGuideResult: CreateGuideResult;
  UpdateGuidePatch: UpdateGuidePatch;
  UpdateGuideResult: UpdateGuideResult;
  DeleteGuideInput: DeleteGuideInput;
  DeleteGuideResult: DeleteGuideResult;
  Result: Result;
  AddSpotInput: AddSpotInput;
  AddSpotResult: AddSpotResult;
  UpdateSpotPatch: UpdateSpotPatch;
  UpdateSpotLocationPatch: UpdateSpotLocationPatch;
  UpdateSpotResult: UpdateSpotResult;
  RemoveSpotInput: RemoveSpotInput;
  RemoveSpotResult: RemoveSpotResult;
  Subscription: {};
};

export type AddSpotResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddSpotResult'] = ResolversParentTypes['AddSpotResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  messaage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AuthenticatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticatePayload'] = ResolversParentTypes['AuthenticatePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jwtToken?: Resolver<Maybe<ResolversTypes['JwtToken']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BoundResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bound'] = ResolversParentTypes['Bound']> = {
  north?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  east?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  south?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  west?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ComputationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Computation'] = ResolversParentTypes['Computation']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ended?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ComputationStatus'], ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guide?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  started?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>;
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ComputationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComputationsConnection'] = ResolversParentTypes['ComputationsConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Computation']>>, ParentType, ContextType>;
  edges?: Resolver<ReadonlyArray<ResolversTypes['ComputationsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ComputationsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComputationsEdge'] = ResolversParentTypes['ComputationsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Computation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CreateFeedEventPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateFeedEventPayload'] = ResolversParentTypes['CreateFeedEventPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feedEvent?: Resolver<Maybe<ResolversTypes['FeedEvent']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  rideByRide?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>;
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>;
  userByUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  feedEventEdge?: Resolver<Maybe<ResolversTypes['FeedEventsEdge']>, ParentType, ContextType, RequireFields<CreateFeedEventPayloadFeedEventEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CreateGuideResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateGuideResult'] = ResolversParentTypes['CreateGuideResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guideId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<CreateUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type DeleteFeedEventPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteFeedEventPayload'] = ResolversParentTypes['DeleteFeedEventPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feedEvent?: Resolver<Maybe<ResolversTypes['FeedEvent']>, ParentType, ContextType>;
  deletedFeedEventNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  rideByRide?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>;
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>;
  userByUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  feedEventEdge?: Resolver<Maybe<ResolversTypes['FeedEventsEdge']>, ParentType, ContextType, RequireFields<DeleteFeedEventPayloadFeedEventEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DeleteGuideResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteGuideResult'] = ResolversParentTypes['DeleteGuideResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FeedEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeedEvent'] = ResolversParentTypes['FeedEvent']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['FeedEventType'], ParentType, ContextType>;
  ride?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guide?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rideByRide?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>;
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>;
  userByUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FeedEventsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeedEventsConnection'] = ResolversParentTypes['FeedEventsConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['FeedEvent']>>, ParentType, ContextType>;
  edges?: Resolver<ReadonlyArray<ResolversTypes['FeedEventsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FeedEventsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeedEventsEdge'] = ResolversParentTypes['FeedEventsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['FeedEvent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FollowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Follow'] = ResolversParentTypes['Follow']> = {
  followed?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  follower?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  userByFollowed?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userByFollower?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FollowsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowsConnection'] = ResolversParentTypes['FollowsConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Follow']>>, ParentType, ContextType>;
  edges?: Resolver<ReadonlyArray<ResolversTypes['FollowsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FollowsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowsEdge'] = ResolversParentTypes['FollowsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GeocodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Geocode'] = ResolversParentTypes['Geocode']> = {
  countryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GeocodeResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeocodeResponse'] = ResolversParentTypes['GeocodeResponse']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  geocodes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Geocode']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GuideResolvers<ContextType = any, ParentType extends ResolversParentTypes['Guide'] = ResolversParentTypes['Guide']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isCircular?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  transportType?: Resolver<ResolversTypes['TransportType'], ParentType, ContextType>;
  maxHoursPerRide?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  spotsByGuide?: Resolver<ResolversTypes['SpotsConnection'], ParentType, ContextType, RequireFields<GuideSpotsByGuideArgs, 'orderBy'>>;
  stagesByGuide?: Resolver<ResolversTypes['StagesConnection'], ParentType, ContextType, RequireFields<GuideStagesByGuideArgs, 'orderBy'>>;
  ridesByGuide?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<GuideRidesByGuideArgs, 'orderBy'>>;
  computationsByGuide?: Resolver<ResolversTypes['ComputationsConnection'], ParentType, ContextType, RequireFields<GuideComputationsByGuideArgs, 'orderBy'>>;
  feedEventsByGuide?: Resolver<ResolversTypes['FeedEventsConnection'], ParentType, ContextType, RequireFields<GuideFeedEventsByGuideArgs, 'orderBy'>>;
  bounds?: Resolver<Maybe<ResolversTypes['Bound']>, ParentType, ContextType>;
  countries?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  distanceMeters?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  durationSeconds?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isMine?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GuidesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuidesConnection'] = ResolversParentTypes['GuidesConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Guide']>>, ParentType, ContextType>;
  edges?: Resolver<ReadonlyArray<ResolversTypes['GuidesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GuidesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuidesEdge'] = ResolversParentTypes['GuidesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface JwtTokenScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JwtToken'], any> {
  name: 'JwtToken';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createFeedEvent?: Resolver<Maybe<ResolversTypes['CreateFeedEventPayload']>, ParentType, ContextType, RequireFields<MutationCreateFeedEventArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  updateFeedEventByNodeId?: Resolver<Maybe<ResolversTypes['UpdateFeedEventPayload']>, ParentType, ContextType, RequireFields<MutationUpdateFeedEventByNodeIdArgs, 'input'>>;
  updateFeedEvent?: Resolver<Maybe<ResolversTypes['UpdateFeedEventPayload']>, ParentType, ContextType, RequireFields<MutationUpdateFeedEventArgs, 'input'>>;
  deleteFeedEventByNodeId?: Resolver<Maybe<ResolversTypes['DeleteFeedEventPayload']>, ParentType, ContextType, RequireFields<MutationDeleteFeedEventByNodeIdArgs, 'input'>>;
  deleteFeedEvent?: Resolver<Maybe<ResolversTypes['DeleteFeedEventPayload']>, ParentType, ContextType, RequireFields<MutationDeleteFeedEventArgs, 'input'>>;
  authenticate?: Resolver<Maybe<ResolversTypes['AuthenticatePayload']>, ParentType, ContextType, RequireFields<MutationAuthenticateArgs, 'input'>>;
  register?: Resolver<Maybe<ResolversTypes['RegisterPayload']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  createGuide?: Resolver<ResolversTypes['CreateGuideResult'], ParentType, ContextType, RequireFields<MutationCreateGuideArgs, never>>;
  updateGuide?: Resolver<ResolversTypes['UpdateGuideResult'], ParentType, ContextType, RequireFields<MutationUpdateGuideArgs, never>>;
  deleteGuide?: Resolver<ResolversTypes['DeleteGuideResult'], ParentType, ContextType, RequireFields<MutationDeleteGuideArgs, never>>;
  followUser?: Resolver<ResolversTypes['Result'], ParentType, ContextType, RequireFields<MutationFollowUserArgs, 'username'>>;
  unfollowUser?: Resolver<ResolversTypes['Result'], ParentType, ContextType, RequireFields<MutationUnfollowUserArgs, 'username'>>;
  addSpot?: Resolver<ResolversTypes['AddSpotResult'], ParentType, ContextType, RequireFields<MutationAddSpotArgs, 'input'>>;
  updateSpot?: Resolver<ResolversTypes['UpdateSpotResult'], ParentType, ContextType, RequireFields<MutationUpdateSpotArgs, 'input'>>;
  removeSpot?: Resolver<ResolversTypes['RemoveSpotResult'], ParentType, ContextType, RequireFields<MutationRemoveSpotArgs, 'input'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Query' | 'Computation' | 'Stage' | 'Guide' | 'User' | 'Spot' | 'Ride' | 'FeedEvent' | 'Temperature', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>;
  computations?: Resolver<Maybe<ResolversTypes['ComputationsConnection']>, ParentType, ContextType, RequireFields<QueryComputationsArgs, 'orderBy'>>;
  feedEvents?: Resolver<Maybe<ResolversTypes['FeedEventsConnection']>, ParentType, ContextType, RequireFields<QueryFeedEventsArgs, 'orderBy'>>;
  follows?: Resolver<Maybe<ResolversTypes['FollowsConnection']>, ParentType, ContextType, RequireFields<QueryFollowsArgs, 'orderBy'>>;
  guides?: Resolver<Maybe<ResolversTypes['GuidesConnection']>, ParentType, ContextType, RequireFields<QueryGuidesArgs, 'orderBy'>>;
  rides?: Resolver<Maybe<ResolversTypes['RidesConnection']>, ParentType, ContextType, RequireFields<QueryRidesArgs, 'orderBy'>>;
  spots?: Resolver<Maybe<ResolversTypes['SpotsConnection']>, ParentType, ContextType, RequireFields<QuerySpotsArgs, 'orderBy'>>;
  stages?: Resolver<Maybe<ResolversTypes['StagesConnection']>, ParentType, ContextType, RequireFields<QueryStagesArgs, 'orderBy'>>;
  temperatures?: Resolver<Maybe<ResolversTypes['TemperaturesConnection']>, ParentType, ContextType, RequireFields<QueryTemperaturesArgs, 'orderBy'>>;
  users?: Resolver<Maybe<ResolversTypes['UsersConnection']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'orderBy'>>;
  computation?: Resolver<Maybe<ResolversTypes['Computation']>, ParentType, ContextType, RequireFields<QueryComputationArgs, 'id'>>;
  feedEvent?: Resolver<Maybe<ResolversTypes['FeedEvent']>, ParentType, ContextType, RequireFields<QueryFeedEventArgs, 'timestamp'>>;
  guide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType, RequireFields<QueryGuideArgs, 'id'>>;
  ride?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType, RequireFields<QueryRideArgs, 'id'>>;
  spot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType, RequireFields<QuerySpotArgs, 'id'>>;
  stage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType, RequireFields<QueryStageArgs, 'id'>>;
  temperature?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType, RequireFields<QueryTemperatureArgs, 'id'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'username'>>;
  countries?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  feed?: Resolver<ResolversTypes['FeedEventsConnection'], ParentType, ContextType, RequireFields<QueryFeedArgs, never>>;
  getCurrentUser?: Resolver<Maybe<ResolversTypes['JwtToken']>, ParentType, ContextType>;
  computationByNodeId?: Resolver<Maybe<ResolversTypes['Computation']>, ParentType, ContextType, RequireFields<QueryComputationByNodeIdArgs, 'nodeId'>>;
  feedEventByNodeId?: Resolver<Maybe<ResolversTypes['FeedEvent']>, ParentType, ContextType, RequireFields<QueryFeedEventByNodeIdArgs, 'nodeId'>>;
  guideByNodeId?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType, RequireFields<QueryGuideByNodeIdArgs, 'nodeId'>>;
  rideByNodeId?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType, RequireFields<QueryRideByNodeIdArgs, 'nodeId'>>;
  spotByNodeId?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType, RequireFields<QuerySpotByNodeIdArgs, 'nodeId'>>;
  stageByNodeId?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType, RequireFields<QueryStageByNodeIdArgs, 'nodeId'>>;
  temperatureByNodeId?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType, RequireFields<QueryTemperatureByNodeIdArgs, 'nodeId'>>;
  userByNodeId?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByNodeIdArgs, 'nodeId'>>;
  geocode?: Resolver<ResolversTypes['GeocodeResponse'], ParentType, ContextType, RequireFields<QueryGeocodeArgs, 'query'>>;
  appVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type RegisterPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterPayload'] = ResolversParentTypes['RegisterPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<RegisterPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RemoveSpotResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveSpotResult'] = ResolversParentTypes['RemoveSpotResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RideResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ride'] = ResolversParentTypes['Ride']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  guide?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromSpot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toSpot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pathUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  durationSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  distanceMeters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['RideStatus'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>;
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>;
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>;
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>;
  feedEventsByRide?: Resolver<ResolversTypes['FeedEventsConnection'], ParentType, ContextType, RequireFields<RideFeedEventsByRideArgs, 'orderBy'>>;
  countries?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  hasBorder?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isMine?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RidesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RidesConnection'] = ResolversParentTypes['RidesConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Ride']>>, ParentType, ContextType>;
  edges?: Resolver<ReadonlyArray<ResolversTypes['RidesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RidesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RidesEdge'] = ResolversParentTypes['RidesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SpotResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spot'] = ResolversParentTypes['Spot']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guide?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nights?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  locked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  long?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>;
  userByOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  stageByStage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>;
  stagesByFromSpot?: Resolver<ResolversTypes['StagesConnection'], ParentType, ContextType, RequireFields<SpotStagesByFromSpotArgs, 'orderBy'>>;
  stagesByToSpot?: Resolver<ResolversTypes['StagesConnection'], ParentType, ContextType, RequireFields<SpotStagesByToSpotArgs, 'orderBy'>>;
  ridesByFromSpot?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<SpotRidesByFromSpotArgs, 'orderBy'>>;
  ridesByToSpot?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<SpotRidesByToSpotArgs, 'orderBy'>>;
  isMine?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SpotsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpotsConnection'] = ResolversParentTypes['SpotsConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Spot']>>, ParentType, ContextType>;
  edges?: Resolver<ReadonlyArray<ResolversTypes['SpotsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SpotsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpotsEdge'] = ResolversParentTypes['SpotsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stage'] = ResolversParentTypes['Stage']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  guide?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromSpot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toSpot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['StageStatus'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>;
  spotByFromSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>;
  spotByToSpot?: Resolver<Maybe<ResolversTypes['Spot']>, ParentType, ContextType>;
  spotsByStage?: Resolver<ResolversTypes['SpotsConnection'], ParentType, ContextType, RequireFields<StageSpotsByStageArgs, 'orderBy'>>;
  ridesByStage?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<StageRidesByStageArgs, 'orderBy'>>;
  computationsByStage?: Resolver<ResolversTypes['ComputationsConnection'], ParentType, ContextType, RequireFields<StageComputationsByStageArgs, 'orderBy'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StagesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StagesConnection'] = ResolversParentTypes['StagesConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Stage']>>, ParentType, ContextType>;
  edges?: Resolver<ReadonlyArray<ResolversTypes['StagesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StagesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StagesEdge'] = ResolversParentTypes['StagesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  query?: SubscriptionResolver<ResolversTypes['Query'], "query", ParentType, ContextType>;
  nodeId?: SubscriptionResolver<ResolversTypes['ID'], "nodeId", ParentType, ContextType>;
  node?: SubscriptionResolver<Maybe<ResolversTypes['Node']>, "node", ParentType, ContextType, RequireFields<SubscriptionNodeArgs, 'nodeId'>>;
  computations?: SubscriptionResolver<Maybe<ResolversTypes['ComputationsConnection']>, "computations", ParentType, ContextType, RequireFields<SubscriptionComputationsArgs, 'orderBy'>>;
  feedEvents?: SubscriptionResolver<Maybe<ResolversTypes['FeedEventsConnection']>, "feedEvents", ParentType, ContextType, RequireFields<SubscriptionFeedEventsArgs, 'orderBy'>>;
  follows?: SubscriptionResolver<Maybe<ResolversTypes['FollowsConnection']>, "follows", ParentType, ContextType, RequireFields<SubscriptionFollowsArgs, 'orderBy'>>;
  guides?: SubscriptionResolver<Maybe<ResolversTypes['GuidesConnection']>, "guides", ParentType, ContextType, RequireFields<SubscriptionGuidesArgs, 'orderBy'>>;
  rides?: SubscriptionResolver<Maybe<ResolversTypes['RidesConnection']>, "rides", ParentType, ContextType, RequireFields<SubscriptionRidesArgs, 'orderBy'>>;
  spots?: SubscriptionResolver<Maybe<ResolversTypes['SpotsConnection']>, "spots", ParentType, ContextType, RequireFields<SubscriptionSpotsArgs, 'orderBy'>>;
  stages?: SubscriptionResolver<Maybe<ResolversTypes['StagesConnection']>, "stages", ParentType, ContextType, RequireFields<SubscriptionStagesArgs, 'orderBy'>>;
  temperatures?: SubscriptionResolver<Maybe<ResolversTypes['TemperaturesConnection']>, "temperatures", ParentType, ContextType, RequireFields<SubscriptionTemperaturesArgs, 'orderBy'>>;
  users?: SubscriptionResolver<Maybe<ResolversTypes['UsersConnection']>, "users", ParentType, ContextType, RequireFields<SubscriptionUsersArgs, 'orderBy'>>;
  computation?: SubscriptionResolver<Maybe<ResolversTypes['Computation']>, "computation", ParentType, ContextType, RequireFields<SubscriptionComputationArgs, 'id'>>;
  feedEvent?: SubscriptionResolver<Maybe<ResolversTypes['FeedEvent']>, "feedEvent", ParentType, ContextType, RequireFields<SubscriptionFeedEventArgs, 'timestamp'>>;
  guide?: SubscriptionResolver<Maybe<ResolversTypes['Guide']>, "guide", ParentType, ContextType, RequireFields<SubscriptionGuideArgs, 'id'>>;
  ride?: SubscriptionResolver<Maybe<ResolversTypes['Ride']>, "ride", ParentType, ContextType, RequireFields<SubscriptionRideArgs, 'id'>>;
  spot?: SubscriptionResolver<Maybe<ResolversTypes['Spot']>, "spot", ParentType, ContextType, RequireFields<SubscriptionSpotArgs, 'id'>>;
  stage?: SubscriptionResolver<Maybe<ResolversTypes['Stage']>, "stage", ParentType, ContextType, RequireFields<SubscriptionStageArgs, 'id'>>;
  temperature?: SubscriptionResolver<Maybe<ResolversTypes['Temperature']>, "temperature", ParentType, ContextType, RequireFields<SubscriptionTemperatureArgs, 'id'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionUserArgs, 'username'>>;
  countries?: SubscriptionResolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, "countries", ParentType, ContextType>;
  feed?: SubscriptionResolver<ResolversTypes['FeedEventsConnection'], "feed", ParentType, ContextType, RequireFields<SubscriptionFeedArgs, never>>;
  getCurrentUser?: SubscriptionResolver<Maybe<ResolversTypes['JwtToken']>, "getCurrentUser", ParentType, ContextType>;
  computationByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['Computation']>, "computationByNodeId", ParentType, ContextType, RequireFields<SubscriptionComputationByNodeIdArgs, 'nodeId'>>;
  feedEventByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['FeedEvent']>, "feedEventByNodeId", ParentType, ContextType, RequireFields<SubscriptionFeedEventByNodeIdArgs, 'nodeId'>>;
  guideByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['Guide']>, "guideByNodeId", ParentType, ContextType, RequireFields<SubscriptionGuideByNodeIdArgs, 'nodeId'>>;
  rideByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['Ride']>, "rideByNodeId", ParentType, ContextType, RequireFields<SubscriptionRideByNodeIdArgs, 'nodeId'>>;
  spotByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['Spot']>, "spotByNodeId", ParentType, ContextType, RequireFields<SubscriptionSpotByNodeIdArgs, 'nodeId'>>;
  stageByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['Stage']>, "stageByNodeId", ParentType, ContextType, RequireFields<SubscriptionStageByNodeIdArgs, 'nodeId'>>;
  temperatureByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['Temperature']>, "temperatureByNodeId", ParentType, ContextType, RequireFields<SubscriptionTemperatureByNodeIdArgs, 'nodeId'>>;
  userByNodeId?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "userByNodeId", ParentType, ContextType, RequireFields<SubscriptionUserByNodeIdArgs, 'nodeId'>>;
  geocode?: SubscriptionResolver<ResolversTypes['GeocodeResponse'], "geocode", ParentType, ContextType, RequireFields<SubscriptionGeocodeArgs, 'query'>>;
  appVersion?: SubscriptionResolver<ResolversTypes['String'], "appVersion", ParentType, ContextType>;
};

export type TemperatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Temperature'] = ResolversParentTypes['Temperature']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  month?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  temperature?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TemperaturesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemperaturesConnection'] = ResolversParentTypes['TemperaturesConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Temperature']>>, ParentType, ContextType>;
  edges?: Resolver<ReadonlyArray<ResolversTypes['TemperaturesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TemperaturesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemperaturesEdge'] = ResolversParentTypes['TemperaturesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Temperature']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UpdateFeedEventPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateFeedEventPayload'] = ResolversParentTypes['UpdateFeedEventPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feedEvent?: Resolver<Maybe<ResolversTypes['FeedEvent']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  rideByRide?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>;
  guideByGuide?: Resolver<Maybe<ResolversTypes['Guide']>, ParentType, ContextType>;
  userByUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  feedEventEdge?: Resolver<Maybe<ResolversTypes['FeedEventsEdge']>, ParentType, ContextType, RequireFields<UpdateFeedEventPayloadFeedEventEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UpdateGuideResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateGuideResult'] = ResolversParentTypes['UpdateGuideResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  triggeredDates?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  triggeredComputations?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UpdateSpotResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateSpotResult'] = ResolversParentTypes['UpdateSpotResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  triggeredComputations?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ammendedDates?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  colour?: Resolver<Maybe<ResolversTypes['Colour']>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  guidesByOwner?: Resolver<ResolversTypes['GuidesConnection'], ParentType, ContextType, RequireFields<UserGuidesByOwnerArgs, 'orderBy'>>;
  spotsByOwner?: Resolver<ResolversTypes['SpotsConnection'], ParentType, ContextType, RequireFields<UserSpotsByOwnerArgs, 'orderBy'>>;
  ridesByOwner?: Resolver<ResolversTypes['RidesConnection'], ParentType, ContextType, RequireFields<UserRidesByOwnerArgs, 'orderBy'>>;
  followsByFollowed?: Resolver<ResolversTypes['FollowsConnection'], ParentType, ContextType, RequireFields<UserFollowsByFollowedArgs, 'orderBy'>>;
  followsByFollower?: Resolver<ResolversTypes['FollowsConnection'], ParentType, ContextType, RequireFields<UserFollowsByFollowerArgs, 'orderBy'>>;
  feedEventsByUser?: Resolver<ResolversTypes['FeedEventsConnection'], ParentType, ContextType, RequireFields<UserFeedEventsByUserArgs, 'orderBy'>>;
  countries?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  distanceMeters?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  durationSeconds?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  followingStatus?: Resolver<Maybe<ResolversTypes['FollowingStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UsersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersConnection'] = ResolversParentTypes['UsersConnection']> = {
  nodes?: Resolver<ReadonlyArray<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  edges?: Resolver<ReadonlyArray<ResolversTypes['UsersEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UsersEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersEdge'] = ResolversParentTypes['UsersEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  AddSpotResult?: AddSpotResultResolvers<ContextType>;
  AuthenticatePayload?: AuthenticatePayloadResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Bound?: BoundResolvers<ContextType>;
  Computation?: ComputationResolvers<ContextType>;
  ComputationsConnection?: ComputationsConnectionResolvers<ContextType>;
  ComputationsEdge?: ComputationsEdgeResolvers<ContextType>;
  CreateFeedEventPayload?: CreateFeedEventPayloadResolvers<ContextType>;
  CreateGuideResult?: CreateGuideResultResolvers<ContextType>;
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  Datetime?: GraphQLScalarType;
  DeleteFeedEventPayload?: DeleteFeedEventPayloadResolvers<ContextType>;
  DeleteGuideResult?: DeleteGuideResultResolvers<ContextType>;
  FeedEvent?: FeedEventResolvers<ContextType>;
  FeedEventsConnection?: FeedEventsConnectionResolvers<ContextType>;
  FeedEventsEdge?: FeedEventsEdgeResolvers<ContextType>;
  Follow?: FollowResolvers<ContextType>;
  FollowsConnection?: FollowsConnectionResolvers<ContextType>;
  FollowsEdge?: FollowsEdgeResolvers<ContextType>;
  Geocode?: GeocodeResolvers<ContextType>;
  GeocodeResponse?: GeocodeResponseResolvers<ContextType>;
  Guide?: GuideResolvers<ContextType>;
  GuidesConnection?: GuidesConnectionResolvers<ContextType>;
  GuidesEdge?: GuidesEdgeResolvers<ContextType>;
  JwtToken?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegisterPayload?: RegisterPayloadResolvers<ContextType>;
  RemoveSpotResult?: RemoveSpotResultResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  Ride?: RideResolvers<ContextType>;
  RidesConnection?: RidesConnectionResolvers<ContextType>;
  RidesEdge?: RidesEdgeResolvers<ContextType>;
  Spot?: SpotResolvers<ContextType>;
  SpotsConnection?: SpotsConnectionResolvers<ContextType>;
  SpotsEdge?: SpotsEdgeResolvers<ContextType>;
  Stage?: StageResolvers<ContextType>;
  StagesConnection?: StagesConnectionResolvers<ContextType>;
  StagesEdge?: StagesEdgeResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Temperature?: TemperatureResolvers<ContextType>;
  TemperaturesConnection?: TemperaturesConnectionResolvers<ContextType>;
  TemperaturesEdge?: TemperaturesEdgeResolvers<ContextType>;
  UpdateFeedEventPayload?: UpdateFeedEventPayloadResolvers<ContextType>;
  UpdateGuideResult?: UpdateGuideResultResolvers<ContextType>;
  UpdateSpotResult?: UpdateSpotResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UsersConnection?: UsersConnectionResolvers<ContextType>;
  UsersEdge?: UsersEdgeResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

