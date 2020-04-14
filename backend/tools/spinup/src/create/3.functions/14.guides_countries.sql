create or replace function guides_countries(_guide guides) returns varchar(2)[] as
$$
select array_remove(array_agg(distinct s.country), null)
from spots as s
where _guide.id = s.guide
$$ language sql stable
;

