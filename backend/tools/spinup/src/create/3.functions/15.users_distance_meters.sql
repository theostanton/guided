create or replace function users_distance_meters(_user users) returns bigint as
$$
select sum(r.distance_meters)
from rides as r
where r.owner = _user.username
$$ language sql stable
;

