create or replace function guided.guides_bounds(_guide guided.guides) returns guided.bounds as
$$
select max(s.lat)  as north,
       max(s.long) as west,
       min(s.lat)  as south,
       min(s.long) as east
from guided.spots as s
where guide = _guide.id
group by s.guide
$$ language sql stable
;

