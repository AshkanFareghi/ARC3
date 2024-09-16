openssl rand -base64 756 > ./keys/mongo.keyfile
chmod 400 ./keys/mongo.keyfile


openssl genrsa -out ./keys/privkey.pem 2048
openssl rsa -in ./keys/privkey.pem -out ./keys/pubkey.pem
openssl req -new -x509 -key ./keys/privkey.pem > fullchain.pem