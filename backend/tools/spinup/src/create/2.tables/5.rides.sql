create table rides
(
    id               varchar(128)             not null
        constraint rides_pk
            primary key,
    guide            varchar(128)             not null
        constraint rides_guides_id_fk
            references guides
            on delete cascade,
    owner            varchar(64)              not null
        constraint rides_users_username_fk
            references users
            on delete cascade,
    from_spot        varchar(128)             not null
        constraint rides_from_spots_id_fk
            references spots
            on delete cascade,
    to_spot          varchar(128)             not null
        constraint rides_to_spots_id_fk
            references spots
            on delete cascade,
    path_url         varchar(256),
    duration_seconds integer,
    distance_meters  integer,
    date             varchar(16),
    stage            varchar(64)              not null
        constraint rides_stages_id_fk
            references stages
            on delete cascade,
    position         varchar(16),
    status           ride_status       not null,
    created          timestamp with time zone not null,
    updated          timestamp with time zone
);

alter table rides
    owner to superuser;

create unique index rides_id_uindex
    on rides (id);

