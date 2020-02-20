create table guided.temperatures
(
    id          varchar(64)      not null
        constraint temperatures_pk
            primary key,
    country     varchar(16)      not null,
    month       integer          not null,
    temperature double precision not null,
    created     timestamptz      not null,
    updated     timestamptz
);

create unique index temperatures_id_uindex
    on guided.temperatures (id);

