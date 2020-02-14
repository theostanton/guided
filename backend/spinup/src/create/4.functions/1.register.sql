create function guided.register(_username text,
                                _email text,
                                _password text) returns guided.users as
$$
declare
    user_info guided.users;
begin
    insert into guided.users (username, email, password_hash)
    values (_username, _email, guided.crypt(_password, guided.gen_salt('bf')))
    returning * into user_info;

    return user_info;
end;
$$ language plpgsql strict
                    security definer;

comment on function guided.register( text, text, text) is 'Registers a single user';