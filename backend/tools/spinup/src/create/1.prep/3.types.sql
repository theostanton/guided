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
