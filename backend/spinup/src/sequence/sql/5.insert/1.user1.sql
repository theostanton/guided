select *
from guided.register('user1', 'user1@email.com', 'password');

-- insert into guided.guides
-- values ('guide_1234', 'User1s first guide', 'user1s-first-guide', 'user1', null);
--
-- insert into guided.spots
-- values ('spot_1234', 'Locked spot no1 of Users1s first guide', 'guide_1234', 1, true);
--
-- insert into guided.spots
-- values ('spot_5678', 'Locked spot no2 of Users1s first guide', 'guide_1234', 2, true);
--
-- insert into guided.rides
-- values ('ride_1234', 'guide_1234', 'spot_1234', 'spot_5678')