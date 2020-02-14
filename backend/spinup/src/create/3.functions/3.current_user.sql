create function "get_current_user"() returns jwt_token
    stable
    language sql
as
$$
select 'guided_user'                                   as role,
       current_setting('jwt.claims.username', true)    as username,
       current_setting('jwt.claims.exp', true)::bigint as exp
$$;