create extension pgcrypto;

create table users (
  uid serial primary key not null,
  uname varchar not null,
  upassword text not null,
  uborn date not null default now()
);

insert into users (uname, upassword) values ('rainbows@clouds.io', crypt('sugarcane', gen_salt('bf')));
