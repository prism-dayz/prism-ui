create table users (
  uid serial primary key not null,
  uname varchar(128) not null,
  uemail varchar(50) unique not null,
  upassword varchar(60) not null,
  uborn date not null default now(),
  nakey varchar(256) not null,
  dakey varchar(256) not null
);

-- new user
insert into users (
  uname, uemail, upassword, nakey, dakey
) values (
  'braun', 'braun@localhost',
  crypt('braun', gen_salt('bf')),
  encrypt(bytea '6K-6uaKY9rKQ42Q6gF7Qk5UGbAKmnO_kEU7wFUyP7SDKTqsJES4FR3T4R_tx_4YL_VjED-xLRfdPlzRDramitbqzcUlMudVT6a4e', 'secret-key', 'bf'),
  encrypt(bytea 'Njk5MDMxMTM4ODAyNTk3OTE4.XpOdeg.eEpW3Hf7g2Oyijpwx_x8X0Thc7c', 'secret-key', 'bf')
);
insert into users (
  uname, uemail, upassword, nakey, dakey
) values (
  'neo', 'theone@matrix.io',
  crypt('neo', gen_salt('bf')),
  encrypt(bytea '6K-6uaKY9rKQ42Q6gF7Qk5UGbAKmnO_kEU7wFUyP7SDKTqsJES4FR3T4R_tx_4YL_VjED-xLRfdPlzRDramitbqzcUlMudVT6a4e', 'secret-key', 'bf'),
  encrypt(bytea 'Njk5MDMxMTM4ODAyNTk3OTE4.XpOdeg.eEpW3Hf7g2Oyijpwx_x8X0Thc7c', 'secret-key', 'bf')
);
insert into users (
  uname, uemail, upassword, nakey, dakey
) values (
  'morpheus', 'captain@neberchedezza.io',
  crypt('morpheus', gen_salt('bf')),
  encrypt(bytea '6K-6uaKY9rKQ42Q6gF7Qk5UGbAKmnO_kEU7wFUyP7SDKTqsJES4FR3T4R_tx_4YL_VjED-xLRfdPlzRDramitbqzcUlMudVT6a4e', 'secret-key', 'bf'),
  encrypt(bytea 'Njk5MDMxMTM4ODAyNTk3OTE4.XpOdeg.eEpW3Hf7g2Oyijpwx_x8X0Thc7c', 'secret-key', 'bf')
);

create table servers (
  -- this is the nitrado service id
  sid varchar(64) primary key not null,
  sname varchar(128) unique not null,
  sborn date not null default now(),
  sdchannel varchar(64) default null,
  sactive integer not null default 0,
  schannel varchar(64) default null,
  sportlist varchar(16) default null,
  sloglastsize integer not null default 0,
  sloglastftppath varchar default null,
  uid integer not null,
  foreign key (uid) references users(uid) on delete cascade on update cascade
);

-- new server
insert into servers (sid, sname, uid) values ('nitrado-service-id-001', 'eg the one and only', 1);
insert into servers (sid, sname, uid) values ('nitrado-service-id-002', 'eg ships ahoy', 2);
insert into servers (sid, sname, uid) values ('nitrado-service-id-002a', 'eg stowaway', 2);
insert into servers (sid, sname, uid) values ('nitrado-service-id-003', 'eg trifecta', 3);

create table players (
  -- pid is the xbox id
  pid varchar(64) primary key not null,
  pname varchar(64) unique not null,
  pdid varchar(64) default null
);

-- new player, also need to insert into playersservers
insert into players (pid, pname) values ('xbox-id-001', 'theone');
insert into players (pid, pname) values ('xbox-id-002', 'captain');

-- represents link between player and server, contains stats, current, alltime (across the board is just a query)
create table playersservers (
  psid serial primary key not null,
  pskills integer not null default 0,
  psdeaths integer not null default 0,
  psdamage numeric(10,2) not null default 0,
  psmeters numeric(10,5) not null default 0.0,
  pskd numeric(7,4) not null default 0.0,
  psheadshots integer not null default 0,
  psbrainshots integer not null default 0,
  psstatus integer not null default 0,
  pscurrentkillstreak integer not null default 0,
  pskillstreak integer not null default 0,
  pscredits integer not null default 500,
  pswages integer not null default 5,
  pscurrentsurvivaltime integer not null default 0,
  pssurvivaltime integer not null default 0,
  pstimeonserver integer not null default 0,
  pid varchar(64) not null,
  sid varchar(64) not null,
  foreign key (pid) references players(pid) on delete cascade on update cascade,
  foreign key (sid) references servers(sid) on delete cascade on update cascade
);

-- new link (stats) between player and server
insert into playersservers (pid, sid) values ('xbox-id-001','nitrado-service-id-001');
insert into playersservers (pid, sid) values ('xbox-id-002','nitrado-service-id-001');
insert into playersservers (pid, sid) values ('xbox-id-002','nitrado-service-id-002');

create table factions (
  fid serial primary key not null,
  fname varchar(32) not null,
  pid varchar(64) not null,
  foreign key (pid) references players(pid) on delete cascade on update cascade
);

create table factionsservers (
  fsid serial primary key not null,
  fid integer not null,
  sid varchar(64) not null,
  foreign key (fid) references factions(fid) on delete cascade on update cascade,
  foreign key (sid) references servers(sid) on delete cascade on update cascade
);

create table serversfactionsplayers (
  sfpid serial primary key not null,
  fsid integer not null,
  psid integer not null,
  foreign key (fsid) references factionsservers(fsid) on delete cascade on update cascade,
  foreign key (psid) references playersservers(psid) on delete cascade on update cascade
);

create table guilds (
  gid varchar(64) primary key not null,
  sid varchar(64) not null,
  foreign key (sid) references servers(sid) on delete cascade on update cascade
);

create table bountys (
  bid serial primary key not null,
  bborn date not null default now(),
  bissuerpsid integer not null,
  btargetpsid integer not null,
  bworth integer not null default 0,
  foreign key (bissuerpsid) references playersservers(psid) on delete cascade on update cascade,
  foreign key (btargetpsid) references playersservers(psid) on delete cascade on update cascade
);

-- represents a link between an archaeon user and a player
create table usersplayers (
  uid integer not null,
  pid varchar(64) not null,
  primary key (uid, pid),
  foreign key (uid) references users(uid) on delete cascade on update cascade,
  foreign key (pid) references players(pid) on delete cascade on update cascade
);

-- new link between player and user
insert into usersplayers (uid, pid) values (1, 'xbox-id-001');
insert into usersplayers (uid, pid) values (2, 'xbox-id-002');

create table traffic (
  tid serial primary key not null,
  thostname varchar not null,
  tip varchar not null,
  tborn date not null default now()
);

create table tokens (
  tid serial primary key not null,
  ttoken varchar not null,
  uid varchar not null
);

-- https://raw.githubusercontent.com/voxpelli/node-connect-pg-simple/master/table.sql
-- tables and ect for sessions with express

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");

-- queries
--

-- get all stats for each player from each server
select ps.pskills, p.pname, s.sname from playersservers ps, players p, servers s where p.pid = ps.pid and ps.sid = s.sid;

-- get all stats for each player from single server
select ps.pskills, p.pname, s.sname from playersservers ps, players p, servers s where p.pid = ps.pid and ps.sid = s.sid and s.sid = 'nitrado-service-id-001';

-- get all stats for each player across all servers
-- i.e., the result won't contain a server name they will be reduced
select sum(ps.pskills) as across_the_board_all_time, p.pname from playersservers ps, players p, servers s where p.pid = ps.pid and ps.sid = s.sid group by p.pname;

-- update a player kills for a specific server (on kill)
update playersservers set pskills = pskills + 1 where pid = 'xbox-id-002' and sid = 'nitrado-service-id-002';

--
select (ps.pskills/(case psdeaths when 0.0000 then 1.0000 else psdeaths end)), p.pname from playersservers ps, players p where ps.pid = p.pid;

select
  r.*, (select count(*) from playersservers) as of
from (
  select
    ps.pskd,
    p.pname,
    row_number() over(order by ps.pskd desc) as rankk
  from
    playersservers ps,
    players p
  where
    ps.pid = p.pid
  group by
    ps.pskd,
    p.pname
  order by ps.pskd desc
) r
where
  r.pname = 'im noCHARMANDER'
;

-- by headshots
select
  p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots,
  row_number() over(order by ps.pskd desc) as rankk
from
  playersservers ps,
  players p
where
  ps.pid = p.pid
group by
  p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots
order by ps.pskd desc
;

-- by kd
select
  p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus,
  (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) as score,
  row_number() over(order by (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) desc) as rankk
from
  playersservers ps,
  players p
where
  ps.pid = p.pid and ps.psstatus = 1
group by
  p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus
order by (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) desc
;

select * from (
  select
    p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus,
    (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) as score,
    row_number() over(order by (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) desc) as rankk,
    (select count(*) from playersservers) as of
  from
    playersservers ps,
    players p
  where
    ps.pid = p.pid
  group by
    p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots, ps.psstatus
  order by (ps.psheadshots + ps.psbrainshots + ps.pskd + (ps.psmeters * 0.005) + (ps.psdamage * 0.005) + ps.pskills - ps.psdeaths) desc
) as leaderboard where leaderboard.pname = 'sundaysatan'
;

select p.pname, ps.pskills, ps.psdeaths, ps.pskd, ps.psdamage, ps.psmeters, ps.psheadshots, ps.psbrainshots from playersservers ps, players p where ps.pid = p.pid;

update playersservers set psstatus = 0 where pid = 'F0AA981AF53143BA6EFBF52657C38702C1EF74B7';
update playersservers set psstatus = 0 where pid = '33577DBBDADBD7F86D2CB519DB21491AD4A20BCA';
update playersservers set psstatus = 0 where pid = 'E8C2FF85987F69756BA81DA2D2447B5EE10DC718';
update playersservers set psstatus = 0 where pid = '9F1ADA042A1C2FC3A99DA762780C0BD6D95380DB';
update playersservers set psstatus = 0 where pid = '9F1ADA042A1C2FC3A99DA762780C0BD6D95380DB';
update playersservers set psstatus = 0 where pid = '4C117411D887CC0CAF73CA6665E28911808D4872';
update playersservers set psstatus = 0 where pid = '2E4CAB0F6E49594AE81F6E4A5C7B8F2B73ED2FCD';
update playersservers set psstatus = 0 where pid = '';

select p.pname from playersservers ps, players p where ps.pid = p.pid and ps.psstatus = 1;
