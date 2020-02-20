create table guided.computations
(
    id       varchar(64)               not null
        constraint computations_pk
            primary key,
    ended    timestamp,
    duration integer,
    status   guided.computation_status not null,
    stage    varchar(64)               not null
        constraint computations_stages_id_fk
            references guided.stages
            on delete cascade,
    guide    varchar(64)               not null
        constraint computations_guides_id_fk
            references guided.guides
            on delete cascade,
    created  timestamptz               not null,
    started  timestamptz
);

alter table guided.computations
    owner to superuser;

create unique index computations_id_uindex
    on guided.computations (id);

