create or replace function users_countries(_user users) returns varchar(2)[] as
$$
select array_remove(array_agg(distinct s.country), null)
from spots as s
where _user.username = s.owner
$$ language sql stable
;

