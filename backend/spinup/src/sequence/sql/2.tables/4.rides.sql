create table guided.rides
(
    id varchar(128) not null
        constraint rides_pk
            primary key,
    guide varchar(128) not null
        constraint rides_guides_id_fk
            references guided.guides,
    owner varchar(64) not null
        constraint rides_users_username_fk
            references guided.users,
    from_spot varchar(128) not null
        constraint rides_from_spots_id_fk
            references guided.spots,
    to_spot varchar(128) not null
        constraint rides_to_spots_id_fk
            references guided.spots,
    path json
);

create unique index rides_id_uindex
    on guided.rides (id);

