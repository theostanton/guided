create table guides
(
    id                 varchar(64)              not null
        constraint guides_pk
            primary key,
    title              varchar(64)              not null,
    slug               varchar(64)              not null,
    owner              varchar(64)              not null
        constraint guides_users_username_fk
            references users
            on delete cascade,
    start_date         varchar(16),
    max_hours_per_ride integer default 6        not null,
    created            timestamp with time zone not null,
    updated            timestamp with time zone
);

alter table guides
    owner to superuser;

create unique index guides_id_uindex
    on guides (id);

create index guides_slug_index
    on guides (slug);

