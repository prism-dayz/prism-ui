create database archaeon;
create user methanogen with encrypted password 'methane';
grant all privileges on database archaeon to methanogen;
grant all privileges on all tables in schema public to methanogen;
grant usage, select on all sequences in schema public to methanogen;
