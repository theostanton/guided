-- users
alter table guided.users
    enable row level security;
create policy select_users on guided.users for select using (true);

create policy update_user on guided.users for update to guided_user
    using (users.username = nullif(current_setting('jwt.claims.username', true), '')::text);

-- guides
alter table guided.guides
    enable row level security;

create policy create_guide on guided.guides for insert
    with check (owner = nullif(current_setting('jwt.claims.username', true), '')::text);

create policy select_guides on guided.guides for select using (true);

create policy update_guide on guided.guides for update to guided_user
    using (guides.owner = nullif(current_setting('jwt.claims.username', true), '')::text);

create policy delete_guide on guided.guides for delete to guided_user
    using (guides.owner = nullif(current_setting('jwt.claims.username', true), '')::text);

-- rides
alter table guided.rides
    enable row level security;

create policy create_ride on guided.rides for insert;

create policy select_rides on guided.rides for select
    using (rides.owner = nullif(current_setting('jwt.claims.username', true), '')::text);

create policy update_ride on guided.rides for update
    using (rides.owner = nullif(current_setting('jwt.claims.username', true), '')::text);

create policy delete_ride on guided.rides for delete
    using (rides.owner = nullif(current_setting('jwt.claims.username', true), '')::text);

-- spots
alter table guided.spots
    enable row level security;

create policy create_spot on guided.spots for insert;

create policy select_spots on guided.spots for select
    using (owner = nullif(current_setting('jwt.claims.username', true), '')::text);

create policy update_spot on guided.spots for update
    using (owner = nullif(current_setting('jwt.claims.username', true), '')::text);

create policy delete_spot on guided.spots for delete
    using (owner = nullif(current_setting('jwt.claims.username', true), '')::text);