create table guides
(
    id                 varchar(64)       not null
        constraint guides_pk
            primary key,
    title              varchar(64)       not null,
    slug               varchar(64)       not null,
    owner              varchar(64)       not null
        constraint guides_users_username_fk
            references users,
    start_date         date,
    max_hours_per_ride integer default 6 not null
);

create unique index guides_id_uindex
    on guides (id);

create index guides_slug_index
    on guides (slug);

