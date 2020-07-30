create extension pgcrypto;

create table users (
  uid serial primary key not null,
  uname varchar(12) not null,
  uemail varchar(50) unique not null,
  upassword varchar(60) not null,
  uborn date not null default now(),
  nakey varchar(256) not null
);

insert into users (uname, uemail, upassword, nakey) values (
  'rainbows', 'rainbows@clouds.io', crypt('sugarcane', gen_salt('bf')), crypt('', gen_salt('bf'))
);

insert into users (
  uname, uemail, upassword, nakey
) values (
  'braun', 'braun@localhost',
  crypt('braun', gen_salt('bf')),
  encrypt(bytea '6K-6uaKY9rKQ42Q6gF7Qk5UGbAKmnO_kEU7wFUyP7SDKTqsJES4FR3T4R_tx_4YL_VjED-xLRfdPlzRDramitbqzcUlMudVT6a4e', 'secret-key', 'bf')
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