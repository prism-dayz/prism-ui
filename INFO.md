https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html#troubleshoot-unprotected-key

chmod 0400 .ssh/my_private_key.pem

# mac

pg_ctl -D /usr/local/var/postgres start
createdb
also dropdb
archaeon=# show hba_file;
psql -U methanogen archaeon < ~/Desktop/archaeon-2020-01-30.pg_dump

use native `createdb archaeon` and then edit the hba, then the last two lines in the `create-db.sql` file, then the `init-db.sql`

```
createdb archaeon
cat ./sql/init.sql | psql -d archaeon

```

# linux

```
sudo service postgresql initdb
sudo /etc/init.d/postgresql restart
sudo vim /var/lib/pgsql9/data/pg_hba.conf
```
add

```
host    archaeon    methanogen        127.0.0.1            md5
```

```
sudo /etc/init.d/postgresql restart
```

sudo -u postgres psql

anytime you drop a table you need to re give the privs to the db user
