create table users
(
    username      varchar(128) not null
        constraint users_pk
            primary key,
    email         varchar(128) not null,
    password_hash varchar(128) not null
);

create unique index users_email_uindex
    on users (email);

create unique index users_username_uindex
    on users (username);

