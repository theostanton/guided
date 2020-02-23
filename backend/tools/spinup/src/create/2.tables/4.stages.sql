create table stages
(
    id        varchar(64)              not null
        constraint stages_pk
            primary key,
    guide     varchar(64)              not null
        constraint stages_guides_id_fk
            references guides,
    from_spot varchar(64)              not null
        constraint stages_spots_id_fk
            references spots,
    to_spot   varchar(64)              not null
        constraint stages_spots_id_fk_2
            references spots,
    created   timestamp with time zone not null,
    updated   timestamp with time zone,
    status    stage_status      not null
);

alter table stages
    owner to superuser;

create index stages_guide_index
    on stages (guide);

create unique index stages_id_uindex
    on stages (id);

