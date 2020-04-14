create or replace function guides_distance_meters(_guide guides) returns bigint as
$$
select sum(r.distance_meters)
from rides as r
where r.guide = _guide.id
$$ language sql stable
;

