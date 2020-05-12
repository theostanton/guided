create or replace function guides_end_date(_guide guides) returns varchar(16) as
$$
select max(s.date)
from spots as s
where _guide.id = s.guide
$$ language sql stable
;

