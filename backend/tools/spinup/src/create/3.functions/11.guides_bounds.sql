create or replace function guides_bounds(_guide guides) returns bounds as
$$
select max(s.lat)  as north,
       max(s.long) as west,
       min(s.lat)  as south,
       min(s.long) as east
from spots as s
where guide = _guide.id
group by s.guide
$$ language sql stable
;

