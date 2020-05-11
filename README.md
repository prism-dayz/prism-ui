# archaeon

login to cloud host e.g., `EC2_HOST=<eg-ec-host> yarn ec2`

# machine provision

```curl -o- https://raw.githubusercontent.com/brngdsn/archaeon/master/devops/install.sh | bash```

then can clone

```git clone https://github.com/brngdsn/archaeon```

then `cd` into repo to continue...

(you may have to `nvm use <some-version>` or relog)

# machine config

execute the `devops/config.sh` script to route incoming `80->8000` and `443->8443`

# db admin

```yarn createdb && yarn initdb```