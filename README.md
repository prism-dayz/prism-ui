# machine provision

```curl -o- https://raw.githubusercontent.com/brngdsn/archaeon/master/devops/install.sh | bash```

# machine config

execute the `devops/config.sh` script to route incoming `80->8000` and `443->8443`

# db admin

```yarn initdb && yarn createdb```