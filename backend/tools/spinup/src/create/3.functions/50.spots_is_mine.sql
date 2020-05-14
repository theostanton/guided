create or replace function spots_is_mine(spot spots) returns boolean as
$$
select coalesce(current_setting('jwt.claims.username', true)::text, '!') = spot.owner
$$ language sql stable;