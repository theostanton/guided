create or replace function users_following_status(_user users) returns following_status
as
$$
select (case
           when is_anonymous then 'anonymous'
           when is_self then 'is_self'
           when f.followed is not null then 'following'
           else 'not_following' end)::following_status
from (select current_setting('jwt.claims.username', true)::text is null as is_anonymous) as a
         inner join (select current_setting('jwt.claims.username', true)::text = _user.username as is_self) as s on true
         left outer join follows as f on f.followed = _user.username;
$$
    language sql
    stable;
