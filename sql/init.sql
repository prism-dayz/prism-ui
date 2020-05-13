create extension pgcrypto;

create table users (
  uid serial primary key not null,
  uname varchar(12) not null,
  uemail varchar(50) unique not null,
  upassword varchar(60) not null,
  uborn date not null default now()
);

insert into users (uname, uemail, upassword) values ('rainbows', 'rainbows@clouds.io', crypt('sugarcane', gen_salt('bf')));

create table traffic (
  tid serial primary key not null,
  thostname varchar not null,
  tip varchar not null,
  tborn date not null default now()
);
