create table computations
(
    id       varchar(64)               not null
        constraint computations_pk
            primary key,
    ended    timestamp,
    duration integer,
    status   computation_status not null,
    stage    varchar(64)
        constraint computations_stages_id_fk
            references stages
            on delete set null,
    guide    varchar(64)               not null
        constraint computations_guides_id_fk
            references guides
            on delete cascade,
    created  timestamp with time zone  not null,
    started  timestamp with time zone
);

alter table computations
    owner to superuser;

create unique index computations_id_uindex
    on computations (id);

