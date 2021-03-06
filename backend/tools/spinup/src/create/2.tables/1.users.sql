create table users
(
    username      varchar(128)             not null
        constraint users_pk
            primary key,
    email         varchar(128)             not null,
    password_hash varchar(128)             not null,
    colour        colour,
    created       timestamp with time zone not null,
    updated       timestamp with time zone
);

alter table users
    owner to superuser;

create unique index users_email_uindex
    on users (email);

create unique index users_username_uindex
    on users (username);