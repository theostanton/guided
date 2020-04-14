create table follows
(
    followed  varchar(64) not null
        constraint followers_fk
            references users
            on delete cascade,
    follower  varchar(64) not null
        constraint follows_fk
            references users,
    timestamp timestamp   not null
);

alter table follows
    owner to superuser;

