#!/bin/bash

# this file aquires binary dependencies for the build run-time

# update this machine
sudo yum update -y

# add git
sudo yum install -y git

# should get zsh here

# install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash

# source it
. ~/.nvm/nvm.sh

# install nodejs
nvm install v12.16.2

# install yarn
npm install -g yarn

# postgres
sudo yum install postgresql postgresql-server postgresql-contrib -y
sudo service postgresql initdb
sudo service postgresql restart
