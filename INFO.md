https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html#troubleshoot-unprotected-key

chmod 0400 .ssh/my_private_key.pem

# mac
pg_ctl -D /usr/local/var/postgres start

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