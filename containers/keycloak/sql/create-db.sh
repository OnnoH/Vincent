psql -U Vincent -tc "SELECT 1 FROM pg_database WHERE datname = 'keycloak'" \
| grep -q 1 || psql -U Vincent -c "CREATE DATABASE keycloak"

psql -U Vincent -c "CREATE USER keycloak WITH PASSWORD 'kc'"