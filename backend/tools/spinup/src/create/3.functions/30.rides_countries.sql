create or replace function rides_countries(ride rides) returns varchar(2)[] as
$$
select array_remove(array_agg(distinct s.country), null)
from spots as s
where ride.from_spot = s.id
   or ride.to_spot = s.id
$$ language sql stable
;

