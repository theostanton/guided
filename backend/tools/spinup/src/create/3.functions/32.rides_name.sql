create or replace function rides_name(ride rides) returns text as
$$
select concat(coalesce(f.label, f.location), ' to ', coalesce(t.label, t.location))
from rides as r
         inner join spots f
                    on r.from_spot = f.id
         inner join spots t on r.to_spot = t.id
where ride.id = r.id;
$$ language sql stable;