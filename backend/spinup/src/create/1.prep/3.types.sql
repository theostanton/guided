create type guided.jwt_token as
(
    "role"   text,
    username varchar(128),
    exp      bigint
);

create type guided.bounds as
(
    north double precision,
    east  double precision,
    south double precision,
    west  double precision
);

create type guided.stage_status as enum (
    'complete',
    'ready',
    'computing',
    'stale'
    );

create type guided.ride_status as enum (
    'complete',
    'ready',
    'stale'
    );

create type guided.computation_status as enum (
    'scheduled',
    'failed',
    'computing',
    'success');
