create or replace function guides_is_mine(guide guides) returns boolean as
$$
select coalesce(current_setting('jwt.claims.username', true)::text, '!') = guide.owner
$$ language sql stable;