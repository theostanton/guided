create role guided_anonymous;
create role guided_user;
create role guided_postgraphile login password 'password';
grant guided_anonymous to guided_postgraphile;
grant guided_user to guided_postgraphile;