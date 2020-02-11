create table guided.spots
(
    id     varchar(128)     not null
        constraint spots_pk
            primary key,
    label  varchar(128),
    guide  varchar(128)     not null
        constraint spots_guides_id_fk
            references guided.guides,
    owner  varchar(64)      not null
        constraint spots_users_username_fk
            references guided.users,
    nights integer default 0,
    locked boolean          not null,
    lat    double precision not null,
    long   double precision not null
);

create unique index spots_id_uindex
    on guided.spots (id);

