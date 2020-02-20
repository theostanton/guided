create table guided.stages
(
    id        varchar(64)         not null
        constraint stages_pk
            primary key,
    guide     varchar(64)         not null
        constraint stages_guides_id_fk
            references guided.guides,
    from_spot varchar(64)         not null
        constraint stages_spots_id_fk
            references guided.spots,
    to_spot   varchar(64)         not null
        constraint stages_spots_id_fk_2
            references guided.spots,
    created   timestamptz         not null,
    updated   timestamptz,
    status    guided.stage_status not null
);

alter table guided.stages
    owner to superuser;

create index stages_guide_index
    on guided.stages (guide);

create unique index stages_id_uindex
    on guided.stages (id);

