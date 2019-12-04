create schema public;

comment on schema public is 'standard public schema';

alter schema public owner to "user";

create table users
(
    id varchar(32) not null
        constraint users_pk
            primary key,
    email varchar(64) not null,
    username varchar(64)
);

alter table users owner to "user";

create unique index users_email_uindex
    on users (email);

create unique index users_id_uindex
    on users (id);

create table guides
(
    id varchar(32) not null
        constraint guides_pk
            primary key,
    "user" varchar(32) not null
        constraint guides_users_id_fk
            references users
            on update cascade on delete cascade,
    daily_limit_meters integer
);

alter table guides owner to "user";

create unique index guides_id_uindex
    on guides (id);

create table addresses
(
    id varchar(32) not null
        constraint addresses_pk
            primary key,
    address1 varchar(64),
    address2 varchar(64),
    city varchar(64),
    country varchar(64)
);

alter table addresses owner to "user";

create unique index addresses_id_uindex
    on addresses (id);

create table locations
(
    id varchar(32) not null
        constraint locations_pk
            primary key,
    label varchar(64),
    lat double precision not null,
    long double precision not null,
    address varchar(32)
        constraint locations_addresses_id_fk
            references addresses
);

alter table locations owner to "user";

create unique index locations_id_uindex
    on locations (id);

create table stays
(
    id varchar(32) not null
        constraint stays_pk
            primary key,
    location varchar(32) not null
        constraint stays_locations_id_fk
            references locations,
    locked boolean,
    guide varchar(32) not null
        constraint stays_guides_id_fk
            references guides
);

alter table stays owner to "user";

create unique index stays_id_uindex
    on stays (id);

create table rides
(
    id varchar(32) not null
        constraint rides_pk
            primary key,
    start varchar(32) not null
        constraint rides_start_locations_id_fk
            references locations,
    "end" varchar(32)
        constraint rides_end_locations_id_fk
            references locations,
    route json
);

alter table rides owner to "user";

create unique index rides_id_uindex
    on rides (id);

