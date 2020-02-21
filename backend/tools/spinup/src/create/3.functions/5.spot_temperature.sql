create or replace function guided.spots_temperature(spot guided.spots) returns double precision as
$$
select temperature
from guided.temperatures
where lower(country) = lower(spot.country)
  and month = split_part(spot.date, '-', 2)::int
$$ LANGUAGE sql STABLE;