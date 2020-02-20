create or replace function guided.rides_has_border(ride guided.rides) returns boolean as
$$
select f.country != t.country
from guided.rides as r
         inner join guided.spots f
                    on r.from_spot = f.id
         inner join guided.spots t on r.to_spot = t.id
where ride.id = r.id;
$$ language sql stable;