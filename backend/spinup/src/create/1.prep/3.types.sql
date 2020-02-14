create type guided.jwt_token as
(
    role     text,
    username text,
    exp      bigint
);