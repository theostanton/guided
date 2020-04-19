create table feed_events
(
    timestamp timestamp       not null
        constraint feed_events_pk
            primary key,
    type      feed_event_type not null,
    ride      varchar(64)
        constraint feed_events_rides_id_fk
            references rides
            on delete cascade,
    guide     varchar(64)
        constraint feed_events_guides_id_fk
            references guides
            on delete cascade,
    "user"    varchar(64)
        constraint feed_events_users_username_fk
            references users
            on delete cascade
);

alter table feed_events
    owner to superuser;

create unique index feed_events_id_uindex
    on feed_events (timestamp);