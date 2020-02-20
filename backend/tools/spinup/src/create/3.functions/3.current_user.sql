create or replace function guided."get_current_user"() returns guided.jwt_token
    stable
    language sql
as
$$
select 'guided_user' ::text                               as role,
       current_setting('jwt.claims.username', true)::text as username,
       current_setting('jwt.claims.exp', true)::bigint    as exp
$$;