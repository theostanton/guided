create table spots
(
    id       varchar(128)             not null
        constraint spots_pk
            primary key,
    label    varchar(128),
    guide    varchar(128)             not null
        constraint spots_guides_id_fk
            references guides
            on delete cascade,
    owner    varchar(64)              not null
        constraint spots_users_username_fk
            references users
            on delete cascade,
    nights   integer default 0,
    locked   boolean                  not null,
    lat      double precision         not null,
    long     double precision         not null,
    position varchar(16),
    location varchar(64),
    country  varchar(64),
    date     varchar(16),
    created  timestamp with time zone not null,
    updated  timestamp with time zone
);

alter table spots
    owner to superuser;

create unique index spots_id_uindex
    on spots (id);

