drop function if exists register(text, text, text);
drop function if exists authenticate(text, text);
drop function if exists "get_current_user"();
drop function if exists "rides_name"(ride guided.rides);
drop function if exists "spots_temperature"(spots guided.spots);
drop function if exists "rides_has_border"(ride guided.rides);
drop function if exists "guides_bounds"(_guide guided.guides);
