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
    with check (true);

create policy select_guides on guided.guides for select using (true);

create policy update_guide on guided.guides for update to guided_user
    using (guides.owner = nullif(current_setting('jwt.claims.username', true), '')::text);

create policy delete_guide on guided.guides for delete to guided_user
    using (guides.owner = nullif(current_setting('jwt.claims.username', true), '')::text);

-- rides
alter table guided.rides
    enable row level security;
create policy select_rides on guided.rides for select using (true);

-- spots
alter table guided.spots
    enable row level security;
create policy select_spots on guided.users for select using (true);