create type guided.jwt_token as
(
    "role"   text,
    username varchar(128),
    exp      bigint
);

create type guided.Bounds as
(
    north double precision,
    east  double precision,
    south double precision,
    west  double precision
);