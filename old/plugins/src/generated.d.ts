export declare type Maybe<T> = T | null;
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Cursor: any;
    Date: any;
    BigInt: any;
};
export declare type AddSpotFromLatLngPayload = {
    lat: Scalars['Float'];
    lng: Scalars['Float'];
};
export declare type AuthenticateInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type AuthenticatePayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    jwtToken?: Maybe<JwtToken>;
    query?: Maybe<Query>;
};
export declare type CreateGuideInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    guide: GuideInput;
};
export declare type CreateGuidePayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    guide?: Maybe<Guide>;
    query?: Maybe<Query>;
    userByOwner?: Maybe<User>;
    guideEdge?: Maybe<GuidesEdge>;
};
export declare type CreateGuidePayloadGuideEdgeArgs = {
    orderBy?: Maybe<Array<GuidesOrderBy>>;
};
export declare type CreateRideInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    ride: RideInput;
};
export declare type CreateRidePayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    ride?: Maybe<Ride>;
    query?: Maybe<Query>;
    guideByGuide?: Maybe<Guide>;
    spotByFromSpot?: Maybe<Spot>;
    spotByToSpot?: Maybe<Spot>;
    rideEdge?: Maybe<RidesEdge>;
};
export declare type CreateRidePayloadRideEdgeArgs = {
    orderBy?: Maybe<Array<RidesOrderBy>>;
};
export declare type CreateSpotInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    spot: SpotInput;
};
export declare type CreateSpotPayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    spot?: Maybe<Spot>;
    query?: Maybe<Query>;
    guideByGuide?: Maybe<Guide>;
    spotEdge?: Maybe<SpotsEdge>;
};
export declare type CreateSpotPayloadSpotEdgeArgs = {
    orderBy?: Maybe<Array<SpotsOrderBy>>;
};
export declare type CreateUserInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    user: UserInput;
};
export declare type CreateUserPayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    user?: Maybe<User>;
    query?: Maybe<Query>;
    userEdge?: Maybe<UsersEdge>;
};
export declare type CreateUserPayloadUserEdgeArgs = {
    orderBy?: Maybe<Array<UsersOrderBy>>;
};
export declare type DeleteGuideByIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    id: Scalars['String'];
};
export declare type DeleteGuideInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
};
export declare type DeleteGuidePayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    guide?: Maybe<Guide>;
    deletedGuideId?: Maybe<Scalars['ID']>;
    query?: Maybe<Query>;
    userByOwner?: Maybe<User>;
    guideEdge?: Maybe<GuidesEdge>;
};
export declare type DeleteGuidePayloadGuideEdgeArgs = {
    orderBy?: Maybe<Array<GuidesOrderBy>>;
};
export declare type DeleteRideByIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    id: Scalars['String'];
};
export declare type DeleteRideInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
};
export declare type DeleteRidePayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    ride?: Maybe<Ride>;
    deletedRideId?: Maybe<Scalars['ID']>;
    query?: Maybe<Query>;
    guideByGuide?: Maybe<Guide>;
    spotByFromSpot?: Maybe<Spot>;
    spotByToSpot?: Maybe<Spot>;
    rideEdge?: Maybe<RidesEdge>;
};
export declare type DeleteRidePayloadRideEdgeArgs = {
    orderBy?: Maybe<Array<RidesOrderBy>>;
};
export declare type DeleteSpotByIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    id: Scalars['String'];
};
export declare type DeleteSpotInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
};
export declare type DeleteSpotPayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    spot?: Maybe<Spot>;
    deletedSpotId?: Maybe<Scalars['ID']>;
    query?: Maybe<Query>;
    guideByGuide?: Maybe<Guide>;
    spotEdge?: Maybe<SpotsEdge>;
};
export declare type DeleteSpotPayloadSpotEdgeArgs = {
    orderBy?: Maybe<Array<SpotsOrderBy>>;
};
export declare type DeleteUserByUsernameInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    username: Scalars['String'];
};
export declare type DeleteUserInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
};
export declare type DeleteUserPayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    user?: Maybe<User>;
    deletedUserId?: Maybe<Scalars['ID']>;
    query?: Maybe<Query>;
    userEdge?: Maybe<UsersEdge>;
};
export declare type DeleteUserPayloadUserEdgeArgs = {
    orderBy?: Maybe<Array<UsersOrderBy>>;
};
export declare type Guide = Node & {
    nodeId: Scalars['ID'];
    id: Scalars['String'];
    title: Scalars['String'];
    slug: Scalars['String'];
    owner: Scalars['String'];
    startDate?: Maybe<Scalars['Date']>;
    userByOwner?: Maybe<User>;
    spotsByGuide: SpotsConnection;
    ridesByGuide: RidesConnection;
};
export declare type GuideSpotsByGuideArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<SpotsOrderBy>>;
    condition?: Maybe<SpotCondition>;
};
export declare type GuideRidesByGuideArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<RidesOrderBy>>;
    condition?: Maybe<RideCondition>;
};
export declare type GuideCondition = {
    id?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    owner?: Maybe<Scalars['String']>;
    startDate?: Maybe<Scalars['Date']>;
};
export declare type GuideInput = {
    id: Scalars['String'];
    title: Scalars['String'];
    slug: Scalars['String'];
    owner: Scalars['String'];
    startDate?: Maybe<Scalars['Date']>;
};
export declare type GuidePatch = {
    id?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    owner?: Maybe<Scalars['String']>;
    startDate?: Maybe<Scalars['Date']>;
};
export declare type GuidesConnection = {
    nodes: Array<Maybe<Guide>>;
    edges: Array<GuidesEdge>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export declare type GuidesEdge = {
    cursor?: Maybe<Scalars['Cursor']>;
    node?: Maybe<Guide>;
};
export declare enum GuidesOrderBy {
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
    PrimaryKeyAsc = "PRIMARY_KEY_ASC",
    PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}
export declare type JwtToken = {
    role?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
    exp?: Maybe<Scalars['BigInt']>;
};
export declare type Mutation = {
    createGuide?: Maybe<CreateGuidePayload>;
    createRide?: Maybe<CreateRidePayload>;
    createSpot?: Maybe<CreateSpotPayload>;
    createUser?: Maybe<CreateUserPayload>;
    updateGuide?: Maybe<UpdateGuidePayload>;
    updateGuideById?: Maybe<UpdateGuidePayload>;
    updateRide?: Maybe<UpdateRidePayload>;
    updateRideById?: Maybe<UpdateRidePayload>;
    updateSpot?: Maybe<UpdateSpotPayload>;
    updateSpotById?: Maybe<UpdateSpotPayload>;
    updateUser?: Maybe<UpdateUserPayload>;
    updateUserByUsername?: Maybe<UpdateUserPayload>;
    deleteGuide?: Maybe<DeleteGuidePayload>;
    deleteGuideById?: Maybe<DeleteGuidePayload>;
    deleteRide?: Maybe<DeleteRidePayload>;
    deleteRideById?: Maybe<DeleteRidePayload>;
    deleteSpot?: Maybe<DeleteSpotPayload>;
    deleteSpotById?: Maybe<DeleteSpotPayload>;
    deleteUser?: Maybe<DeleteUserPayload>;
    deleteUserByUsername?: Maybe<DeleteUserPayload>;
    authenticate?: Maybe<AuthenticatePayload>;
    register?: Maybe<RegisterPayload>;
    addSpotFromLatLng?: Maybe<AddSpotFromLatLngPayload>;
};
export declare type MutationCreateGuideArgs = {
    input: CreateGuideInput;
};
export declare type MutationCreateRideArgs = {
    input: CreateRideInput;
};
export declare type MutationCreateSpotArgs = {
    input: CreateSpotInput;
};
export declare type MutationCreateUserArgs = {
    input: CreateUserInput;
};
export declare type MutationUpdateGuideArgs = {
    input: UpdateGuideInput;
};
export declare type MutationUpdateGuideByIdArgs = {
    input: UpdateGuideByIdInput;
};
export declare type MutationUpdateRideArgs = {
    input: UpdateRideInput;
};
export declare type MutationUpdateRideByIdArgs = {
    input: UpdateRideByIdInput;
};
export declare type MutationUpdateSpotArgs = {
    input: UpdateSpotInput;
};
export declare type MutationUpdateSpotByIdArgs = {
    input: UpdateSpotByIdInput;
};
export declare type MutationUpdateUserArgs = {
    input: UpdateUserInput;
};
export declare type MutationUpdateUserByUsernameArgs = {
    input: UpdateUserByUsernameInput;
};
export declare type MutationDeleteGuideArgs = {
    input: DeleteGuideInput;
};
export declare type MutationDeleteGuideByIdArgs = {
    input: DeleteGuideByIdInput;
};
export declare type MutationDeleteRideArgs = {
    input: DeleteRideInput;
};
export declare type MutationDeleteRideByIdArgs = {
    input: DeleteRideByIdInput;
};
export declare type MutationDeleteSpotArgs = {
    input: DeleteSpotInput;
};
export declare type MutationDeleteSpotByIdArgs = {
    input: DeleteSpotByIdInput;
};
export declare type MutationDeleteUserArgs = {
    input: DeleteUserInput;
};
export declare type MutationDeleteUserByUsernameArgs = {
    input: DeleteUserByUsernameInput;
};
export declare type MutationAuthenticateArgs = {
    input: AuthenticateInput;
};
export declare type MutationRegisterArgs = {
    input: RegisterInput;
};
export declare type MutationAddSpotFromLatLngArgs = {
    input: SpotFromLatLngInput;
};
export declare type Node = {
    nodeId: Scalars['ID'];
};
export declare type PageInfo = {
    hasNextPage: Scalars['Boolean'];
    hasPreviousPage: Scalars['Boolean'];
    startCursor?: Maybe<Scalars['Cursor']>;
    endCursor?: Maybe<Scalars['Cursor']>;
};
export declare type Query = Node & {
    query: Query;
    nodeId: Scalars['ID'];
    node?: Maybe<Node>;
    allGuides?: Maybe<GuidesConnection>;
    allRides?: Maybe<RidesConnection>;
    allSpots?: Maybe<SpotsConnection>;
    allUsers?: Maybe<UsersConnection>;
    guideById?: Maybe<Guide>;
    rideById?: Maybe<Ride>;
    spotById?: Maybe<Spot>;
    userByUsername?: Maybe<User>;
    currentUser?: Maybe<JwtToken>;
    guide?: Maybe<Guide>;
    ride?: Maybe<Ride>;
    spot?: Maybe<Spot>;
    user?: Maybe<User>;
};
export declare type QueryNodeArgs = {
    nodeId: Scalars['ID'];
};
export declare type QueryAllGuidesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<GuidesOrderBy>>;
    condition?: Maybe<GuideCondition>;
};
export declare type QueryAllRidesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<RidesOrderBy>>;
    condition?: Maybe<RideCondition>;
};
export declare type QueryAllSpotsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<SpotsOrderBy>>;
    condition?: Maybe<SpotCondition>;
};
export declare type QueryAllUsersArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<UsersOrderBy>>;
    condition?: Maybe<UserCondition>;
};
export declare type QueryGuideByIdArgs = {
    id: Scalars['String'];
};
export declare type QueryRideByIdArgs = {
    id: Scalars['String'];
};
export declare type QuerySpotByIdArgs = {
    id: Scalars['String'];
};
export declare type QueryUserByUsernameArgs = {
    username: Scalars['String'];
};
export declare type QueryGuideArgs = {
    nodeId: Scalars['ID'];
};
export declare type QueryRideArgs = {
    nodeId: Scalars['ID'];
};
export declare type QuerySpotArgs = {
    nodeId: Scalars['ID'];
};
export declare type QueryUserArgs = {
    nodeId: Scalars['ID'];
};
export declare type RegisterInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    _username: Scalars['String'];
    _email: Scalars['String'];
    _password: Scalars['String'];
};
export declare type RegisterPayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    user?: Maybe<User>;
    query?: Maybe<Query>;
    userEdge?: Maybe<UsersEdge>;
};
export declare type RegisterPayloadUserEdgeArgs = {
    orderBy?: Maybe<Array<UsersOrderBy>>;
};
export declare type Ride = Node & {
    nodeId: Scalars['ID'];
    id: Scalars['String'];
    guide: Scalars['String'];
    fromSpot: Scalars['String'];
    toSpot: Scalars['String'];
    guideByGuide?: Maybe<Guide>;
    spotByFromSpot?: Maybe<Spot>;
    spotByToSpot?: Maybe<Spot>;
};
export declare type RideCondition = {
    id?: Maybe<Scalars['String']>;
    guide?: Maybe<Scalars['String']>;
    fromSpot?: Maybe<Scalars['String']>;
    toSpot?: Maybe<Scalars['String']>;
};
export declare type RideInput = {
    id: Scalars['String'];
    guide: Scalars['String'];
    fromSpot: Scalars['String'];
    toSpot: Scalars['String'];
};
export declare type RidePatch = {
    id?: Maybe<Scalars['String']>;
    guide?: Maybe<Scalars['String']>;
    fromSpot?: Maybe<Scalars['String']>;
    toSpot?: Maybe<Scalars['String']>;
};
export declare type RidesConnection = {
    nodes: Array<Maybe<Ride>>;
    edges: Array<RidesEdge>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export declare type RidesEdge = {
    cursor?: Maybe<Scalars['Cursor']>;
    node?: Maybe<Ride>;
};
export declare enum RidesOrderBy {
    Natural = "NATURAL",
    IdAsc = "ID_ASC",
    IdDesc = "ID_DESC",
    GuideAsc = "GUIDE_ASC",
    GuideDesc = "GUIDE_DESC",
    FromSpotAsc = "FROM_SPOT_ASC",
    FromSpotDesc = "FROM_SPOT_DESC",
    ToSpotAsc = "TO_SPOT_ASC",
    ToSpotDesc = "TO_SPOT_DESC",
    PrimaryKeyAsc = "PRIMARY_KEY_ASC",
    PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}
export declare type Spot = Node & {
    nodeId: Scalars['ID'];
    id: Scalars['String'];
    label?: Maybe<Scalars['String']>;
    guide: Scalars['String'];
    nights: Scalars['Int'];
    locked: Scalars['Boolean'];
    guideByGuide?: Maybe<Guide>;
    ridesByFromSpot: RidesConnection;
    ridesByToSpot: RidesConnection;
};
export declare type SpotRidesByFromSpotArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<RidesOrderBy>>;
    condition?: Maybe<RideCondition>;
};
export declare type SpotRidesByToSpotArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<RidesOrderBy>>;
    condition?: Maybe<RideCondition>;
};
export declare type SpotCondition = {
    id?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    guide?: Maybe<Scalars['String']>;
    nights?: Maybe<Scalars['Int']>;
    locked?: Maybe<Scalars['Boolean']>;
};
export declare type SpotFromLatLngInput = {
    lat: Scalars['Float'];
    lng: Scalars['Float'];
};
export declare type SpotInput = {
    id: Scalars['String'];
    label?: Maybe<Scalars['String']>;
    guide: Scalars['String'];
    nights: Scalars['Int'];
    locked: Scalars['Boolean'];
};
export declare type SpotPatch = {
    id?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    guide?: Maybe<Scalars['String']>;
    nights?: Maybe<Scalars['Int']>;
    locked?: Maybe<Scalars['Boolean']>;
};
export declare type SpotsConnection = {
    nodes: Array<Maybe<Spot>>;
    edges: Array<SpotsEdge>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export declare type SpotsEdge = {
    cursor?: Maybe<Scalars['Cursor']>;
    node?: Maybe<Spot>;
};
export declare enum SpotsOrderBy {
    Natural = "NATURAL",
    IdAsc = "ID_ASC",
    IdDesc = "ID_DESC",
    LabelAsc = "LABEL_ASC",
    LabelDesc = "LABEL_DESC",
    GuideAsc = "GUIDE_ASC",
    GuideDesc = "GUIDE_DESC",
    NightsAsc = "NIGHTS_ASC",
    NightsDesc = "NIGHTS_DESC",
    LockedAsc = "LOCKED_ASC",
    LockedDesc = "LOCKED_DESC",
    PrimaryKeyAsc = "PRIMARY_KEY_ASC",
    PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}
export declare type UpdateGuideByIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    guidePatch: GuidePatch;
    id: Scalars['String'];
};
export declare type UpdateGuideInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
    guidePatch: GuidePatch;
};
export declare type UpdateGuidePayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    guide?: Maybe<Guide>;
    query?: Maybe<Query>;
    userByOwner?: Maybe<User>;
    guideEdge?: Maybe<GuidesEdge>;
};
export declare type UpdateGuidePayloadGuideEdgeArgs = {
    orderBy?: Maybe<Array<GuidesOrderBy>>;
};
export declare type UpdateRideByIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    ridePatch: RidePatch;
    id: Scalars['String'];
};
export declare type UpdateRideInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
    ridePatch: RidePatch;
};
export declare type UpdateRidePayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    ride?: Maybe<Ride>;
    query?: Maybe<Query>;
    guideByGuide?: Maybe<Guide>;
    spotByFromSpot?: Maybe<Spot>;
    spotByToSpot?: Maybe<Spot>;
    rideEdge?: Maybe<RidesEdge>;
};
export declare type UpdateRidePayloadRideEdgeArgs = {
    orderBy?: Maybe<Array<RidesOrderBy>>;
};
export declare type UpdateSpotByIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    spotPatch: SpotPatch;
    id: Scalars['String'];
};
export declare type UpdateSpotInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
    spotPatch: SpotPatch;
};
export declare type UpdateSpotPayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    spot?: Maybe<Spot>;
    query?: Maybe<Query>;
    guideByGuide?: Maybe<Guide>;
    spotEdge?: Maybe<SpotsEdge>;
};
export declare type UpdateSpotPayloadSpotEdgeArgs = {
    orderBy?: Maybe<Array<SpotsOrderBy>>;
};
export declare type UpdateUserByUsernameInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    userPatch: UserPatch;
    username: Scalars['String'];
};
export declare type UpdateUserInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
    userPatch: UserPatch;
};
export declare type UpdateUserPayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    user?: Maybe<User>;
    query?: Maybe<Query>;
    userEdge?: Maybe<UsersEdge>;
};
export declare type UpdateUserPayloadUserEdgeArgs = {
    orderBy?: Maybe<Array<UsersOrderBy>>;
};
export declare type User = Node & {
    nodeId: Scalars['ID'];
    username: Scalars['String'];
    email: Scalars['String'];
    passwordHash: Scalars['String'];
    guidesByOwner: GuidesConnection;
};
export declare type UserGuidesByOwnerArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<GuidesOrderBy>>;
    condition?: Maybe<GuideCondition>;
};
export declare type UserCondition = {
    username?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    passwordHash?: Maybe<Scalars['String']>;
};
export declare type UserInput = {
    username: Scalars['String'];
    email: Scalars['String'];
    passwordHash: Scalars['String'];
};
export declare type UserPatch = {
    username?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    passwordHash?: Maybe<Scalars['String']>;
};
export declare type UsersConnection = {
    nodes: Array<Maybe<User>>;
    edges: Array<UsersEdge>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export declare type UsersEdge = {
    cursor?: Maybe<Scalars['Cursor']>;
    node?: Maybe<User>;
};
export declare enum UsersOrderBy {
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
//# sourceMappingURL=generated.d.ts.map