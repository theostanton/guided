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

alter default privileges revoke execute on functions from public;

grant usage on schema guided to anonymous, guided_user;

grant select on table guided.users to anonymous, guided_user;
grant update, delete on table guided.users to guided_user;
grant select on table guided.guides to anonymous, guided_user;
grant update, delete on table guided.guides to guided_user;
grant select on table guided.spots to anonymous, guided_user;
grant update, delete on table guided.spots to guided_user;
grant select on table guided.rides to anonymous, guided_user;
grant update, delete on table guided.rides to guided_user;
grant execute on function guided.register(text,text,text) to anonymous, guided_user;
grant execute on function guided.authenticate(text,text) to anonymous, guided_user;

grant insert on table guided.users to anonymous,guided_user;

create policy select_user on guided.users for select
  using (true);

create policy select_guide on guided.guides for select
  using (true);

create policy update_user on guided.users for update to guider_user
using (id = nullif(current_setting('jwt.claims.user_id', true), '')::text);

create policy delete_user on guided.users for delete to guider_user
using (id = nullif(current_setting('jwt.claims.user_id', true), '')::text);

create policy delete_person on forum_example.person for delete to forum_example_person
using (id = nullif(current_setting('jwt.claims.person_id', true), '')::integer);
