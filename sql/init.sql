create extension pgcrypto;

create table users (
  uid serial primary key not null,
  uname varchar(12) not null,
  uemail varchar(50) unique not null,
  upassword varchar(60) not null,
  uborn date not null default now(),
  nakey varchar(256) not null,
  dakey varchar(256) not null
);

insert into users (uname, uemail, upassword, nakey, dakey) values (
  'rainbows', 'rainbows@clouds.io', crypt('sugarcane', gen_salt('bf')), crypt('', gen_salt('bf')), crypt('', gen_salt('bf'))
);

insert into users (
  uname, uemail, upassword, nakey, dakey
) values (
  'braun', 'braun@localhost',
  crypt('braun', gen_salt('bf')),
  encrypt(bytea '6K-6uaKY9rKQ42Q6gF7Qk5UGbAKmnO_kEU7wFUyP7SDKTqsJES4FR3T4R_tx_4YL_VjED-xLRfdPlzRDramitbqzcUlMudVT6a4e', 'secret-key', 'bf'),
  encrypt(bytea 'Njk5MDMxMTM4ODAyNTk3OTE4.XpOdeg.eEpW3Hf7g2Oyijpwx_x8X0Thc7c', 'secret-key', 'bf')
);

create table servers (
  sid serial primary key not null,
  sname varchar(128) unique not null,
  snitradoserviceid varchar(64) unique not null,
  sborn date not null default now(),
  sactive integer not null default 0,
  sloglastsize integer not null default 0,
  sloglastftppath varchar default null,
  uid integer not null,
  foreign key (uid) references users(uid)
);

create table players (
  pid varchar(128) primary key not null,
  pxboxid varchar(128) not null,
  pname varchar(64) not null,
  sid integer not null,
  foreign key (sid) references servers(sid)
);

-- across all reinstalls and
create table alltimestats (
  akills integer not null default 0,
  adeaths integer not null default 0,
  adamage integer not null default 0,
  ameters numeric not null default 0,
  asurvivetime integer not null default 0,
  akstreak integer not null default 0,
  pid varchar(128) not null,
  foreign key (pid) references players(pid)
);

-- rows will remain pretty much, but will effectively reset if a game server is determined to have been reinstalled
create table currentstats (
  ckills integer not null default 0,
  cdeaths integer not null default 0,
  cdamage integer not null default 0,
  cmeters numeric not null default 0,
  csurvivetime integer not null default 0,
  ckstreak integer not null default 0,
  pid varchar(128) not null,
  foreign key (pid) references players(pid)
);

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