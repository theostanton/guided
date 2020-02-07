/// <reference types="react" />
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export declare type Maybe<T> = T | null;
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    JwtToken: any;
    Cursor: any;
    Date: any;
};
export declare type AuthenticateInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type AuthenticatePayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    jwtToken?: Maybe<Scalars['JwtToken']>;
    query?: Maybe<Query>;
};
export declare type CreateGuideInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    guide: GuideInput;
};
export declare type CreateGuidePayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    guide?: Maybe<Guide>;
    guideEdge?: Maybe<GuidesEdge>;
    query?: Maybe<Query>;
    userByOwner?: Maybe<User>;
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
    guideByGuide?: Maybe<Guide>;
    query?: Maybe<Query>;
    ride?: Maybe<Ride>;
    rideEdge?: Maybe<RidesEdge>;
    spotByFromSpot?: Maybe<Spot>;
    spotByToSpot?: Maybe<Spot>;
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
    guideByGuide?: Maybe<Guide>;
    query?: Maybe<Query>;
    spot?: Maybe<Spot>;
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
    query?: Maybe<Query>;
    user?: Maybe<User>;
    userEdge?: Maybe<UsersEdge>;
};
export declare type CreateUserPayloadUserEdgeArgs = {
    orderBy?: Maybe<Array<UsersOrderBy>>;
};
export declare type DeleteGuideByNodeIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
};
export declare type DeleteGuideInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    id: Scalars['String'];
};
export declare type DeleteGuidePayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    deletedGuideNodeId?: Maybe<Scalars['ID']>;
    guide?: Maybe<Guide>;
    guideEdge?: Maybe<GuidesEdge>;
    query?: Maybe<Query>;
    userByOwner?: Maybe<User>;
};
export declare type DeleteGuidePayloadGuideEdgeArgs = {
    orderBy?: Maybe<Array<GuidesOrderBy>>;
};
export declare type DeleteRideByNodeIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
};
export declare type DeleteRideInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    id: Scalars['String'];
};
export declare type DeleteRidePayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    deletedRideNodeId?: Maybe<Scalars['ID']>;
    guideByGuide?: Maybe<Guide>;
    query?: Maybe<Query>;
    ride?: Maybe<Ride>;
    rideEdge?: Maybe<RidesEdge>;
    spotByFromSpot?: Maybe<Spot>;
    spotByToSpot?: Maybe<Spot>;
};
export declare type DeleteRidePayloadRideEdgeArgs = {
    orderBy?: Maybe<Array<RidesOrderBy>>;
};
export declare type DeleteSpotByNodeIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
};
export declare type DeleteSpotInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    id: Scalars['String'];
};
export declare type DeleteSpotPayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    deletedSpotNodeId?: Maybe<Scalars['ID']>;
    guideByGuide?: Maybe<Guide>;
    query?: Maybe<Query>;
    spot?: Maybe<Spot>;
    spotEdge?: Maybe<SpotsEdge>;
};
export declare type DeleteSpotPayloadSpotEdgeArgs = {
    orderBy?: Maybe<Array<SpotsOrderBy>>;
};
export declare type DeleteUserByNodeIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
};
export declare type DeleteUserInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    username: Scalars['String'];
};
export declare type DeleteUserPayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    deletedUserNodeId?: Maybe<Scalars['ID']>;
    query?: Maybe<Query>;
    user?: Maybe<User>;
    userEdge?: Maybe<UsersEdge>;
};
export declare type DeleteUserPayloadUserEdgeArgs = {
    orderBy?: Maybe<Array<UsersOrderBy>>;
};
export declare type Guide = Node & {
    id: Scalars['String'];
    nodeId: Scalars['ID'];
    owner: Scalars['String'];
    ridesByGuide: RidesConnection;
    slug: Scalars['String'];
    spotsByGuide: SpotsConnection;
    startDate?: Maybe<Scalars['Date']>;
    title: Scalars['String'];
    userByOwner?: Maybe<User>;
};
export declare type GuideRidesByGuideArgs = {
    after?: Maybe<Scalars['Cursor']>;
    before?: Maybe<Scalars['Cursor']>;
    condition?: Maybe<RideCondition>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Array<RidesOrderBy>>;
};
export declare type GuideSpotsByGuideArgs = {
    after?: Maybe<Scalars['Cursor']>;
    before?: Maybe<Scalars['Cursor']>;
    condition?: Maybe<SpotCondition>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Array<SpotsOrderBy>>;
};
export declare type GuideCondition = {
    id?: Maybe<Scalars['String']>;
    owner?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    startDate?: Maybe<Scalars['Date']>;
    title?: Maybe<Scalars['String']>;
};
export declare type GuideInput = {
    id: Scalars['String'];
    owner: Scalars['String'];
    slug: Scalars['String'];
    startDate?: Maybe<Scalars['Date']>;
    title: Scalars['String'];
};
export declare type GuidePatch = {
    id?: Maybe<Scalars['String']>;
    owner?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    startDate?: Maybe<Scalars['Date']>;
    title?: Maybe<Scalars['String']>;
};
export declare type GuidesConnection = {
    edges: Array<GuidesEdge>;
    nodes: Array<Maybe<Guide>>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export declare type GuidesEdge = {
    cursor?: Maybe<Scalars['Cursor']>;
    node?: Maybe<Guide>;
};
export declare enum GuidesOrderBy {
    IdAsc = "ID_ASC",
    IdDesc = "ID_DESC",
    Natural = "NATURAL",
    OwnerAsc = "OWNER_ASC",
    OwnerDesc = "OWNER_DESC",
    PrimaryKeyAsc = "PRIMARY_KEY_ASC",
    PrimaryKeyDesc = "PRIMARY_KEY_DESC",
    SlugAsc = "SLUG_ASC",
    SlugDesc = "SLUG_DESC",
    StartDateAsc = "START_DATE_ASC",
    StartDateDesc = "START_DATE_DESC",
    TitleAsc = "TITLE_ASC",
    TitleDesc = "TITLE_DESC"
}
export declare type Mutation = {
    authenticate?: Maybe<AuthenticatePayload>;
    createGuide?: Maybe<CreateGuidePayload>;
    createRide?: Maybe<CreateRidePayload>;
    createSpot?: Maybe<CreateSpotPayload>;
    createUser?: Maybe<CreateUserPayload>;
    deleteGuide?: Maybe<DeleteGuidePayload>;
    deleteGuideByNodeId?: Maybe<DeleteGuidePayload>;
    deleteRide?: Maybe<DeleteRidePayload>;
    deleteRideByNodeId?: Maybe<DeleteRidePayload>;
    deleteSpot?: Maybe<DeleteSpotPayload>;
    deleteSpotByNodeId?: Maybe<DeleteSpotPayload>;
    deleteUser?: Maybe<DeleteUserPayload>;
    deleteUserByNodeId?: Maybe<DeleteUserPayload>;
    register?: Maybe<RegisterPayload>;
    updateGuide?: Maybe<UpdateGuidePayload>;
    updateGuideByNodeId?: Maybe<UpdateGuidePayload>;
    updateRide?: Maybe<UpdateRidePayload>;
    updateRideByNodeId?: Maybe<UpdateRidePayload>;
    updateSpot?: Maybe<UpdateSpotPayload>;
    updateSpotByNodeId?: Maybe<UpdateSpotPayload>;
    updateUser?: Maybe<UpdateUserPayload>;
    updateUserByNodeId?: Maybe<UpdateUserPayload>;
};
export declare type MutationAuthenticateArgs = {
    input: AuthenticateInput;
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
export declare type MutationDeleteGuideArgs = {
    input: DeleteGuideInput;
};
export declare type MutationDeleteGuideByNodeIdArgs = {
    input: DeleteGuideByNodeIdInput;
};
export declare type MutationDeleteRideArgs = {
    input: DeleteRideInput;
};
export declare type MutationDeleteRideByNodeIdArgs = {
    input: DeleteRideByNodeIdInput;
};
export declare type MutationDeleteSpotArgs = {
    input: DeleteSpotInput;
};
export declare type MutationDeleteSpotByNodeIdArgs = {
    input: DeleteSpotByNodeIdInput;
};
export declare type MutationDeleteUserArgs = {
    input: DeleteUserInput;
};
export declare type MutationDeleteUserByNodeIdArgs = {
    input: DeleteUserByNodeIdInput;
};
export declare type MutationRegisterArgs = {
    input: RegisterInput;
};
export declare type MutationUpdateGuideArgs = {
    input: UpdateGuideInput;
};
export declare type MutationUpdateGuideByNodeIdArgs = {
    input: UpdateGuideByNodeIdInput;
};
export declare type MutationUpdateRideArgs = {
    input: UpdateRideInput;
};
export declare type MutationUpdateRideByNodeIdArgs = {
    input: UpdateRideByNodeIdInput;
};
export declare type MutationUpdateSpotArgs = {
    input: UpdateSpotInput;
};
export declare type MutationUpdateSpotByNodeIdArgs = {
    input: UpdateSpotByNodeIdInput;
};
export declare type MutationUpdateUserArgs = {
    input: UpdateUserInput;
};
export declare type MutationUpdateUserByNodeIdArgs = {
    input: UpdateUserByNodeIdInput;
};
export declare type Node = {
    nodeId: Scalars['ID'];
};
export declare type PageInfo = {
    endCursor?: Maybe<Scalars['Cursor']>;
    hasNextPage: Scalars['Boolean'];
    hasPreviousPage: Scalars['Boolean'];
    startCursor?: Maybe<Scalars['Cursor']>;
};
export declare type Query = Node & {
    currentUser?: Maybe<Scalars['JwtToken']>;
    guide?: Maybe<Guide>;
    guideByNodeId?: Maybe<Guide>;
    guides?: Maybe<GuidesConnection>;
    node?: Maybe<Node>;
    nodeId: Scalars['ID'];
    query: Query;
    ride?: Maybe<Ride>;
    rideByNodeId?: Maybe<Ride>;
    rides?: Maybe<RidesConnection>;
    spot?: Maybe<Spot>;
    spotByNodeId?: Maybe<Spot>;
    spots?: Maybe<SpotsConnection>;
    user?: Maybe<User>;
    userByNodeId?: Maybe<User>;
    users?: Maybe<UsersConnection>;
};
export declare type QueryGuideArgs = {
    id: Scalars['String'];
};
export declare type QueryGuideByNodeIdArgs = {
    nodeId: Scalars['ID'];
};
export declare type QueryGuidesArgs = {
    after?: Maybe<Scalars['Cursor']>;
    before?: Maybe<Scalars['Cursor']>;
    condition?: Maybe<GuideCondition>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Array<GuidesOrderBy>>;
};
export declare type QueryNodeArgs = {
    nodeId: Scalars['ID'];
};
export declare type QueryRideArgs = {
    id: Scalars['String'];
};
export declare type QueryRideByNodeIdArgs = {
    nodeId: Scalars['ID'];
};
export declare type QueryRidesArgs = {
    after?: Maybe<Scalars['Cursor']>;
    before?: Maybe<Scalars['Cursor']>;
    condition?: Maybe<RideCondition>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Array<RidesOrderBy>>;
};
export declare type QuerySpotArgs = {
    id: Scalars['String'];
};
export declare type QuerySpotByNodeIdArgs = {
    nodeId: Scalars['ID'];
};
export declare type QuerySpotsArgs = {
    after?: Maybe<Scalars['Cursor']>;
    before?: Maybe<Scalars['Cursor']>;
    condition?: Maybe<SpotCondition>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Array<SpotsOrderBy>>;
};
export declare type QueryUserArgs = {
    username: Scalars['String'];
};
export declare type QueryUserByNodeIdArgs = {
    nodeId: Scalars['ID'];
};
export declare type QueryUsersArgs = {
    after?: Maybe<Scalars['Cursor']>;
    before?: Maybe<Scalars['Cursor']>;
    condition?: Maybe<UserCondition>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Array<UsersOrderBy>>;
};
export declare type RegisterInput = {
    _email: Scalars['String'];
    _password: Scalars['String'];
    _username: Scalars['String'];
    clientMutationId?: Maybe<Scalars['String']>;
};
export declare type RegisterPayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    query?: Maybe<Query>;
    user?: Maybe<User>;
    userEdge?: Maybe<UsersEdge>;
};
export declare type RegisterPayloadUserEdgeArgs = {
    orderBy?: Maybe<Array<UsersOrderBy>>;
};
export declare type Ride = Node & {
    fromSpot: Scalars['String'];
    guide: Scalars['String'];
    guideByGuide?: Maybe<Guide>;
    id: Scalars['String'];
    nodeId: Scalars['ID'];
    spotByFromSpot?: Maybe<Spot>;
    spotByToSpot?: Maybe<Spot>;
    toSpot: Scalars['String'];
};
export declare type RideCondition = {
    fromSpot?: Maybe<Scalars['String']>;
    guide?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    toSpot?: Maybe<Scalars['String']>;
};
export declare type RideInput = {
    fromSpot: Scalars['String'];
    guide: Scalars['String'];
    id: Scalars['String'];
    toSpot: Scalars['String'];
};
export declare type RidePatch = {
    fromSpot?: Maybe<Scalars['String']>;
    guide?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    toSpot?: Maybe<Scalars['String']>;
};
export declare type RidesConnection = {
    edges: Array<RidesEdge>;
    nodes: Array<Maybe<Ride>>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export declare type RidesEdge = {
    cursor?: Maybe<Scalars['Cursor']>;
    node?: Maybe<Ride>;
};
export declare enum RidesOrderBy {
    FromSpotAsc = "FROM_SPOT_ASC",
    FromSpotDesc = "FROM_SPOT_DESC",
    GuideAsc = "GUIDE_ASC",
    GuideDesc = "GUIDE_DESC",
    IdAsc = "ID_ASC",
    IdDesc = "ID_DESC",
    Natural = "NATURAL",
    PrimaryKeyAsc = "PRIMARY_KEY_ASC",
    PrimaryKeyDesc = "PRIMARY_KEY_DESC",
    ToSpotAsc = "TO_SPOT_ASC",
    ToSpotDesc = "TO_SPOT_DESC"
}
export declare type Spot = Node & {
    guide: Scalars['String'];
    guideByGuide?: Maybe<Guide>;
    id: Scalars['String'];
    label?: Maybe<Scalars['String']>;
    locked?: Maybe<Scalars['Boolean']>;
    nights?: Maybe<Scalars['Int']>;
    nodeId: Scalars['ID'];
    ridesByFromSpot: RidesConnection;
    ridesByToSpot: RidesConnection;
};
export declare type SpotRidesByFromSpotArgs = {
    after?: Maybe<Scalars['Cursor']>;
    before?: Maybe<Scalars['Cursor']>;
    condition?: Maybe<RideCondition>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Array<RidesOrderBy>>;
};
export declare type SpotRidesByToSpotArgs = {
    after?: Maybe<Scalars['Cursor']>;
    before?: Maybe<Scalars['Cursor']>;
    condition?: Maybe<RideCondition>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Array<RidesOrderBy>>;
};
export declare type SpotCondition = {
    guide?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    locked?: Maybe<Scalars['Boolean']>;
    nights?: Maybe<Scalars['Int']>;
};
export declare type SpotInput = {
    guide: Scalars['String'];
    id: Scalars['String'];
    label?: Maybe<Scalars['String']>;
    locked?: Maybe<Scalars['Boolean']>;
    nights?: Maybe<Scalars['Int']>;
};
export declare type SpotPatch = {
    guide?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    locked?: Maybe<Scalars['Boolean']>;
    nights?: Maybe<Scalars['Int']>;
};
export declare type SpotsConnection = {
    edges: Array<SpotsEdge>;
    nodes: Array<Maybe<Spot>>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export declare type SpotsEdge = {
    cursor?: Maybe<Scalars['Cursor']>;
    node?: Maybe<Spot>;
};
export declare enum SpotsOrderBy {
    GuideAsc = "GUIDE_ASC",
    GuideDesc = "GUIDE_DESC",
    IdAsc = "ID_ASC",
    IdDesc = "ID_DESC",
    LabelAsc = "LABEL_ASC",
    LabelDesc = "LABEL_DESC",
    LockedAsc = "LOCKED_ASC",
    LockedDesc = "LOCKED_DESC",
    Natural = "NATURAL",
    NightsAsc = "NIGHTS_ASC",
    NightsDesc = "NIGHTS_DESC",
    PrimaryKeyAsc = "PRIMARY_KEY_ASC",
    PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}
export declare type UpdateGuideByNodeIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
    patch: GuidePatch;
};
export declare type UpdateGuideInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    patch: GuidePatch;
};
export declare type UpdateGuidePayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    guide?: Maybe<Guide>;
    guideEdge?: Maybe<GuidesEdge>;
    query?: Maybe<Query>;
    userByOwner?: Maybe<User>;
};
export declare type UpdateGuidePayloadGuideEdgeArgs = {
    orderBy?: Maybe<Array<GuidesOrderBy>>;
};
export declare type UpdateRideByNodeIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
    patch: RidePatch;
};
export declare type UpdateRideInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    patch: RidePatch;
};
export declare type UpdateRidePayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    guideByGuide?: Maybe<Guide>;
    query?: Maybe<Query>;
    ride?: Maybe<Ride>;
    rideEdge?: Maybe<RidesEdge>;
    spotByFromSpot?: Maybe<Spot>;
    spotByToSpot?: Maybe<Spot>;
};
export declare type UpdateRidePayloadRideEdgeArgs = {
    orderBy?: Maybe<Array<RidesOrderBy>>;
};
export declare type UpdateSpotByNodeIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
    patch: SpotPatch;
};
export declare type UpdateSpotInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    patch: SpotPatch;
};
export declare type UpdateSpotPayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    guideByGuide?: Maybe<Guide>;
    query?: Maybe<Query>;
    spot?: Maybe<Spot>;
    spotEdge?: Maybe<SpotsEdge>;
};
export declare type UpdateSpotPayloadSpotEdgeArgs = {
    orderBy?: Maybe<Array<SpotsOrderBy>>;
};
export declare type UpdateUserByNodeIdInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    nodeId: Scalars['ID'];
    patch: UserPatch;
};
export declare type UpdateUserInput = {
    clientMutationId?: Maybe<Scalars['String']>;
    patch: UserPatch;
    username: Scalars['String'];
};
export declare type UpdateUserPayload = {
    clientMutationId?: Maybe<Scalars['String']>;
    query?: Maybe<Query>;
    user?: Maybe<User>;
    userEdge?: Maybe<UsersEdge>;
};
export declare type UpdateUserPayloadUserEdgeArgs = {
    orderBy?: Maybe<Array<UsersOrderBy>>;
};
export declare type User = Node & {
    email: Scalars['String'];
    guidesByOwner: GuidesConnection;
    nodeId: Scalars['ID'];
    passwordHash: Scalars['String'];
    username: Scalars['String'];
};
export declare type UserGuidesByOwnerArgs = {
    after?: Maybe<Scalars['Cursor']>;
    before?: Maybe<Scalars['Cursor']>;
    condition?: Maybe<GuideCondition>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Array<GuidesOrderBy>>;
};
export declare type UserCondition = {
    email?: Maybe<Scalars['String']>;
    passwordHash?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
};
export declare type UserInput = {
    email: Scalars['String'];
    passwordHash: Scalars['String'];
    username: Scalars['String'];
};
export declare type UserPatch = {
    email?: Maybe<Scalars['String']>;
    passwordHash?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
};
export declare type UsersConnection = {
    edges: Array<UsersEdge>;
    nodes: Array<Maybe<User>>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export declare type UsersEdge = {
    cursor?: Maybe<Scalars['Cursor']>;
    node?: Maybe<User>;
};
export declare enum UsersOrderBy {
    EmailAsc = "EMAIL_ASC",
    EmailDesc = "EMAIL_DESC",
    Natural = "NATURAL",
    PasswordHashAsc = "PASSWORD_HASH_ASC",
    PasswordHashDesc = "PASSWORD_HASH_DESC",
    PrimaryKeyAsc = "PRIMARY_KEY_ASC",
    PrimaryKeyDesc = "PRIMARY_KEY_DESC",
    UsernameAsc = "USERNAME_ASC",
    UsernameDesc = "USERNAME_DESC"
}
export declare type SomeQueryQueryVariables = {};
export declare type SomeQueryQuery = {
    users: Maybe<(Pick<UsersConnection, 'totalCount'> & {
        nodes: Array<Maybe<Pick<User, 'email' | 'username'>>>;
    })>;
};
export declare type CreateGuideMutationVariables = {
    guide: GuideInput;
};
export declare type CreateGuideMutation = {
    createGuide: Maybe<{
        guide: Maybe<Pick<Guide, 'id'>>;
    }>;
};
export declare type DeleteGuideMutationVariables = {
    guideId: Scalars['String'];
};
export declare type DeleteGuideMutation = {
    deleteGuide: Maybe<{
        guide: Maybe<Pick<Guide, 'id'>>;
    }>;
};
export declare type AllGuideTitlesForUserQueryVariables = {
    owner: Scalars['String'];
};
export declare type AllGuideTitlesForUserQuery = {
    guides: Maybe<{
        nodes: Array<Maybe<Pick<Guide, 'id' | 'title' | 'slug' | 'owner'>>>;
    }>;
};
export declare type GetGuideBySlugQueryVariables = {
    slug: Scalars['String'];
    owner: Scalars['String'];
};
export declare type GetGuideBySlugQuery = {
    guides: Maybe<{
        nodes: Array<Maybe<(Pick<Guide, 'id' | 'title' | 'slug' | 'owner' | 'startDate'> & {
            ridesByGuide: Pick<RidesConnection, 'totalCount'>;
            spotsByGuide: Pick<SpotsConnection, 'totalCount'>;
        })>>;
    }>;
};
export declare type LoginMutationVariables = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type LoginMutation = {
    authenticate: Maybe<Pick<AuthenticatePayload, 'jwtToken'>>;
};
export declare type SignUpMutationVariables = {
    username: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type SignUpMutation = {
    register: Maybe<{
        user: Maybe<Pick<User, 'username' | 'email'>>;
    }>;
};
export declare type GetUsernameQueryVariables = {
    email: Scalars['String'];
};
export declare type GetUsernameQuery = {
    users: Maybe<{
        nodes: Array<Maybe<Pick<User, 'username'>>>;
    }>;
};
export declare const SomeQueryDocument: import("apollo-link").DocumentNode;
export declare type SomeQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SomeQueryQuery, SomeQueryQueryVariables>, 'query'>;
export declare const SomeQueryComponent: (props: Pick<ApolloReactComponents.QueryComponentOptions<SomeQueryQuery, SomeQueryQueryVariables>, "client" | "context" | "children" | "displayName" | "onError" | "variables" | "errorPolicy" | "fetchPolicy" | "skip" | "onCompleted" | "ssr" | "pollInterval" | "notifyOnNetworkStatusChange" | "partialRefetch" | "returnPartialData">) => JSX.Element;
export declare function useSomeQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SomeQueryQuery, SomeQueryQueryVariables>): ApolloReactCommon.QueryResult<SomeQueryQuery, SomeQueryQueryVariables>;
export declare function useSomeQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SomeQueryQuery, SomeQueryQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<SomeQueryQueryVariables> | undefined) => void, ApolloReactCommon.QueryResult<SomeQueryQuery, SomeQueryQueryVariables>];
export declare type SomeQueryQueryHookResult = ReturnType<typeof useSomeQueryQuery>;
export declare type SomeQueryLazyQueryHookResult = ReturnType<typeof useSomeQueryLazyQuery>;
export declare type SomeQueryQueryResult = ApolloReactCommon.QueryResult<SomeQueryQuery, SomeQueryQueryVariables>;
export declare const CreateGuideDocument: import("apollo-link").DocumentNode;
export declare type CreateGuideMutationFn = ApolloReactCommon.MutationFunction<CreateGuideMutation, CreateGuideMutationVariables>;
export declare type CreateGuideComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateGuideMutation, CreateGuideMutationVariables>, 'mutation'>;
export declare const CreateGuideComponent: (props: Pick<ApolloReactComponents.MutationComponentOptions<CreateGuideMutation, CreateGuideMutationVariables>, "client" | "update" | "context" | "children" | "onError" | "variables" | "optimisticResponse" | "refetchQueries" | "awaitRefetchQueries" | "errorPolicy" | "fetchPolicy" | "onCompleted" | "notifyOnNetworkStatusChange" | "ignoreResults">) => JSX.Element;
export declare function useCreateGuideMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateGuideMutation, CreateGuideMutationVariables>): ApolloReactHooks.MutationTuple<CreateGuideMutation, CreateGuideMutationVariables>;
export declare type CreateGuideMutationHookResult = ReturnType<typeof useCreateGuideMutation>;
export declare type CreateGuideMutationResult = ApolloReactCommon.MutationResult<CreateGuideMutation>;
export declare type CreateGuideMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateGuideMutation, CreateGuideMutationVariables>;
export declare const DeleteGuideDocument: import("apollo-link").DocumentNode;
export declare type DeleteGuideMutationFn = ApolloReactCommon.MutationFunction<DeleteGuideMutation, DeleteGuideMutationVariables>;
export declare type DeleteGuideComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteGuideMutation, DeleteGuideMutationVariables>, 'mutation'>;
export declare const DeleteGuideComponent: (props: Pick<ApolloReactComponents.MutationComponentOptions<DeleteGuideMutation, DeleteGuideMutationVariables>, "client" | "update" | "context" | "children" | "onError" | "variables" | "optimisticResponse" | "refetchQueries" | "awaitRefetchQueries" | "errorPolicy" | "fetchPolicy" | "onCompleted" | "notifyOnNetworkStatusChange" | "ignoreResults">) => JSX.Element;
export declare function useDeleteGuideMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteGuideMutation, DeleteGuideMutationVariables>): ApolloReactHooks.MutationTuple<DeleteGuideMutation, DeleteGuideMutationVariables>;
export declare type DeleteGuideMutationHookResult = ReturnType<typeof useDeleteGuideMutation>;
export declare type DeleteGuideMutationResult = ApolloReactCommon.MutationResult<DeleteGuideMutation>;
export declare type DeleteGuideMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteGuideMutation, DeleteGuideMutationVariables>;
export declare const AllGuideTitlesForUserDocument: import("apollo-link").DocumentNode;
export declare type AllGuideTitlesForUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>, 'query'> & ({
    variables: AllGuideTitlesForUserQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
});
export declare const AllGuideTitlesForUserComponent: (props: AllGuideTitlesForUserComponentProps) => JSX.Element;
export declare function useAllGuideTitlesForUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>): ApolloReactCommon.QueryResult<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>;
export declare function useAllGuideTitlesForUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<AllGuideTitlesForUserQueryVariables> | undefined) => void, ApolloReactCommon.QueryResult<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>];
export declare type AllGuideTitlesForUserQueryHookResult = ReturnType<typeof useAllGuideTitlesForUserQuery>;
export declare type AllGuideTitlesForUserLazyQueryHookResult = ReturnType<typeof useAllGuideTitlesForUserLazyQuery>;
export declare type AllGuideTitlesForUserQueryResult = ApolloReactCommon.QueryResult<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>;
export declare const GetGuideBySlugDocument: import("apollo-link").DocumentNode;
export declare type GetGuideBySlugComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>, 'query'> & ({
    variables: GetGuideBySlugQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
});
export declare const GetGuideBySlugComponent: (props: GetGuideBySlugComponentProps) => JSX.Element;
export declare function useGetGuideBySlugQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>): ApolloReactCommon.QueryResult<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>;
export declare function useGetGuideBySlugLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<GetGuideBySlugQueryVariables> | undefined) => void, ApolloReactCommon.QueryResult<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>];
export declare type GetGuideBySlugQueryHookResult = ReturnType<typeof useGetGuideBySlugQuery>;
export declare type GetGuideBySlugLazyQueryHookResult = ReturnType<typeof useGetGuideBySlugLazyQuery>;
export declare type GetGuideBySlugQueryResult = ApolloReactCommon.QueryResult<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>;
export declare const LoginDocument: import("apollo-link").DocumentNode;
export declare type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export declare type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;
export declare const LoginComponent: (props: Pick<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, "client" | "update" | "context" | "children" | "onError" | "variables" | "optimisticResponse" | "refetchQueries" | "awaitRefetchQueries" | "errorPolicy" | "fetchPolicy" | "onCompleted" | "notifyOnNetworkStatusChange" | "ignoreResults">) => JSX.Element;
export declare function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>): ApolloReactHooks.MutationTuple<LoginMutation, LoginMutationVariables>;
export declare type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export declare type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export declare type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export declare const SignUpDocument: import("apollo-link").DocumentNode;
export declare type SignUpMutationFn = ApolloReactCommon.MutationFunction<SignUpMutation, SignUpMutationVariables>;
export declare type SignUpComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignUpMutation, SignUpMutationVariables>, 'mutation'>;
export declare const SignUpComponent: (props: Pick<ApolloReactComponents.MutationComponentOptions<SignUpMutation, SignUpMutationVariables>, "client" | "update" | "context" | "children" | "onError" | "variables" | "optimisticResponse" | "refetchQueries" | "awaitRefetchQueries" | "errorPolicy" | "fetchPolicy" | "onCompleted" | "notifyOnNetworkStatusChange" | "ignoreResults">) => JSX.Element;
export declare function useSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignUpMutation, SignUpMutationVariables>): ApolloReactHooks.MutationTuple<SignUpMutation, SignUpMutationVariables>;
export declare type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export declare type SignUpMutationResult = ApolloReactCommon.MutationResult<SignUpMutation>;
export declare type SignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export declare const GetUsernameDocument: import("apollo-link").DocumentNode;
export declare type GetUsernameComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUsernameQuery, GetUsernameQueryVariables>, 'query'> & ({
    variables: GetUsernameQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
});
export declare const GetUsernameComponent: (props: GetUsernameComponentProps) => JSX.Element;
export declare function useGetUsernameQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsernameQuery, GetUsernameQueryVariables>): ApolloReactCommon.QueryResult<GetUsernameQuery, GetUsernameQueryVariables>;
export declare function useGetUsernameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsernameQuery, GetUsernameQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<GetUsernameQueryVariables> | undefined) => void, ApolloReactCommon.QueryResult<GetUsernameQuery, GetUsernameQueryVariables>];
export declare type GetUsernameQueryHookResult = ReturnType<typeof useGetUsernameQuery>;
export declare type GetUsernameLazyQueryHookResult = ReturnType<typeof useGetUsernameLazyQuery>;
export declare type GetUsernameQueryResult = ApolloReactCommon.QueryResult<GetUsernameQuery, GetUsernameQueryVariables>;
//# sourceMappingURL=generated.d.ts.map