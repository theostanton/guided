DO
$$
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM pg_type WHERE typname = 'jwt_token') THEN
            create type guided.jwt_token as
            (
                "role"   text,
                username varchar(128),
                exp      bigint
            );
        END IF;
    END
$$;


DO
$$
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM pg_type WHERE typname = 'bounds') THEN
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

DO
$$
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM pg_type WHERE typname = 'stage_status') THEN
            create type guided.stage_status as enum (
                'complete',
                'ready',
                'computing',
                'stale'
                );

            create type guided.ride_status as enum (
                'complete',
                'ready',
                'stale'
                );

            create type guided.spot_status as enum (
                'complete',
                'ready',
                'computing',
                'stale'
                );
        END IF;
    END
$$;