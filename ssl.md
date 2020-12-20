NAME=mydomain.com

openssl genrsa -out $NAME.key 2048

# Create a certificate-signing request
openssl req -new -key archaeon-ssl.key -out $NAME.csr

# Create a config file for the extensions

>$NAME.ext cat <<-EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
[alt_names]
DNS.1 = archaeon.
EOF
# Create the signed certificate
openssl x509 -req -in $NAME.csr -CA myCA.pem -CAkey myCA.key -CAcreateserial \
-out $NAME.crt -days 825 -sha256 -extfile $NAME.ext









openssl genrsa -des3 -out archaeon-ca.key 2048
passphrase: (potterybarn)

openssl req -x509 -new -nodes -key archaeon-ca.key -sha256 -days 825 -out archaeon-ca.pem










openssl req -x509 -nodes -days 730 -newkey rsa:2048 -keyout archaeon-ssl.key -out archaeon-ssl.pem -config archaeon-ssl.cnf -sha256