create type jwt_token as
(
    role     text,
    username text,
    exp      bigint
);