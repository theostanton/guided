create function guided.authenticate(
  email text,
  password text
) returns guided.jwt_token as $$
declare
  account guided.user;
begin
  select a.* into account
  from forum_example_private.person_account as a
  where a.email = $1;

  if account.password_hash = crypt(password, account.password_hash) then
    return ('forum_example_person', account.person_id, extract(epoch from (now() + interval '2 days')))::forum_example.jwt_token;
  else
    return "lol";
  end if;
end;
$$ language plpgsql strict security definer;

comment on function forum_example.authenticate(text, text) is 'Creates a JWT token that will securely identify a person and give them certain permissions. This token expires in 2 days.';
