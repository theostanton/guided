create or replace function guides_duration_seconds(_guide guides) returns bigint as
$$
select sum(r.duration_seconds)
from rides as r
where r.guide = _guide.id
$$ language sql stable
;

