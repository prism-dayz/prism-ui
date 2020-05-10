create database egdb1;
create user egdbuser1 with encrypted password 'abc123';
grant all privileges on database egdb1 to egdbuser1;

use egdb1;

create extension pgcrypto;

create table users (
  uid serial primary key not null,
  uname varchar not null,
  upassword text not null,
  uborn date not null default now()
);

insert into users (uname, upassword) values ('rainbows@clouds.io', crypt('sugarcane', gen_salt('bf')));
