#!/bin/bash

# check the routes
sudo iptables -t nat -L

# reroute incoming packets on 80 to 8000
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8000

# hmm..
# sudo iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 8443

# serve current directory (e.g., `cd dist/ && serve`)
# serve --port 8000
