comment on schema public is 'standard public schema';

alter schema public owner to "user";

create table if not exists users
(
    id    serial      not null
        constraint users_pk
            primary key,
    email varchar(64) not null
);

alter table users
    owner to "user";

create unique index if not exists users_email_uindex
    on users (email);

create unique index if not exists users_id_uindex
    on users (id);

create table if not exists guides
(
    id                 serial  not null
        constraint guides_pk
            primary key,
    "user"             integer not null
        constraint guides_users_id_fk
            references users
            on update cascade on delete cascade,
    daily_limit_meters integer
);

alter table guides
    owner to "user";

create unique index if not exists guides_id_uindex
    on guides (id);

create table if not exists locations
(
    id    serial           not null
        constraint locations_pk
            primary key,
    label varchar(64),
    lat   double precision not null,
    long  double precision not null
);

alter table locations
    owner to "user";

create unique index if not exists locations_id_uindex
    on locations (id);

create table if not exists spots
(
    id       serial  not null
        constraint spots_pk
            primary key,
    location integer not null
        constraint spots_locations_id_fk
            references locations
);

alter table spots
    owner to "user";

create unique index if not exists spots_id_uindex
    on spots (id);

create table if not exists stays
(
    id     serial  not null
        constraint stays_pk
            primary key,
    spot   integer not null
        constraint stays_spots_id_fk
            references spots,
    locked boolean,
    guide  integer not null
        constraint stays_guides_id_fk
            references guides
);

alter table stays
    owner to "user";

create unique index if not exists stays_id_uindex
    on stays (id);

create table if not exists rides
(
    id    serial  not null
        constraint rides_pk
            primary key,
    start integer not null
        constraint rides_start_spots_id_fk
            references spots,
    "end" integer
        constraint rides_end_spots_id_fk
            references spots
);

alter table rides
    owner to "user";

create unique index if not exists rides_id_uindex
    on rides (id);

