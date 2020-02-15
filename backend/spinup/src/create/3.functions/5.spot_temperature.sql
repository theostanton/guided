create or replace function guided.spots_temperature(spots spots) returns double precision as
$$
select temperature
from guided.temperatures
where lower(country) = lower(spots.country)
  and month = DATE_PART('month', spots.date)
$$ LANGUAGE sql STABLE;