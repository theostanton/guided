-- guided.users
grant select on table guided.users to guided_anonymous, guided_user;
grant insert, update, delete on table guided.users to guided_user;

-- guides
grant select on table guided.guides to guided_anonymous, guided_user;
grant insert, update, delete on table guided.guides to guided_user;

-- guided.spots
grant select on table guided.spots to guided_anonymous, guided_user;
grant insert, update, delete on table guided.spots to guided_user;

-- guided.rides
grant select on table guided.rides to guided_anonymous, guided_user;
grant insert, update, delete on table guided.rides to guided_user;

-- guided.stages
grant select on table guided.stages to guided_anonymous, guided_user;
grant insert, update, delete on table guided.stages to guided_user;

-- temperatures
grant select on table guided.temperatures to guided_anonymous, guided_user;
grant insert, update, delete on table guided.temperatures to guided_user;

-- functions
grant execute on function guided.register(text,text,text) to guided_anonymous, guided_user,guided_postgraphile;
grant execute on function guided.authenticate(text,text) to guided_anonymous, guided_user,guided_postgraphile;
grant execute on function guided."get_current_user"() to guided_anonymous, guided_user,guided_postgraphile;
