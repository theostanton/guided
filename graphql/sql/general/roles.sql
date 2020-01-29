create role postgraphile_staging login password 'postgraphile_staging';

create role anonymous;

grant anonymous to postgraphile_staging;

create role guided_user;
grant guided_user to postgraphile_staging;

create type guided.jwt_token as (
  role text,
  username text,
  exp bigint
);