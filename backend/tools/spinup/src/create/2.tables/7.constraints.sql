alter table guided.spots
    add column
        stage varchar(64)
            constraint spots_stages_id_fk
                references guided.stages