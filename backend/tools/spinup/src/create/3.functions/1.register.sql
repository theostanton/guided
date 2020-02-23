create function register(_username text,
                                _email text,
                                _password text) returns users as
$$
declare
    user_info users;
begin
    insert into users (username, email, password_hash, created)
    values (_username, _email, crypt(_password, gen_salt('bf')), now())
    returning * into user_info;

    return user_info;
end;
$$ language plpgsql strict
                    security definer;

comment on function register( text, text, text) is 'Registers a single user';