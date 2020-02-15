create or replace function guided.authenticate(email text, password text) returns guided.jwt_token
    strict
    security definer
    language plpgsql
as
$$
declare
    userInfo guided.users;
begin
    select *
    into userInfo
    from guided.users as u
    where u.email = $1;

    if userInfo.password_hash = guided.crypt(password, userInfo.password_hash) then
        return ('guided_user'::text, userInfo.username,
                extract(epoch from (now() + interval '2 days'))::bigint)::guided.jwt_token;
    else
        return null;
    end if;
end;
$$;

comment on function authenticate(text, text) is 'Creates a JWT token that will securely identify a person and give them certain permissions. This token expires in 2 days.';

