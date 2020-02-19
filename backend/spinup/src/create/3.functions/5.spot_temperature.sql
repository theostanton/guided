create or replace function guided.spots_temperature(spot guided.spots) returns double precision as
$$
select temperature
from guided.temperatures
where lower(country) = lower(spot.country)
  and month = DATE_PART('month', spot.date)
$$ LANGUAGE sql STABLE;