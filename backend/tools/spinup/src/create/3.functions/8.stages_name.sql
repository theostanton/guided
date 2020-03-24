create or replace function stages_name(_stage stages) returns text as
$$
select concat(coalesce(f.label, f.location), ' to ', coalesce(t.label, t.location))
from stages as s
         inner join spots f
                    on s.from_spot = f.id
         inner join spots t on s.to_spot = t.id
where _stage.id = s.id;
$$ language sql stable;