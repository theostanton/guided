create or replace function feed(_username varchar(64), per_page integer, page_offset integer) returns SETOF feed_events
    immutable
    language sql
as
$$
with following as (
    select *
    from follows as f
    where f.follower = _username
),
     new_guides as (
         select g.created ::timestamp        as timestamp,
                'new_guide'::feed_event_type as type,
                null                         as ride,
                g.id                         as guide,
                g.owner                      as "user"
         from guides as g
                  inner join following as f on f.followed = g.owner
     ),
     new_follows as (
         select f.timestamp ::timestamp        as timestamp,
                'new_follows'::feed_event_type as type,
                null                           as ride,
                null                           as guide,
                f.follower                     as "user"
         from follows as f
         where f.followed = _username
     ),
     self_created as (
         select u.created ::timestamp           as timestamp,
                'self_created'::feed_event_type as type,
                null                            as ride,
                null                            as guide,
                u.username                      as "user"
         from users as u
         where u.username = _username
     ),
     joined as (
         select u.created ::timestamp           as timestamp,
                'joined'::feed_event_type as type,
                null                            as ride,
                null                            as guide,
                u.username                      as "user"
         from users as u
         where u.username = _username
     )
select *
from new_guides
union
select *
from new_follows
union
select *
from self_created
order by timestamp desc
$$;

alter function feed(_username varchar(64), per_page integer, page_offset integer) owner to superuser;

