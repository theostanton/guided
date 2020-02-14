create type jwt_token as
(
    "role"   text,
    username varchar(128),
    exp      bigint
);