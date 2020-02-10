create table guided.spots
(
    id varchar(128) not null
        constraint spots_pk
            primary key,
    label varchar(128),
    guide varchar(128) not null
        constraint spots_guides_id_fk
            references guided.guides,
    owner varchar(64) not null
        constraint spots_users_username_fk
            references guided.users,
    nights integer,
    locked boolean,
    lat double precision,
    long double precision
);

create unique index spots_id_uindex
    on guided.spots (id);

