create table guided.rides
(
    id varchar(128) not null
        constraint rides_pk
            primary key,
    guide varchar(128) not null
        constraint rides_guides_id_fk
            references guided.guides,
    from_spot varchar(128) not null
        constraint rides_from_spots_id_fk
            references guided.spots,
    to_spot varchar(128) not null
        constraint rides_to_spots_id_fk
            references guided.spots
);

create unique index rides_id_uindex
    on guided.rides (id);

