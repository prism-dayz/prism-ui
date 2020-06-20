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
