create or replace function spots_name(spot spots) returns text as
$$
select coalesce(spot.label, spot.location)
$$ language sql stable;