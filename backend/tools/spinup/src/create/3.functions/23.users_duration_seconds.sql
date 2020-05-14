create or replace function users_duration_seconds(_user users) returns bigint as
$$
select sum(r.duration_seconds)
from rides as r
where r.owner = _user.username
$$ language sql stable
;

