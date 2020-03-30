create or replace function spots_temperature(spot spots) returns double precision as
$$
select temperature
from temperatures
where lower(country) = lower(spot.country)
  and month = split_part(spot.date, '-', 2)::int
$$ LANGUAGE sql STABLE;