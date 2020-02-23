alter default privileges revoke execute on functions from guided_anonymous;
alter default privileges revoke execute on functions from guided_user;
alter default privileges revoke execute on functions from guided_postgraphile;

grant all privileges on all functions IN SCHEMA public to guided_anonymous;
grant usage on schema public to guided_anonymous;
grant usage on schema public to guided_user;
grant usage on schema public to guided_postgraphile;