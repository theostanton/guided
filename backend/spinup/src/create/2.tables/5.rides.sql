create table guided.rides
(
    id               varchar(128)       not null
        constraint rides_pk
            primary key,
    guide            varchar(128)       not null
        constraint rides_guides_id_fk
            references guided.guides,
    owner            varchar(64)        not null
        constraint rides_users_username_fk
            references guided.users,
    from_spot        varchar(128)       not null
        constraint rides_from_spots_id_fk
            references guided.spots
            on delete cascade,
    to_spot          varchar(128)       not null
        constraint rides_to_spots_id_fk
            references guided.spots
            on delete cascade,
    path_url         varchar(256),
    duration_seconds integer,
    distance_meters  integer,
    date             date,
    stage            varchar(64)        not null
        constraint rides_stages_id_fk
            references guided.stages,
    position         varchar(16),
    status           guided.ride_status not null,
    created          timestamptz        not null,
    updated          timestamptz
);

alter table guided.rides
    owner to superuser;

create unique index rides_id_uindex
    on guided.rides (id);

