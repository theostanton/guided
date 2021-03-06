create type jwt_token as
(
    "role"   text,
    username varchar(128),
    exp      bigint
);

create type bounds as
(
    north double precision,
    east  double precision,
    south double precision,
    west  double precision
);

create type stage_status as enum (
    'complete',
    'ready',
    'computing',
    'stale'
    );

create type ride_status as enum (
    'complete',
    'ready',
    'stale'
    );

create type computation_status as enum (
    'scheduled',
    'failed',
    'computing',
    'success');

create type colour as enum (
    'red'
    , 'orange'
    , 'yellow'
    , 'olive'
    , 'green'
    , 'teal'
    , 'blue'
    , 'violet'
    , 'purple'
    , 'pink'
    , 'brown'
    , 'grey'
    , 'black'
    );

create type following_status as enum (
    'following','is_self','not_following','anonymous'
    );

create type transport_type as enum (
    'MOTORCYCLE', 'BICYCLE' ,'CAR'
    );

create type feed_event_type as enum ('new_guide', 'new_follows', 'self_created','joined');