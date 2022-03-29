### Setup LetsEncrypt
`./initialize-letsencrypt`

### Start Services
`docker-compose -f docker-compose.prod.yml up --build -d`

### View logs
`docker-compose -f docker-compose.prod.yml logs -f`

### Shut down
`docker-compose -f docker-compose.prod.yml down`
