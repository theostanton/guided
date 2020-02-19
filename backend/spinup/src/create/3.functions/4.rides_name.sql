create or replace function guided.rides_name(ride guided.rides) returns text as
$$
select concat(coalesce(f.label, f.location), ' to ', coalesce(t.label, t.location))
from guided.rides as r
         inner join guided.spots f
                    on r.from_spot = f.id
         inner join guided.spots t on r.to_spot = t.id
where ride.id = r.id;
$$ language sql stable;