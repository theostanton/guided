create or replace function rides_is_mine(ride rides) returns boolean as
$$
select coalesce(current_setting('jwt.claims.username', true)::text, '!') = ride.owner
$$ language sql stable;