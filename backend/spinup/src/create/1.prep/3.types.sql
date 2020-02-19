

DO $$
    BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'jwt_token') THEN
            create type guided.jwt_token as
            (
                "role"   text,
                username varchar(128),
                exp      bigint
            );
        END IF;
    END
$$;


DO $$
    BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'bounds') THEN
            create type guided.Bounds as
            (
                north double precision,
                east  double precision,
                south double precision,
                west  double precision
            );
        END IF;
    END
$$;