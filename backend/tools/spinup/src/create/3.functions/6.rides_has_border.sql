create or replace function rides_has_border(ride rides) returns boolean as
$$
select f.country != t.country
from rides as r
         inner join spots f
                    on r.from_spot = f.id
         inner join spots t on r.to_spot = t.id
where ride.id = r.id;
$$ language sql stable;