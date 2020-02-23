-- users
alter table users
    enable row level security;
create policy select_users on users for select using (true);

create policy update_user on users for update to guided_user
    using (users.username = nullif(current_setting('jwt.claims.username', true), '')::text);

-- guides
alter table guides
    enable row level security;

create policy create_guide on guides for insert
    with check (owner = nullif(current_setting('jwt.claims.username', true), '')::text);

create policy select_guides on guides for select using (true);

create policy update_guide on guides for update to guided_user
    using (guides.owner = nullif(current_setting('jwt.claims.username', true), '')::text);

create policy delete_guide on guides for delete to guided_user
    using (guides.owner = nullif(current_setting('jwt.claims.username', true), '')::text);

-- rides
alter table rides
    enable row level security;

create policy create_ride on rides for insert;

create policy select_grides on rides for select
    using (rides.owner = nullif(current_setting('jwt.claims.username', true), '')::text);

create policy update_ride on rides for update
    using (rides.owner = nullif(current_setting('jwt.claims.username', true), '')::text);

create policy delete_ride on rides for delete
    using (rides.owner = nullif(current_setting('jwt.claims.username', true), '')::text);

-- spots
alter table spots
    enable row level security;

create policy create_spot on spots for insert;

create policy select_spots on spots for select
    using (owner = nullif(current_setting('jwt.claims.username', true), '')::text);

create policy update_spot on spots for update
    using (owner = nullif(current_setting('jwt.claims.username', true), '')::text);

create policy delete_spot on spots for delete
    using (owner = nullif(current_setting('jwt.claims.username', true), '')::text);