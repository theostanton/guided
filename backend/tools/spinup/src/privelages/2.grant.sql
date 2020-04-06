-- users
-- revoke select ON table users from guided_anonymous, guided_user;
-- grant select (username, email) on table users to guided_anonymous;
grant select, insert, update, delete on table users to guided_anonymous,guided_user;

-- guides
grant select on table guides to guided_anonymous, guided_user;
grant insert, update, delete on table guides to guided_user;

-- spots
grant select on table spots to guided_anonymous, guided_user;
grant insert, update, delete on table spots to guided_user;

-- rides
grant select on table rides to guided_anonymous, guided_user;
grant insert, update, delete on table rides to guided_user;

-- stages
grant select on table stages to guided_anonymous, guided_user;
grant insert, update, delete on table stages to guided_user;

-- temperatures
grant select on table temperatures to guided_anonymous, guided_user;
grant insert, update, delete on table temperatures to guided_user;

-- computations
grant select on table computations to guided_anonymous, guided_user;
grant insert, update, delete on table computations to guided_user;

-- functions
grant execute on function register(text,text,text) to guided_anonymous, guided_user,guided_postgraphile;
grant execute on function authenticate(text,text) to guided_anonymous, guided_user,guided_postgraphile;
grant execute on function "get_current_user"() to guided_anonymous, guided_user,guided_postgraphile;
