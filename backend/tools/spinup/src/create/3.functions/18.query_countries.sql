create or replace function countries() returns varchar(2)[] as
$$
select array_remove(array_agg(distinct s.country), null)
from spots as s
$$ language sql immutable
;