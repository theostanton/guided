create table temperatures
(
    id          varchar(64)      not null
        constraint temperatures_pk
            primary key,
    country     varchar(16)      not null,
    month       integer          not null,
    temperature double precision not null
);

create unique index temperatures_id_uindex
    on temperatures (id);

