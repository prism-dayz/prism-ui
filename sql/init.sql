create table users (
  uid serial primary key not null,
  uname varchar(128) not null,
  uemail varchar(50) unique not null,
  upassword varchar(60) not null,
  uborn date not null default now(),
  nakey varchar(256) not null,
  dakey varchar(256) not null
);

--
--
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
  sactive integer not null default 0,
  sloglastsize integer not null default 0,
  sloglastftppath varchar default null,
  uid integer not null,
  foreign key (uid) references users(uid)
);

--
--
-- new server
insert into servers (sid, sname, uid) values ('nitrado-service-id-001', 'eg the one and only', 1);
insert into servers (sid, sname, uid) values ('nitrado-service-id-002', 'eg ships ahoy', 2);
insert into servers (sid, sname, uid) values ('nitrado-service-id-002a', 'eg stowaway', 2);
insert into servers (sid, sname, uid) values ('nitrado-service-id-003', 'eg trifecta', 3);

create table players (
  -- pid is the xbox id
  pid varchar(64) primary key not null,
  pname varchar(64) unique not null
);

--
--
-- new player, also need to insert into playersservers
insert into players (pid, pname) values ('xbox-id-001', 'theone');
insert into players (pid, pname) values ('xbox-id-002', 'captain');

-- represents link between player and server, contains stats, current, alltime (across the board is just a query)
create table playersservers (
  psid serial primary key not null,
  pskills integer not null default 0,
  psdeaths integer not null default 0,
  psdamage integer not null default 0,
  psmeters real not null default 0.0,
  pskd real not null default 0.0,
  pid varchar(64) not null,
  sid varchar(64) not null,
  foreign key (pid) references players(pid),
  foreign key (sid) references servers(sid)
);

--
--
-- new link (stats) between player and server
insert into playersservers (pid, sid) values ('xbox-id-001','nitrado-service-id-001');
insert into playersservers (pid, sid) values ('xbox-id-002','nitrado-service-id-001');
insert into playersservers (pid, sid) values ('xbox-id-002','nitrado-service-id-002');

-- represents a link between an archaeon user and a player
create table usersplayers (
  uid integer not null,
  pid varchar(64) not null,
  primary key (uid, pid),
  foreign key (uid) references users(uid),
  foreign key (pid) references players(pid)
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

--
--
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
